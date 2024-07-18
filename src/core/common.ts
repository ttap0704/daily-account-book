import {AccountType, Language, TabItem} from 'types/common.ts';

export const ACCOUNT_TAB_OPTIONS: TabItem[] = [
  {name: '지출', id: AccountType.EXPENDITURE, backgroundColor: 'RED'},
  {name: '수입', id: AccountType.INCOME, backgroundColor: 'PRIMARY'},
];

export const Locale = {
  [Language.KO]: 'ko-KR',
  [Language.EN]: 'es-US',
};
