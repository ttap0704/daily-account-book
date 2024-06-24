import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {calendarStyles} from 'styles/components/calendar.ts';
import Typography from 'components/common/Typography.tsx';

function CalendarWeek() {
  const {i18n} = useTranslation();
  const weeks = i18n.t('week').split(',');

  return (
    <View style={calendarStyles.calendarRow}>
      {weeks.map(week => {
        return (
          <View style={calendarStyles.calendarWeekItem}>
            <Typography key={`week-${week}`} style={calendarStyles.calendarWeekText}>
              {week}
            </Typography>
          </View>
        );
      })}
    </View>
  );
}

export default CalendarWeek;
