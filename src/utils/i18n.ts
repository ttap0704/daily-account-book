import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import KO_RESOURCE from '../translations/ko.ts';
import EN_RESOURCE from '../translations/en.ts';

const resources = {
  ko: {
    translation: KO_RESOURCE,
  },
  en: {
    translation: EN_RESOURCE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
