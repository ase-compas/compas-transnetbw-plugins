export class ResourceTag {
  constructor(private readonly _key: string, private readonly _value: string) {}

  get key(): string {
    return this._key;
  }

  get value(): string {
    return this._value;
  }
}
