import {Text, TouchableOpacity, View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import Typography from 'components/common/Typography.tsx';
import Swiper from 'react-native-swiper';

interface CalendarData {
  date: string;
  items: number[][];
}

function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState<CalendarData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    setCalendarData();
  }, []);

  function setCalendarData() {
    const tmpCalendarData: CalendarData[] = [...calendar];
    for (let i = -50; i <= 50; i++) {
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
          if (!tmpData[week]) tmpData[week] = [];
          tmpData[week][day] = date;
          date++;
          if (day === 6) week++;
        }
        tmpCalendarData.push({date: `${curYear}-${curMonth}`, items: tmpData});
      }
    }

    setCalendar(tmpCalendarData);
  }

  function handleCalendarIndex(index: number) {
    if (currentIndex < index) {
      setCurrentDate(currentDate.add(+1, 'month'));
    } else {
      setCurrentDate(currentDate.add(-1, 'month'));
    }

    console.log({index});
  }

  return (
    <View style={calendarStyles.calendarContainer}>
      <View style={calendarStyles.calendarHeaderContainer}>
        <Typography>
          {currentDate.year()}년 {currentDate.month() + 1}월
        </Typography>
      </View>
      {!!calendar.length && (
        <Swiper
          style={calendarStyles.calendarContentsContainer}
          index={50}
          showsPagination={false}
          horizontal={false}
          onIndexChanged={handleCalendarIndex}
          loop={false}>
          {calendar.map(({date, items}) => {
            return (
              <View style={calendarStyles.calendarContents} key={`calendar-content-${date}`}>
                <Text>{date}</Text>
              </View>
            );
          })}
        </Swiper>
      )}
    </View>
  );
}

export default Calendar;
