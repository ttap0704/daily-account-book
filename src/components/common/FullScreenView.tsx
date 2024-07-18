import {memo, ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {COLORS} from 'styles/_colors.ts';

interface FullScreenViewProps {
  children: ReactNode;
}

function FullScreenView({children}: FullScreenViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: COLORS.WHITE,
        }}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default memo(FullScreenView);
