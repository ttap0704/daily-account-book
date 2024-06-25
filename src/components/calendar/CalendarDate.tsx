import {View} from 'react-native';
import {calendarStyles} from 'styles/components/calendar.ts';
import Typography from 'components/common/Typography.tsx';

interface CalendarDateProps {
  date: string;
  rowIndex: number;
  items: number[];
}

function CalendarDate({date, rowIndex, items}: CalendarDateProps) {
  return (
    <View style={calendarStyles.calendarRow}>
      {items.map((item, index) => {
        return (
          <View key={`calendar-${date}-${rowIndex}-${index}`} style={calendarStyles.calendarDateItem}>
            {!!item && <Typography style={calendarStyles.calendarDateText}>{item}</Typography>}
          </View>
        );
      })}
    </View>
  );
}

export default CalendarDate;
