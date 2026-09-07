import { describe, expect, it } from 'vitest';
import { deriveResourceName, slugify } from './naming';

describe('slugify', () => {
  it('lowercases and replaces non-alphanumeric runs with a hyphen', () => {
    expect(slugify('My Great Rule!')).toBe('my-great-rule');
  });

  it('collapses repeated separators and trims edges', () => {
    expect(slugify('  --Foo   Bar--  ')).toBe('foo-bar');
  });

  it('strips combining marks from Latin diacritics', () => {
    expect(slugify('Umspannwerk Ö')).toBe('umspannwerk-o');
  });

  it('returns an empty string when nothing usable remains', () => {
    expect(slugify('***')).toBe('');
  });
});

describe('deriveResourceName', () => {
  it('slugifies a title', () => {
    expect(deriveResourceName('My Great Rule!', [])).toBe('my-great-rule');
  });

  it('collapses repeated separators and trims edges', () => {
    expect(deriveResourceName('  --Foo   Bar--  ', [])).toBe('foo-bar');
  });

  it('falls back to "unnamed" for a title with no usable characters', () => {
    expect(deriveResourceName('***', [])).toBe('unnamed');
  });

  it('appends a numeric suffix on collision', () => {
    expect(deriveResourceName('Foo', ['foo'])).toBe('foo-2');
  });

  it('keeps incrementing the suffix until it finds a free name', () => {
    expect(deriveResourceName('Foo', ['foo', 'foo-2', 'foo-3'])).toBe('foo-4');
  });
});
