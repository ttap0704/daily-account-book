import {AccountMonthData} from 'types/calendar.ts';
import {View} from 'react-native';
import Typography from 'components/common/Typography.tsx';
import {calendarStyles} from 'styles/components/calendar.ts';
import {textStyles} from 'styles/common.ts';

interface CalendarSubtitleProps {
  data: AccountMonthData['total'];
}

function CalendarSubtitle({data}: CalendarSubtitleProps) {
  const gap = data.plus + data.minus;
  function getStatus() {
    if (gap > 0) {
      return '+';
    } else if (gap < 0) {
      return '-';
    }

    return '';
  }

  function getStyle() {
    if (gap > 0) {
      return textStyles.textColorPrimary;
    } else if (gap < 0) {
      return textStyles.textColorRed;
    }
  }

  return (
    <View style={calendarStyles.calendarSubTitleContainer}>
      <View style={calendarStyles.calendarSubTitleContainerRow}>
        <Typography style={[calendarStyles.calendarSubTitle, textStyles.textColorPrimary]}>
          수입 +{data.plus.toLocaleString()}
        </Typography>
        <Typography style={[calendarStyles.calendarSubTitle, textStyles.textColorRed]}>
          지출 -{data.minus.toLocaleString()}
        </Typography>
      </View>
      <View>
        <Typography style={[calendarStyles.calendarSubTitle, getStyle()]}>
          합계 {getStatus()}
          {(data.plus + data.minus).toLocaleString()}
        </Typography>
      </View>
    </View>
  );
}

export default CalendarSubtitle;
