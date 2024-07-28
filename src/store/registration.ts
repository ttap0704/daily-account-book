import {create} from 'zustand';
import {AccountType} from 'types/common.ts';

interface RegistrationStoreState {
  accountType: AccountType;
  amount: string;
  category: string;
}

interface RegistrationStoreActions {
  setAccountType: (accountType: AccountType) => void;
  setAmount: (amount: string) => void;
  setCategory: (category: string) => void;
}

const initialData: RegistrationStoreState = {
  accountType: AccountType.EXPENDITURE,
  amount: '0',
  category: '',
};

const useRegistrationStore = create<RegistrationStoreState & RegistrationStoreActions>(set => ({
  ...initialData,
  setAccountType: (accountType: AccountType) => set(state => ({...state, accountType})),
  setAmount: (amount: string) => set(state => ({...state, amount})),
  setCategory: (category: string) => set(state => ({...state, category})),
}));

export default useRegistrationStore;
