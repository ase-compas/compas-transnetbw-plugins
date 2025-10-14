import type { DefaultConfig, DefaultKey } from '../domain/default.model';

/**
 * Service for managing default configurations of SCL data types.
 *
 * - Only one default per (kind, instanceType) key is allowed.
 * - When setting a default:
 *    * The rootType must have id, kind, instanceType defined.
 *    * All children with typeRef must reference a type that exists in rooType or referenceTypes.
 * - This service does NOT validate against IEC 61850 standard rules — only structural consistency.
 */
export interface IDefaultService {

  /**
   * Sets or updates a default configuration for a given key.
   *
   * Validation rules:
   * - rootType.id, rootType.kind, rootType.instanceType must be defined.
   * - For each child in rootType.children:
   *    - If child.typeRef is present, a corresponding type must exist for that typeRef
   *      either in referencedTypes or as a rootType in another DefaultConfig.
   *
   * @param config DefaultConfig to store as the default for its key.
   */
  setDefault(config: DefaultConfig): void;

  /**
   * Returns the default configuration for the given key.
   * Includes the rootType and all referencedTypes.
   * Returns undefined if no default is set.
   *
   * @param key Key identifying the kind + instanceType.
   */
  getDefault(key: DefaultKey): DefaultConfig | undefined;

  /**
   * Returns all default configurations currently stored.
   */
  getAllDefaults(): DefaultConfig[];

  /**
   * Removes the default configuration for the given key.
   * Does nothing if no default exists for the key.
   *
   * @param key Key identifying the kind + instanceType.
   */
  clearDefault(key: DefaultKey): void;
}

/**
 * Simple in-memory implementation of DefaultService.
 */
export class InMemoryDefaultService implements IDefaultService {
  private defaults = new Map<string, DefaultConfig>();
  private versions = new Map<string, number>();

  private makeKey(key: DefaultKey): string {
    return `${key.kind}:${key.instanceType}`;
  }

  /**
   * Sets or updates a default configuration.
   * Validates required attributes and references.
   */
  setDefault(config: DefaultConfig):void {
    const keyStr = this.makeKey(config.key);

    // Validate rootType
    const root = config.rootType;
    if (!root.id || !root.kind || !root.instanceType) {
      throw new Error('rootType must have id, kind, and instanceType defined.');
    }

    // Build a lookup of all valid ids (root + referencedTypes)
    const validIds = new Set<string>();
    validIds.add(root.id);
    (config.referencedTypes || []).forEach(t => validIds.add(t.id));

    // Validate all typeRefs
    (root.children || []).forEach(child => {
      if (child.typeRef && !validIds.has(child.typeRef)) {
        throw new Error(`Child "${child.name}" references unknown typeRef "${child.typeRef}".`);
      }
    });

    // Validate referencedTypes children typeRefs
    (config.referencedTypes || []).forEach(t => {
      (t.children || []).forEach(child => {
        if (child.typeRef && !validIds.has(child.typeRef)) {
          throw new Error(`ReferencedType "${t.id}" child "${child.name}" references unknown typeRef "${child.typeRef}".`);
        }
      });
    });

    // Handle versioning
    const currentVersion = this.versions.get(keyStr) || 0;
    const newVersion = currentVersion + 1;
    this.versions.set(keyStr, newVersion);
    const configWithVersion = { ...config, version: `${newVersion}` };

    // Store the default
    this.defaults.set(keyStr, configWithVersion);
  }

  getDefault(key: DefaultKey): DefaultConfig | undefined {
    return this.defaults.get(this.makeKey(key));
  }

  getAllDefaults(): DefaultConfig[] {
    return Array.from(this.defaults.values());
  }

  clearDefault(key: DefaultKey): void {
    this.defaults.delete(this.makeKey(key));
  }
}

/**
 * DefaultService implementation that persists defaults to localStorage.
 * Uses an in-memory cache for fast access.
 */
export class LocalStorageDefaultService implements IDefaultService {
  private readonly storageKey = 'defaultConfigs';
  private cache: InMemoryDefaultService;

  constructor() {
    this.cache = new InMemoryDefaultService();
    this.loadFromStorage();
  }

  /**
   * Loads all persisted defaults from localStorage into cache.
   */
  private loadFromStorage(): void {
    const json = localStorage.getItem(this.storageKey);
    if (!json) return;

    try {
      const items: DefaultConfig[] = JSON.parse(json);
      items.forEach(item => this.cache.setDefault(item));
    } catch (err) {
      console.warn('Failed to parse default configs from localStorage', err);
    }
  }

  /**
   * Persists all defaults from cache into localStorage.
   */
  private saveToStorage(): void {
    const allDefaults = this.cache.getAllDefaults();
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(allDefaults));
    } catch (err) {
      console.error('Failed to save default configs to localStorage', err);
    }
  }

  setDefault(config: DefaultConfig): void {
    this.cache.setDefault(config);  // validate and store in cache
    this.saveToStorage();           // persist updated cache
  }

  getDefault(key: DefaultKey): DefaultConfig | undefined {
    return this.cache.getDefault(key);
  }

  getAllDefaults(): DefaultConfig[] {
    return this.cache.getAllDefaults();
  }

  clearDefault(key: DefaultKey): void {
    this.cache.clearDefault(key);
    this.saveToStorage();
  }
}
