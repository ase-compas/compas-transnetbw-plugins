export interface ValidationError {
  ruleName: string;
  message: string;
  xpath: string;
  severity: string;
  lineNumber: number | null;
}

export interface ValidationResult {
  validationType: string;
  valid: boolean;
  errors: ValidationError[];
}

export type SclFileExtension = 'SCD' | 'SSD' | 'CID' | 'IID' | 'ICD' | 'SED';
