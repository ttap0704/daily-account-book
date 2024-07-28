import {ExpenditureCategoryTransition, IncomeCategoryTransition, TranslationType} from './types.ts';
import {ExpenditureCategory, IncomeCategory} from 'types/account.ts';

const EN_RESOURCE: TranslationType & ExpenditureCategoryTransition & IncomeCategoryTransition = {
  intro: 'Hello',
  week: 'SU,MO,WE,TU,TH,PR,SA',
  fullWeek: 'SU,MO,WE,TU,TH,PR,SA',
  amountFormat: '$',
  [ExpenditureCategory.FOOD]: 'food',
  [ExpenditureCategory.TRANSPORTATION]: 'communication',
  [ExpenditureCategory.CAR]: 'car',
  [ExpenditureCategory.UTILITY]: 'utility',
  [ExpenditureCategory.CULTURAL]: 'cultural',
  [ExpenditureCategory.BEAUTY]: 'beauty',
  [ExpenditureCategory.DAILY]: 'daily',
  [ExpenditureCategory.COMMUNICATION]: 'communication',
  [ExpenditureCategory.EXERCISE]: 'exercise',
  [ExpenditureCategory.DRINK]: 'drink',
  [ExpenditureCategory.SUBSCRIPTION]: 'subscriptions',
  [ExpenditureCategory.TRAVEL]: 'travel',
  [ExpenditureCategory.PARENTING]: 'parenting',
  [IncomeCategory.SALARY]: 'salary',
  [IncomeCategory.EXTRA]: 'extra income',
  [IncomeCategory.ALLOWANCE]: 'allowance',
  [IncomeCategory.PERFORMANCE]: 'performance bonus',
  [IncomeCategory.INVESTMENT]: 'investment',
  [IncomeCategory.DIVIDEND]: 'dividend',
};

export default EN_RESOURCE;
