import {TouchableOpacity, View} from 'react-native';
import Typography from 'components/common/Typography.tsx';
import useRegistrationStore from 'store/registration.ts';
import {useTranslation} from 'react-i18next';
import {Categories} from 'core/common.ts';
import {registrationStyles} from 'styles/components/registration.ts';

function RegistrationCategories() {
  const {accountType, category, setCategory} = useRegistrationStore();
  const {i18n} = useTranslation();

  function handleCategory(category: string) {
    setCategory(category);
  }

  return (
    <View style={registrationStyles.registrationFormCategoryContainer}>
      {Categories[accountType].map(key => {
        const categoryStyle = category === key ? registrationStyles.registrationFormActiveCategory : undefined;

        return (
          <View
            key={`account-category-${key}`}
            style={[registrationStyles.registrationFormCategory, categoryStyle]}
            onTouchEnd={() => handleCategory(key)}>
            <Typography style={registrationStyles.registrationFormCategoryText}>{i18n.t(key)}</Typography>
          </View>
        );
      })}
    </View>
  );
}

export default RegistrationCategories;
