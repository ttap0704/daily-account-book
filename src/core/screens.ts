import Home from 'screens/Home.tsx';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

type ScreenOptions = {
  name: string;
  component: () => JSX.Element;
  options?: NativeStackNavigationOptions;
};
export const SCREENS: {[key: string]: ScreenOptions} = {
  HOME: {
    name: 'HOME',
    component: Home,
    options: {headerShown: false},
  },
};
