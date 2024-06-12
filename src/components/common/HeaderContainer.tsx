import {Button, Text, TouchableOpacity, View} from 'react-native';
import {headerStyles} from 'styles/components/header.ts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

interface HeaderContainerProps {
  onPressNavigationButton: () => void;
}

function HeaderContainer({onPressNavigationButton}: HeaderContainerProps) {
  const navigation = useNavigation();

  return (
    <View style={headerStyles.headerContainer}>
      <View>
        {navigation.canGoBack() && (
          <TouchableOpacity>
            <Icon name="chevron-left" size={12} color="#000000" />
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
