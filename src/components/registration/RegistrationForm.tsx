import {View} from 'react-native';
import RegistrationHeader from 'components/registration/RegistrationHeader.tsx';
import {registrationStyles} from 'styles/components/registration.ts';

function RegistrationForm() {
  return (
    <View style={registrationStyles.registrationForm}>
      <RegistrationHeader />
    </View>
  );
}

export default RegistrationForm;
