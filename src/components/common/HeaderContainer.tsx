import {Button, Text, TouchableOpacity, View} from 'react-native';
import {headerStyles} from 'styles/components/header.ts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from 'styles/_colors.ts';

interface HeaderContainerProps {
  onPressNavigationButton: () => void;
  onPressBackButton: () => void;
}

function HeaderContainer({onPressNavigationButton, onPressBackButton}: HeaderContainerProps) {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.headerContainer}>
      <View>
        {navigation.canGoBack() && (
          <TouchableOpacity onPress={() => onPressBackButton()}>
            <Icon name="chevron-left" size={32} color={COLORS.BLACK400} />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TouchableOpacity>
          <Button title={'gogo'} onPress={() => onPressNavigationButton()} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderContainer;
