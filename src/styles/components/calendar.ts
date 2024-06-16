import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';

export const calendarStyles = StyleSheet.create({
  calendarContainer: {
    ...commonStyles.flex,
    ...commonStyles.justifyBetween,
    ...commonStyles.alignCenter,
    ...commonStyles.viewArea,
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
  },
  calendarHeaderContainer: {
    ...commonStyles.flex,
    ...commonStyles.alignCenter,
    flexDirection: 'row',
    height: 60,
    width: '100%',
  },
  calendarHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarContentsContainer: {
    backgroundColor: 'gold',
  },
});
