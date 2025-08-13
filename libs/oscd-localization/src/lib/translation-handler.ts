import { addMessages, getLocaleFromNavigator, init, locale } from 'svelte-i18n';

type Translations = Record<string, any>;

export function setupTranslation(
  messages: Record<string, Translations>,
  options?: {
    fallbackLocale?: string;
    initialLocale?: string;
  }
) {
  Object.entries(messages).forEach(([lang, translation]) => {
    addMessages(lang, translation);
  });

  const languageFromLocalStorage = localStorage.getItem('language');
  const fallback = options?.fallbackLocale ?? 'en';
  const initial = options?.initialLocale ?? languageFromLocalStorage ?? getLocaleFromNavigator();

  console.log("Initial: Setting the language to", initial);

  init({
    fallbackLocale: fallback,
    initialLocale: initial,
  });

  window.addEventListener('oscd-language-changed', (e: Event) => {
    const customEvent = e as CustomEvent<{ language: string }>;
    if (!customEvent.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", customEvent.detail.language);
    locale.set(customEvent.detail.language);
  });
}
