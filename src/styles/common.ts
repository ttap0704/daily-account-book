import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from 'styles/_colors.ts';
import NamedStyles = StyleSheet.NamedStyles;

export const textStyles = StyleSheet.create({
  textColorPrimary: {color: COLORS.PRIMARY},
  textColorSecondary: {color: COLORS.SECONDARY},
  textColorPurple: {color: COLORS.PURPLE},
  textColorRed: {color: COLORS.RED},
  textColorCommon: {color: COLORS.COMMON},
  textColorBlack600: {color: COLORS.BLACK600},
  textColorBlack400: {color: COLORS.BLACK400},
  textColorBlack200: {color: COLORS.BLACK200},
});

export const commonStyles = StyleSheet.create({
  // flex
  flex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // typography
  typography: {
    fontFamily: 'Ownglyph_meetme-Rg',
    fontSize: 24,
  },

  // custom
  viewArea: {
    width: '100%',
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    paddingHorizontal: 16,
  },
});
