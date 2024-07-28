import {AccountType, Language, TabItem} from 'types/common.ts';
import {AccountCategory, ExpenditureCategory, IncomeCategory} from 'types/account.ts';
import uuid from 'react-native-uuid';

export const ACCOUNT_TAB_OPTIONS: TabItem[] = [
  {name: '지출', id: AccountType.EXPENDITURE, backgroundColor: 'RED'},
  {name: '수입', id: AccountType.INCOME, backgroundColor: 'PRIMARY'},
];

export const Locale = {
  [Language.KO]: 'ko-KR',
  [Language.EN]: 'es-US',
};

export const Categories: {[key in AccountType]: string[]} = {
  [AccountType.EXPENDITURE]: Object.keys(ExpenditureCategory),
  [AccountType.INCOME]: Object.keys(IncomeCategory),
};
