import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';

export const headerStyles = StyleSheet.create({
  headerContainer: {
    ...commonStyles.flex,
    ...commonStyles.justifyBetween,
    ...commonStyles.alignCenter,
    ...commonStyles.viewArea,
    flexDirection: 'row',
    height: 60,
  },
});
