import {View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import Typography from 'components/common/Typography.tsx';
import {CalendarData} from 'types/calendar.ts';
import CalendarContents from 'components/calendar/CalendarContents.tsx';
import CalendarWeek from 'components/calendar/CalendarWeek.tsx';
// import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage.native';
import {ASYNC_STORAGE_CALENDAR_KEY} from 'core/keys.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState<CalendarData[]>([]);

  useEffect(() => {
    setCalendarData();
  }, []);

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
    setCurrentDate(dayjs(date + '-1'));
  }

  return (
    <View style={calendarStyles.calendarContainer}>
      <View style={calendarStyles.calendarHeaderContainer}>
        <Typography>{currentDate.format('YYYY년 MM월')}</Typography>
      </View>
      <CalendarWeek />
      <CalendarContents calendar={calendar} onChangeIndex={handleCalendarIndex} />
    </View>
  );
}

export default Calendar;
