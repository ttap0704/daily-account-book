import {TouchableOpacity} from 'react-native';
import {buttonsStyles} from 'styles/components/button.ts';
import {COLORS} from 'styles/_colors.ts';
import React from 'react';

interface FloatingButtonProps {
  children: React.ReactNode;
  bottom: number;
  right: number;
  backgroundColor: keyof typeof COLORS;
  onPress: () => void;
}

function FloatingButton({children, bottom, right, backgroundColor, onPress}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...buttonsStyles.floatingButtonBase, bottom, right, backgroundColor: COLORS[backgroundColor]}}>
      {children}
    </TouchableOpacity>
  );
}

export default FloatingButton;
