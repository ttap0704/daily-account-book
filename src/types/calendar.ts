export interface CalendarData {
  date: string;
  items: number[][];
}
export interface AccountDateData {
  change: number;
  categoryName: string;
  categoryId: string;
  accountType: string;
  changeCount?: number;
}

export interface AccountMonthData {
  changes: {
    [key: string]: AccountDateData[];
  };
  total: {
    plus: number;
    minus: number;
  };
}

export interface AccountData {
  [key: string]: AccountMonthData;
}
