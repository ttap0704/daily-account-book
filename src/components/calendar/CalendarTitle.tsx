import {calendarStyles} from 'styles/components/calendar.ts';
import Typography from 'components/common/Typography.tsx';
import {View} from 'react-native';

interface CalendarTitleProps {
  date: string;
}

function CalendarTitle({date}: CalendarTitleProps) {
  return (
    <View style={calendarStyles.calendarHeaderContainer}>
      <Typography>{date}</Typography>
    </View>
  );
}

export default CalendarTitle;
