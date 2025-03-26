import {addMessages, getLocaleFromNavigator, init, locale} from 'svelte-i18n';
import de from './translations/de.json';
import en from './translations/en.json';

export function setupTranslation() {
  addMessages('de', de);
  addMessages('en', en);

  console.log("Initial: Setting the language")
  init({
    fallbackLocale: 'en',
    initialLocale: 'de',
  });

  window.addEventListener('oscd-language-changed', (e: CustomEvent) => {
    if(!e.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language.")
    locale.set(e.detail.language)
  });
}
