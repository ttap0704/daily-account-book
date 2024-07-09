import {calendarStyles} from 'styles/components/calendar.ts';
import {View} from 'react-native';
import {memo, useEffect, useState} from 'react';
import {CalendarData} from 'types/calendar.ts';
import CalendarDate from 'components/calendar/CalendarDate.tsx';
import useCalendarStore from 'store/calendar.ts';

interface CalendarViewProps {
  data: CalendarData;
}

function CalendarView({data}: CalendarViewProps) {
  const {selectedDate, selectedDateHistory, setSelectedDate, setSelectedDateHistory} = useCalendarStore();

  function handleSelectedDate(date: string) {
    setSelectedDate(date);
    setSelectedDateHistory(date);
  }

  return (
    <View style={calendarStyles.calendarContents}>
      {data.items.map((dates, index) => {
        return (
          <CalendarDate
            key={`calendar-row-${data.date}-${index}`}
            date={data.date}
            rowIndex={index}
            items={dates}
            selectedDate={selectedDate}
            selectedDateHistory={selectedDateHistory}
            onPressDate={handleSelectedDate}
          />
        );
      })}
    </View>
  );
}

export default memo(CalendarView, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
