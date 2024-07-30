import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { ManagementMenuStore } from './managementMenu.types';

export const useManagementMenuStore = create<ManagementMenuStore, [['zustand/immer', never]]>(
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
