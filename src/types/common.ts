import {COLORS} from 'styles/_colors.ts';

export type TabItem = {
  name: string;
  id: string;
  backgroundColor: keyof typeof COLORS;
};

export enum AccountType {
  EXPENDITURE = 'EXPENDITURE',
  INCOME = 'INCOME',
}

export enum Language {
  KO = 'ko',
  EN = 'en',
}
