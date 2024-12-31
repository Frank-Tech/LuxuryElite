import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import he from './translations/he.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
