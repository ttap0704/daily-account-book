import 'intl-pluralrules';
import 'utils/i18n.ts';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';
import useCommonStore from 'store/common.ts';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from 'core/screens.ts';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const {lng, setLanguage} = useCommonStore();
  const {i18n} = useTranslation();

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen {...SCREENS.HOME}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
