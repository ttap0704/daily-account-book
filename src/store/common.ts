import {create} from 'zustand';

interface CommonStoreState {
  lng: string;
}

interface CommonStoreActions {
  setLanguage: (lng: string) => void;
}

const initialData: CommonStoreState = {
  lng: '',
};

const useCommonStore = create<CommonStoreState & CommonStoreActions>(set => ({
  ...initialData,

  setLanguage: (lng: string) => set(state => ({...state, lng})),
}));

export default useCommonStore;
