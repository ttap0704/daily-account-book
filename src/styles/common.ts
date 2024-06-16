import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  // flex
  flex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center',
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
    paddingHorizontal: 20,
  },
});
