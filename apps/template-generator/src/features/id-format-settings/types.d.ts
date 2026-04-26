export interface TypeIdFormatSetting {
    enabled: boolean;
    format: IdFormat | null;
    referenceFormatEnabled: boolean;
    referenceFormat: IdFormat | null;
}

export interface TypeIdFormatSettings {
    global: TypeIdFormatSetting;
    typeSpecific: {
        [key in TypeKind]: TypeIdFormatSetting
    }
}