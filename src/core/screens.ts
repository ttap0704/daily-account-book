import Home from 'screens/Home.tsx';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Settings from 'screens/Settings.tsx';
import Registration from 'screens/Registration.tsx';

type ScreenOptions = {
  name: string;
  component: (props: any) => JSX.Element;
  options?: NativeStackNavigationOptions;
};

export const SCREENS: {[key: string]: ScreenOptions} = {
  HOME: {
    name: 'HOME',
    component: Home,
    options: {headerShown: false},
  },
  SETTINGS: {
    name: 'SETTINGS',
    component: Settings,
    options: {headerShown: false},
  },
  REGISTRATION: {
    name: 'REGISTRATION',
    component: Registration,
    options: {headerShown: false},
  },
};
