import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es.json';
import en from './en.json';

const STORAGE_KEY = 'site_language';
const SUPPORTED_LANGUAGES = ['es', 'en'];

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'es';

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language?.toLowerCase() || '';
  return browserLanguage.startsWith('en') ? 'en' : 'es';
};

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.language || 'es';
}

export default i18n;
