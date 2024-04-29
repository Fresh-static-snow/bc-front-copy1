import { HEX } from './styles.types';

export type AppTheme = {
  appColors?: {
    primary_01: HEX;
    primary_02: HEX;
    primary_03: HEX;
    primary_04: HEX;
    primary_05: HEX;
    primary_06: HEX;

    secondary_01: HEX;
    secondary_02: HEX;
    secondary_03: HEX;
    secondary_04: HEX;
    secondary_05: HEX;
    secondary_06: HEX;
    secondary_07: HEX;
    secondary_08: HEX;
    secondary_09: HEX;
    secondary_10: HEX;
    secondary_11: HEX;
    secondary_12: HEX;
    secondary_13: HEX;
    secondary_14: HEX;
    secondary_15: HEX;
    secondary_16: HEX;

    palette_01: HEX;
    palette_02: HEX;
    palette_03: HEX;
    palette_04: HEX;
    palette_05: HEX;
  };
  appFonts?: {
    primary: string;
  };
  appTransitions?: {
    primary: number;
  };
  appShadows?: {
    primary: string;
    secondary: string;
  };
};
