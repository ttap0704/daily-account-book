import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import KO_RESOURCE from '../translations/ko.ts';
import EN_RESOURCE from '../translations/en.ts';
import {Language} from 'types/common.ts';

const resources = {
  [Language.KO]: {
    translation: KO_RESOURCE,
  },
  [Language.EN]: {
    translation: EN_RESOURCE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Language.KO,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
