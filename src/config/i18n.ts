import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ES from '../locales/es/es.json';
import EN from '../locales/en/en.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: ES },
    en: { translation: EN },
  },
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
