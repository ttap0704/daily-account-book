import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';
import RegistrationForm from 'components/registration/RegistrationForm.tsx';

function Registration({navigation}: RootStackScreenProps<'REGISTRATION'>) {
  return (
    <LayoutDefault navigation={navigation}>
      <RegistrationForm />
    </LayoutDefault>
  );
}

export default Registration;
