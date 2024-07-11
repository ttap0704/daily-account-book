import {Text} from 'react-native';
import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';
import FloatingButton from 'components/buttons/FloatingButton.tsx';

function Registration({navigation}: RootStackScreenProps<'REGISTRATION'>) {
  return (
    <LayoutDefault navigation={navigation}>
      <Text>Registration</Text>
    </LayoutDefault>
  );
}

export default Registration;
