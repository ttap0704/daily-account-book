import {COLORS} from 'styles/_colors.ts';

export type TabItem = {
  name: string;
  id: string;
  backgroundColor: keyof typeof COLORS;
};
