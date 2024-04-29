import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { TournamentMenuStore } from './tournamentMenu.types';

export const useTournamentMenuStore = create<TournamentMenuStore, [['zustand/immer', never]]>(
  immer((set) => ({
    editingRequestType: undefined,
    setEditingRequestType: (type?: PrimarySelectableValue) => {
      set((state) => {
        state.editingRequestType = type;
      });
    },
  })),
);
