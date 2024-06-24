import Swiper from 'react-native-swiper';
import {calendarStyles} from 'styles/components/calendar.ts';
import {CalendarData} from 'types/calendar.ts';
import React from 'react';
import CalendarView from 'components/calendar/CalendarView.tsx';

interface CalendarContentsProps {
  calendar: CalendarData[];
  onChangeIndex: (index: number) => void;
}

function CalendarContents({calendar, onChangeIndex}: CalendarContentsProps) {
  return (
    <>
      {(!!calendar.length && (
        <Swiper
          style={calendarStyles.calendarContentsContainer}
          showsPagination={false}
          horizontal={false}
          onIndexChanged={onChangeIndex}>
          {calendar.map(data => {
            return <CalendarView data={data} key={`calendar-content-${data.date}`} />;
          })}
        </Swiper>
      )) ??
        null}
    </>
  );
}

export default React.memo(CalendarContents, (prevProps, nextProps) => {
  return prevProps.calendar == nextProps.calendar;
});
