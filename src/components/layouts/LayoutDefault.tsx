import FullScreenView from 'components/common/FullScreenView.tsx';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {layoutStyles} from 'styles/components/layout.ts';
import HeaderContainer from 'components/common/HeaderContainer.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'types/navigation.ts';

interface LayoutDefaultProps {
  children: ReactNode;
  navigation: NativeStackNavigationProp<RootStackParamList, any, any>;
}

function LayoutDefault({children, navigation}: LayoutDefaultProps) {
  return (
    <FullScreenView>
      <HeaderContainer onPressNavigationButton={() => navigation.push('HOME')}></HeaderContainer>
      <View style={[layoutStyles.layoutContainer]}>{children}</View>
    </FullScreenView>
  );
}

export default LayoutDefault;
