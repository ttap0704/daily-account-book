import Swiper from 'react-native-swiper';
import {calendarStyles} from 'styles/components/calendar.ts';
import {AccountData, CalendarData} from 'types/calendar.ts';
import React from 'react';
import CalendarView from 'components/calendar/CalendarView.tsx';
import {View} from 'react-native';

interface CalendarContentsProps {
  calendar: CalendarData[];
  account: AccountData;
  onChangeIndex: (index: number) => void;
}

function CalendarContents({calendar, onChangeIndex}: CalendarContentsProps) {
  return (
    <>
      {!!calendar.length ? (
        <Swiper
          style={calendarStyles.calendarContentsContainer}
          showsPagination={false}
          horizontal={false}
          onIndexChanged={onChangeIndex}
          loadMinimal={true}
          loadMinimalSize={5}>
          {calendar.map(data => (
            <CalendarView data={data} key={`calendar-content-${data.date}`} />
          ))}
        </Swiper>
      ) : (
        <View style={calendarStyles.calendarContentsContainer}>
          <View style={calendarStyles.calendarContents} />
        </View>
      )}
    </>
  );
}

export default CalendarContents;
