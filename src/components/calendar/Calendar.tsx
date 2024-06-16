import {Text, TouchableOpacity, View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import Typography from 'components/common/Typography.tsx';
import Swiper from 'react-native-swiper';

interface CalendarData {
  [key: string]: number[][];
}

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState<CalendarData>({});

  useEffect(() => {
    setCalendarData();
  }, [currentDate]);

  function setCalendarData() {
    const tmpCalendarData: CalendarData = {...calendar};
    for (let i = -2; i <= 2; i++) {
      const current = dayjs().month(currentDate.month() + i);
      const curYear = current.year();
      const curMonth = current.month();

      if (!calendar[`${curYear}-${curMonth}`]) {
        const lastDate = current.endOf('month').date();

        let date = 1;
        let week = 0;
        const tmpData: number[][] = [];
        while (date <= lastDate) {
          const day = current.date(date - 1).day() as number;
          if (!tmpData[week]) tmpData[week] = [];
          tmpData[week][day] = date;
          date++;
          if (day === 6) week++;
        }
        tmpCalendarData[`${curYear}-${curMonth}`] = tmpData;
      }
    }

    setCalendar(tmpCalendarData);
  }

  return (
    <View style={calendarStyles.calendarContainer}>
      <View style={calendarStyles.calendarHeaderContainer}>
        <Typography>
          {currentDate.year()}년 {currentDate.month() + 1}월
        </Typography>
        <Swiper style={calendarStyles.calendarContentsContainer} horizontal={false}>
          <View>
            <Text>123</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
}

export default Calendar;
