import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';
import {COLORS} from 'styles/_colors.ts';

export const smallTabStyles = StyleSheet.create({
  smallTabContainer: {
    ...commonStyles.flexCenter,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.BLACK50,
    borderRadius: 12,
    overflow: 'hidden',
  },
  smallTabContents: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
  smallTabText: {
    fontSize: 20,
  },
});
