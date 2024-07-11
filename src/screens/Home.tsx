import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';
import Calendar from 'components/calendar/Calendar.tsx';
import FloatingButton from 'components/buttons/FloatingButton.tsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Home({navigation}: RootStackScreenProps<'HOME'>) {
  function moveRegistration() {
    navigation.push('REGISTRATION');
  }

  return (
    <LayoutDefault navigation={navigation}>
      <Calendar />
      <FloatingButton backgroundColor="BLACK600" bottom={12} right={12} onPress={moveRegistration}>
        <Icon name="pencil" color="white" size={24} />
      </FloatingButton>
    </LayoutDefault>
  );
}

export default Home;
