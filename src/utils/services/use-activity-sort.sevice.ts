import { TTodoSort } from "@/pages/detail-activity/button-sort";
import { create } from "zustand";

export type TActivtySort = {
  [idActivity: string]: TTodoSort;
};

interface IActivitySortState {
  data: TActivtySort;

  changeActivitySort: (sort: { id: string; sort: TTodoSort }) => void;

  getDataActivitySort: (idActivity: string) => TTodoSort | undefined;

  addNewActivitySort: (idActivity: string) => void;
}

const initialState: TActivtySort = {};

export const useActivitySort = create<IActivitySortState>()((set, get) => ({
  data: initialState,
  changeActivitySort: (newActivity) => {
    set({
      data: { ...get().data, [newActivity.id]: newActivity.sort },
    });
  },

  getDataActivitySort: (idActivity) => {
    return get().data[idActivity];
  },

  addNewActivitySort: (idActivity) => {
    set({
      data: { ...get().data, [idActivity]: "Terbaru" },
    });
  },
}));
