import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { DatesMobileMenuStore } from './datesMobileMenu.types';

export const useDatesMobileMenuStore = create<DatesMobileMenuStore, [['zustand/immer', never]]>(
  immer((set) => ({
    creationRequestType: undefined,
    editingRequestType: undefined,

    setCreationRequestType: (type?: PrimarySelectableValue) => {
      set((state) => {
        state.creationRequestType = type;
      });
    },
    setEditingRequestType: (type?: PrimarySelectableValue) => {
      set((state) => {
        state.editingRequestType = type;
      });
    },
  })),
);
