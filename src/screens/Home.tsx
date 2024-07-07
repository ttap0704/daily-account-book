import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';
import Calendar from 'components/calendar/Calendar.tsx';

function Home({navigation}: RootStackScreenProps<'HOME'>) {
  return (
    <LayoutDefault navigation={navigation}>
      <Calendar />
    </LayoutDefault>
  );
}

export default Home;
