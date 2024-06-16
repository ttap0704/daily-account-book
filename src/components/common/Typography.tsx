import {Text, TextProps} from 'react-native';
import {commonStyles} from 'styles/common.ts';

interface TypographyProps extends TextProps {}

function Typography(props: TypographyProps) {
  return (
    <Text {...props} style={[commonStyles.typography, props.style]}>
      {props.children}
    </Text>
  );
}

export default Typography;
