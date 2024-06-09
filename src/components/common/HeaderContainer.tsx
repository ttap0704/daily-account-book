import {View} from 'react-native';
import {commonStyles} from 'styles/common.ts';
import {headerStyles} from 'styles/components/header.ts';

function HeaderContainer() {
  return <View style={[commonStyles.flex, commonStyles.justifyBetween, headerStyles.headerContainer]}></View>;
}

export default HeaderContainer;
