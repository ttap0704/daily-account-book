import {View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import Typography from 'components/common/Typography.tsx';
import {CalendarData} from 'types/calendar.ts';
import CalendarContents from 'components/calendar/CalendarContents.tsx';
import CalendarWeek from 'components/calendar/CalendarWeek.tsx';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState<CalendarData[]>([]);

  useEffect(() => {
    setCalendarData();
  }, []);

  function setCalendarData() {
    const calendarPrevData: CalendarData[] = [];
    const calendarNextData: CalendarData[] = [];

    for (let i = -240; i <= 240; i++) {
      const current = dayjs().month(currentDate.month() + i);
      const curYear = current.year();
      const curMonth = current.month() + 1;

      if (!calendar.find(data => data.date === `${curYear}-${curMonth}`)) {
        const lastDate = current.endOf('month').date();

        let date = 1;
        let week = 0;
        const tmpData: number[][] = [];
        while (date <= lastDate) {
          const day = current.date(date - 1).day() as number;
          if (!tmpData[week]) tmpData[week] = Array.from({length: 7}, () => 0);
          tmpData[week][day] = date;
          date++;
          if (day === 6) week++;
        }

        if (i >= 0) {
          calendarNextData.push({date: `${curYear}-${curMonth}`, items: tmpData});
        } else {
          calendarPrevData.push({date: `${curYear}-${curMonth}`, items: tmpData});
        }
      }
    }

    setCalendar([...calendarNextData, ...calendarPrevData]);
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
