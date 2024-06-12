import {SafeAreaView, Text, View} from 'react-native';
import LayoutDefault from 'components/layouts/LayoutDefault.tsx';
import {RootStackScreenProps} from 'types/navigation.ts';

function Settings({navigation}: RootStackScreenProps<'SETTINGS'>) {
  return (
    <LayoutDefault navigation={navigation}>
      <Text>4353451</Text>
    </LayoutDefault>
  );
}

export default Settings;
