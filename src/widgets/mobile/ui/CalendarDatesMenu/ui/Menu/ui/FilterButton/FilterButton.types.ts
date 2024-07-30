import { SideWindowsState } from '../../../../types';

export type FilterButtonProps = {
  isOpen: boolean;
  setSideWindowsState: React.Dispatch<React.SetStateAction<SideWindowsState>>;
};
