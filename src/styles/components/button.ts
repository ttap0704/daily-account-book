import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';
import {COLORS} from 'styles/_colors.ts';

export const buttonsStyles = StyleSheet.create({
  floatingButtonBase: {
    ...commonStyles.flexCenter,
    width: 50,
    height: 50,
    position: 'absolute',
    color: COLORS.WHITE,
    borderRadius: 32.5,
  },
});
