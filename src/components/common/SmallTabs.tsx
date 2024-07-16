import {TouchableOpacity, View} from 'react-native';
import Typography from 'components/common/Typography.tsx';
import {TabItem} from 'types/common.ts';
import {smallTabStyles} from 'styles/components/small-tab.ts';
import {useState} from 'react';
import {COLORS} from 'styles/_colors.ts';

interface SmallTabsProps {
  options: TabItem[];
}

function SmallTabs({options}: SmallTabsProps) {
  const [selected, setSelected] = useState(options[0].id);

  function handleSelected(id: string) {
    setSelected(id);
  }

  return (
    <View style={smallTabStyles.smallTabContainer}>
      {options.map(option => {
        const isSelected = selected === option.id;
        const backgroundColor = isSelected ? option.backgroundColor : 'WHITE';
        const color: keyof typeof COLORS = isSelected ? 'WHITE' : 'BLACK600';

        return (
          <TouchableOpacity
            key={`tab-${option.id}`}
            style={{...smallTabStyles.smallTabContents, backgroundColor: COLORS[backgroundColor]}}
            onPress={() => handleSelected(option.id)}
            activeOpacity={0.9}>
            <Typography style={{...smallTabStyles.smallTabText, color: COLORS[color]}}>{option.name}</Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default SmallTabs;
