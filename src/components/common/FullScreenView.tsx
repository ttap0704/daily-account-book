import {memo, ReactNode} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';

interface FullScreenViewProps {
  children: ReactNode;
}

function FullScreenView({children}: FullScreenViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      {children}
    </View>
  );
}

export default memo(FullScreenView);
