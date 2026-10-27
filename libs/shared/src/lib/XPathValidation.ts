export type XPathValidation = {
  title: string;
  description: string;
  context: string;
  assert: string;
  message?: string;
};

export function toStoredValidation(validation: XPathValidation): XPathValidation {
  return {
    title: validation.title,
    description: validation.description,
    context: validation.context,
    assert: validation.assert,
    message: validation.message,
  };
}
