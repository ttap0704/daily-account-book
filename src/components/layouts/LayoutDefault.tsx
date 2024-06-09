import FullScreenView from 'components/common/FullScreenView.tsx';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {layoutStyles} from 'styles/components/layout.ts';
import HeaderContainer from 'components/common/HeaderContainer.tsx';

interface LayoutDefaultProps {
  children: ReactNode;
}

function LayoutDefault({children}: LayoutDefaultProps) {
  return (
    <FullScreenView>
      <HeaderContainer></HeaderContainer>
      <View style={[layoutStyles.layoutContainer]}>{children}</View>
    </FullScreenView>
  );
}

export default LayoutDefault;
