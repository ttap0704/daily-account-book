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
    height: '100%',
  },
  calendarHeaderContainer: {
    ...commonStyles.flex,
    ...commonStyles.alignCenter,
    flexDirection: 'row',
    height: 60,
    width: '100%',
    paddingLeft: 16,
  },
  calendarHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarContentsContainer: {
    width: '100%',
  },
  calendarContents: {
    flex: 1,
  },
  calendarRow: {
    ...commonStyles.flex,
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'space-between',
  },
  calendarDateItem: {
    ...commonStyles.flexCenter,
    width: `${100 / 7}%`,
    flex: 1 / 7,
    height: 50,
    fontSize: 18,
  },
  calendarDateText: {
    fontSize: 18,
  },
});
