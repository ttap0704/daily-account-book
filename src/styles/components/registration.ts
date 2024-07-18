import {StyleSheet} from 'react-native';
import {commonStyles} from 'styles/common.ts';
import {COLORS} from 'styles/_colors.ts';

export const registrationStyles = StyleSheet.create({
  registrationForm: {
    ...commonStyles.flex,
    ...commonStyles.flexCenter,
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
  },
  registrationFormHeader: {
    ...commonStyles.flex,
    ...commonStyles.flexCenter,
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    gap: 12,
  },
  registrationFormHeaderDateButton: {
    ...commonStyles.flexCenter,
    flexDirection: 'row',
  },
  registrationFormHeaderDate: {
    fontSize: 18,
    color: COLORS.BLACK400,
  },
  registrationFormAmountContainer: {
    ...commonStyles.flexCenter,
    flexDirection: 'row',
    paddingVertical: 12,
  },
  registrationFormAmountInput: {
    display: 'flex',
  },
  registrationFormAmountText: {
    fontSize: 32,
  },
});
