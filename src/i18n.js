import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

import translationsEn from 'translations/translationsEn.js'
import translationsRu from 'translations/translationsRu.js'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      ru: { translation: translationsRu },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18next;
