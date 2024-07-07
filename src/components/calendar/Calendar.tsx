import {View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import Typography from 'components/common/Typography.tsx';
import {AccountData, AccountMonthData, CalendarData} from 'types/calendar.ts';
import CalendarContents from 'components/calendar/CalendarContents.tsx';
import CalendarWeek from 'components/calendar/CalendarWeek.tsx';
import {ASYNC_STORAGE_CALENDAR_KEY} from 'core/keys.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarTitle from 'components/calendar/CalendarTitle.tsx';
import CalendarSubtitle from 'components/calendar/CalendarSubtitle.tsx';

const INITIAL_ACCOUNT_MONTH_DATA: AccountMonthData = {
  changes: {},
  total: {plus: 0, minus: 0},
};

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState<CalendarData[]>([]);
  const [account, setAccount] = useState<AccountData>({});

  useEffect(() => {
    setCalendarData();
  }, []);

  useEffect(() => {
    if (!!calendar.length && currentDate) {
      setAccountData();
    }
  }, [calendar, currentDate]);

  async function init() {
    await setCalendarData();
  }

  async function setCalendarData() {
    const storageCalendarData = await AsyncStorage.getItem(ASYNC_STORAGE_CALENDAR_KEY);

    if (!!storageCalendarData) {
      let finalData: CalendarData[] = JSON.parse(storageCalendarData) as CalendarData[];

      const calendarNextData: CalendarData[] = [];
      for (let i = 240; i >= 0; i--) {
        const current = dayjs().month(currentDate.month() + i);
        const date = current.format('YYYY-MM');

        const checkDataIndex = finalData.findIndex(item => item.date === date);
        if (checkDataIndex >= 0) {
          finalData = [
            ...finalData.slice(0, checkDataIndex + 1),
            ...calendarNextData,
            ...finalData.slice(checkDataIndex + 1),
          ];
          break;
        } else {
          calendarNextData.unshift({date, items: getMonthData(current)});
        }
      }

      setCalendar(finalData);
      await AsyncStorage.setItem(ASYNC_STORAGE_CALENDAR_KEY, JSON.stringify(finalData));
    } else {
      const calendarPrevData: CalendarData[] = [];
      const calendarNextData: CalendarData[] = [];

      for (let i = -240; i <= 240; i++) {
        const current = dayjs().month(currentDate.month() + i);
        const date = current.format('YYYY-MM');
        const items = getMonthData(current);

        if (i >= 0) {
          calendarNextData.push({date, items});
        } else {
          calendarPrevData.push({date, items});
        }
      }

      const finalData = [...calendarNextData, ...calendarPrevData];
      setCalendar(finalData);
      await AsyncStorage.setItem(ASYNC_STORAGE_CALENDAR_KEY, JSON.stringify(finalData));
    }
  }

  async function setAccountData() {
    const dateKey = currentDate.format('YYYY-MM');

    const tmpAccount: AccountData = JSON.parse(JSON.stringify(account));
    if (!account[dateKey]) {
      tmpAccount[dateKey] = INITIAL_ACCOUNT_MONTH_DATA;
    }

    setAccount(tmpAccount);
  }

  function getMonthData(current: Dayjs) {
    const lastDate = current.endOf('month').date();

    let date = 1;
    let week = 0;
    const tmpData: number[][] = [];
    while (date <= lastDate) {
      const day = ((current.date(date - 1).day() as number) + 1) % 7;
      if (!tmpData[week]) tmpData[week] = Array.from({length: 7}, () => 0);
      tmpData[week][day] = date;
      date++;
      if (day === 6) week++;
    }

    return tmpData;
  }

  function handleCalendarIndex(index: number) {
    const {date} = calendar[index];
    const nextDate = dayjs(date + '-1');
    setCurrentDate(nextDate);
  }

  return (
    <View style={calendarStyles.calendarContainer}>
      <CalendarTitle date={currentDate.format('YYYY년 MM월')} />
      <CalendarSubtitle
        data={
          account[currentDate.format('YYYY-MM')]
            ? account[currentDate.format('YYYY-MM')].total
            : INITIAL_ACCOUNT_MONTH_DATA.total
        }
      />
      <CalendarWeek />
      <CalendarContents calendar={calendar} account={account} onChangeIndex={handleCalendarIndex} />
    </View>
  );
}

export default Calendar;
