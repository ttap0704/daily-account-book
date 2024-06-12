import {SafeAreaView, Text, View} from 'react-native';
import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';

function Home({navigation}: RootStackScreenProps<'HOME'>) {
  return (
    <LayoutDefault navigation={navigation}>
      <Text>4353451</Text>
    </LayoutDefault>
  );
}

export default Home;
