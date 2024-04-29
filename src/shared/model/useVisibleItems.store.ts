import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export interface VisibleItemsStore {
  setVisible: (key: keyof Omit<VisibleItemsStore, 'setVisible'>, value?: string) => void;
  visibleDate?: string;
  visibleTournament?: string;
}

export const useVisibleItems = create<VisibleItemsStore, [['zustand/immer', never]]>(
  immer((set) => ({
    setVisible: (key, value) =>
      set((state) => {
        state[key] = value;
      }),
  })),
);
