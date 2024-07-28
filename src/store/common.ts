import {create} from 'zustand';
import {Language} from 'types/common.ts';

interface CommonStoreState {
  lng: Language;
}

interface CommonStoreActions {
  setLanguage: (lng: Language) => void;
}

const initialData: CommonStoreState = {
  lng: Language.EN,
};

const useCommonStore = create<CommonStoreState & CommonStoreActions>(set => ({
  ...initialData,
  setLanguage: (lng: Language) => set(state => ({...state, lng})),
}));

export default useCommonStore;
