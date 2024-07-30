import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { PrimarySelectableValue } from '@/shared/types/values.types';

import { SegmentMenuStore } from './segmentMenu.types';

export const useSegmentMenuStore = create<SegmentMenuStore, [['zustand/immer', never]]>(
  immer((set) => ({
    editingRequestType: undefined,
    setEditingRequestType: (type?: PrimarySelectableValue) => {
      set((state) => {
        state.editingRequestType = type;
      });
    },
  })),
);
