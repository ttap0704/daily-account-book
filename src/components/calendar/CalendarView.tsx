import {calendarStyles} from 'styles/components/calendar.ts';
import {Text, View} from 'react-native';
import React from 'react';
import {CalendarData} from 'types/calendar.ts';
import CalendarDate from 'components/calendar/CalendarDate.tsx';

interface CalendarViewProps {
  data: CalendarData;
}

function CalendarView({data}: CalendarViewProps) {
  return (
    <View style={calendarStyles.calendarContents}>
      {data.items.map((dates, index) => {
        return (
          <CalendarDate key={`calendar-row-${data.date}-${index}`} date={data.date} rowIndex={index} items={dates} />
        );
      })}
    </View>
  );
}

export default React.memo(CalendarView, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
