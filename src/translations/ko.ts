import {ExpenditureCategoryTransition, IncomeCategoryTransition, TranslationType} from './types.ts';
import {ExpenditureCategory, IncomeCategory} from 'types/account.ts';

const KO_RESOURCE: TranslationType & ExpenditureCategoryTransition & IncomeCategoryTransition = {
  intro: '안녕하세요',
  week: '일,월,화,수,목,금,토',
  fullWeek: '일요일,월요일,화요일,수요일,목요일,금요일,토요일',
  amountFormat: '원',
  [ExpenditureCategory.FOOD]: '식비',
  [ExpenditureCategory.TRANSPORTATION]: '교통비',
  [ExpenditureCategory.CAR]: '차량',
  [ExpenditureCategory.UTILITY]: '공과금',
  [ExpenditureCategory.CULTURAL]: '문화생활',
  [ExpenditureCategory.BEAUTY]: '미용',
  [ExpenditureCategory.DAILY]: '생필품',
  [ExpenditureCategory.COMMUNICATION]: '통신비',
  [ExpenditureCategory.EXERCISE]: '운동',
  [ExpenditureCategory.DRINK]: '술/음료',
  [ExpenditureCategory.SUBSCRIPTION]: '구독비',
  [ExpenditureCategory.TRAVEL]: '여행',
  [ExpenditureCategory.PARENTING]: '육아',
  [IncomeCategory.SALARY]: '월급',
  [IncomeCategory.EXTRA]: '부수입',
  [IncomeCategory.ALLOWANCE]: '용돈',
  [IncomeCategory.PERFORMANCE]: '보너스',
  [IncomeCategory.INVESTMENT]: '투자',
  [IncomeCategory.DIVIDEND]: '배당금',
};

export default KO_RESOURCE;
