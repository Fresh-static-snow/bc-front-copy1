import { TooltipProps } from '@mui/material';

export type HintProps = {
  HintContent: React.ReactNode;
  children: React.ReactElement;
  disabled?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  enterDelay?: number;
  leaveDelay?: number;
};
