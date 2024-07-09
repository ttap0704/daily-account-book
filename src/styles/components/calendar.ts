import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';

export const calendarStyles = StyleSheet.create({
  calendarContainer: {
    ...commonStyles.flex,
    ...commonStyles.alignStart,
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
  calendarSubTitleContainer: {
    ...commonStyles.flex,
    ...commonStyles.justifyBetween,
    ...commonStyles.alignCenter,
    flexDirection: 'row',
    height: 50,
    width: '100%',
    paddingHorizontal: 16,
  },
  calendarSubTitleContainerRow: {
    ...commonStyles.flex,
    flexDirection: 'row',
    height: 50,
    gap: 12,
  },
  calendarSubTitle: {
    fontSize: 16,
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
  calendarSelectedDateItem: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  calendarDateText: {
    fontSize: 18,
  },
});
