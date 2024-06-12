import {NativeStackScreenProps} from '@react-navigation/native-stack';

type HomeStackParamList = {
  HOME: undefined;
};

type SettingsStackParamList = {
  SETTINGS: undefined;
};

type StackParamList = HomeStackParamList & SettingsStackParamList;

export type RootStackParamList = {
  [key in keyof StackParamList]: StackParamList[key] extends infer Param
    ? Param extends undefined
      ? undefined | StackParamList[key]
      : StackParamList[key]
    : never;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
