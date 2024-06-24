import {calendarStyles} from 'styles/components/calendar.ts';
import {Text, View} from 'react-native';
import React from 'react';
import {CalendarData} from 'types/calendar.ts';

interface CalendarViewProps {
  data: CalendarData;
}

function CalendarView({data}: CalendarViewProps) {
  return (
    <View style={calendarStyles.calendarContents}>
      <Text>{data.date}</Text>
    </View>
  );
}

export default React.memo(CalendarView, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});
