import { AppTheme } from '@/shared/types/theme.types';

export const primaryTheme: AppTheme = {
  appColors: {
    primary_01: '#F4252D',
    primary_02: '#1D1F2A',
    primary_03: '#EDEBE9',
    primary_04: '#F3F2F1',
    primary_05: '#FFFFFF',
    primary_06: '#FAF9F8',

    secondary_01: '#B4232C',
    secondary_02: '#73212B',
    secondary_03: '#E0E0E0',
    secondary_04: '#1D1F2A80', // * 50% opacity of primary_02.
    secondary_05: '#F4252D33', // * 20% opacity of primary_01.
    secondary_06: '#F4252D1A', // * 10% opacity of primary_01.
    secondary_07: '#CDCDCE',
    secondary_08: '#A6A6A9',
    secondary_09: '#FF0000',
    secondary_10: '#00000099',
    secondary_11: '#FCFCFB',
    secondary_12: '#FAB815',
    secondary_13: '#1D1F2A4D', // * 30% opacity of primary_02.
    secondary_14: '#36B37E',
    secondary_15: '#36B37E40', // * 25% opacity of secondary_14.
    secondary_16: '#00000080',

    palette_01: '#00CC6A',
    palette_02: '#D13438',
    palette_03: '#FDE300',
    palette_04: '#00BCF2',
    palette_05: '#292A35',
  },
  appFonts: {
    primary: "'Inter', sans-serif",
  },
  appTransitions: {
    primary: 300,
  },
  appShadows: {
    primary: '0px 5px 20px rgba(0, 0, 0, 0.15)',
    secondary: '-1px 0px 8px rgba(0, 0, 0, 0.07)',
  },
};
