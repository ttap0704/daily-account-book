import {Touchable, TouchableOpacity, View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import Typography from 'components/common/Typography.tsx';
import dayjs from 'dayjs';
import {memo} from 'react';

interface CalendarDateProps {
  date: string;
  rowIndex: number;
  items: number[];
  selectedDate: string;
  selectedDateHistory: string[];
  onPressDate: (date: string) => void;
}

function CalendarDate({date, rowIndex, items, selectedDate, selectedDateHistory, onPressDate}: CalendarDateProps) {
  return (
    <View style={calendarStyles.calendarRow} key={`calendar-${date}-${rowIndex}`}>
      {items.map((item, index) => {
        const currentDate = dayjs(date).set('date', item).format('YYYY-MM-DD');
        const dateStyle = currentDate === selectedDate ? calendarStyles.calendarSelectedDateItem : undefined;

        return (
          <View
            onTouchEnd={() => onPressDate(currentDate)}
            key={`calendar-${date}-${rowIndex}-${index}`}
            style={[calendarStyles.calendarDateItem, dateStyle]}>
            {!!item && <Typography style={calendarStyles.calendarDateText}>{item}</Typography>}
          </View>
        );
      })}
    </View>
  );
}

export default memo(CalendarDate, (prevProps, nextProps) => {
  let flag = true;

  for (let i = 0, n = nextProps.selectedDateHistory.length; i < n; i++) {
    const yearMonth = dayjs(nextProps.selectedDateHistory[i]).format('YYYY-MM');
    if (yearMonth === nextProps.date) {
      flag = false;
      break;
    }
  }

  return flag;
});
