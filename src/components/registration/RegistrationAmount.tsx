import {Keyboard, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Typography from 'components/common/Typography.tsx';
import {Language} from 'types/common.ts';
import useCommonStore from 'store/common.ts';
import {useTranslation} from 'react-i18next';
import {registrationStyles} from 'styles/components/registration.ts';
import useRegistrationStore from 'store/registration.ts';
import {Locale} from 'core/common.ts';

const LEFT_PREFIX_LIST = [Language.EN];

function RegistrationAmount() {
  const {lng} = useCommonStore();
  const {amount, setAmount} = useRegistrationStore();
  const leftPrefix = LEFT_PREFIX_LIST.includes(lng);
  const {i18n} = useTranslation();

  function handleAmount(value: string) {
    const currentAmount = (+value.replace(/[^0-9]/g, '')).toLocaleString(Locale[lng]);
    setAmount(currentAmount);
  }

  return (
    <View style={registrationStyles.registrationFormAmountContainer}>
      {leftPrefix && (
        <Typography style={registrationStyles.registrationFormAmountText}>{i18n.t('amountFormat')}</Typography>
      )}
      <TextInput
        keyboardType="number-pad"
        style={registrationStyles.registrationFormAmountText}
        value={amount}
        onChangeText={handleAmount}
        onSubmitEditing={Keyboard.dismiss}
      />
      {!leftPrefix && (
        <Typography style={registrationStyles.registrationFormAmountText}>{i18n.t('amountFormat')}</Typography>
      )}
    </View>
  );
}

export default RegistrationAmount;
