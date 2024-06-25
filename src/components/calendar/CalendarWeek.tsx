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
          <View key={`week-${week}`} style={calendarStyles.calendarDateItem}>
            <Typography style={calendarStyles.calendarDateText}>{week}</Typography>
          </View>
        );
      })}
    </View>
  );
}

export default CalendarWeek;
