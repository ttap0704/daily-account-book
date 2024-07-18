import {View} from 'react-native';
import RegistrationHeader from 'components/registration/RegistrationHeader.tsx';
import {registrationStyles} from 'styles/components/registration.ts';
import RegistrationAmount from 'components/registration/RegistrationAmount.tsx';

function RegistrationForm() {
  return (
    <View style={registrationStyles.registrationForm}>
      <RegistrationHeader />
      <RegistrationAmount />
    </View>
  );
}

export default RegistrationForm;
