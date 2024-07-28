import {ExpenditureCategory, IncomeCategory} from 'types/account.ts';

export type TranslationType = {
  intro: string;
  week: string;
  fullWeek: string;
  amountFormat: string;
};

export type ExpenditureCategoryTransition = {
  [key in ExpenditureCategory]: string;
};

export type IncomeCategoryTransition = {
  [key in IncomeCategory]: string;
};
