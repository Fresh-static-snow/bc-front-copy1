import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { CorporateMenuStore } from './corporateMenu.types';

export const useCorporateMenuStore = create<CorporateMenuStore, [['zustand/immer', never]]>(
  immer((set) => ({
    editingRequestType: undefined,
    setEditingRequestType: (type?: PrimarySelectableValue) => {
      set((state) => {
        state.editingRequestType = type;
      });
    },
  })),
);
