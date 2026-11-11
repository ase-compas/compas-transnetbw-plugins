export type XPathValidation = {
  id?: string;
  title: string;
  description: string;
  context: string;
  assert: string;
  message?: string;
};

export function toStoredValidation(
  validation: XPathValidation,
): XPathValidation {
  return {
    ...(validation.id === undefined ? {} : { id: validation.id }),
    title: validation.title,
    description: validation.description,
    context: validation.context,
    assert: validation.assert,
    message: validation.message,
  };
}
