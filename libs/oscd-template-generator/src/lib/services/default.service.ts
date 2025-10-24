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
   * @returns The stored DefaultConfig, with updated version.
   */
  setDefault(config: DefaultConfig): Promise<DefaultConfig>;

  /**
   * Returns the default configuration for the given key.
   * Includes the rootType and all referencedTypes.
   *
   * @param key Key identifying the kind + instanceType.
   * @returns undefined if no default is set.
   */
  getDefault(key: DefaultKey): Promise<DefaultConfig | undefined>;

  /**
   * Gets all default configurations.
   * @returns all default configurations currently stored.
   */
  getAllDefaults(): Promise<DefaultConfig[]>;

  /**
   * Removes the default configuration for the given key.
   * Does nothing if no default exists for the key.
   *
   * @param key Key identifying the kind + instanceType.
   * @return true, if a default existed and has been removed,
   * or false if the default does not exist .
   */
  clearDefault(key: DefaultKey): Promise<boolean>;
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
  setDefault(config: DefaultConfig): Promise<DefaultConfig> {
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

    return Promise.resolve(configWithVersion);
  }

  getDefault(key: DefaultKey): Promise<DefaultConfig | undefined> {
    return Promise.resolve(this.defaults.get(this.makeKey(key)));
  }

  getAllDefaults(): Promise<DefaultConfig[]> {
    return Promise.resolve(Array.from(this.defaults.values()));
  }

  clearDefault(key: DefaultKey): Promise<boolean> {
    return Promise.resolve(this.defaults.delete(this.makeKey(key)));
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
  private async loadFromStorage(): Promise<void> {
    const json = localStorage.getItem(this.storageKey);
    if (!json) return;

    try {
      const items: DefaultConfig[] = JSON.parse(json);
      await Promise.all(items.map(item => this.cache.setDefault(item)));
    } catch (err) {
      console.warn('Failed to parse default configs from localStorage', err);
    }
  }

  /**
   * Persists all defaults from cache into localStorage.
   */
  private async saveToStorage(): Promise<void> {
    const allDefaults = await this.cache.getAllDefaults();
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(allDefaults));
    } catch (err) {
      console.error('Failed to save default configs to localStorage', err);
    }
  }

  setDefault(config: DefaultConfig): Promise<DefaultConfig> {
    const promise = this.cache.setDefault(config);  // validate and store in cache
    this.saveToStorage();           // persist updated cache
    return promise;
  }

  getDefault(key: DefaultKey): Promise<DefaultConfig | undefined> {
    return this.cache.getDefault(key);
  }

  getAllDefaults(): Promise<DefaultConfig[]> {
    return this.cache.getAllDefaults();
  }

  clearDefault(key: DefaultKey): Promise<boolean> {
    const promise = this.cache.clearDefault(key);
    this.saveToStorage();
    return promise;
  }
}
