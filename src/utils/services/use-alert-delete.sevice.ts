import { create } from "zustand";

export type TAlertDeleteData = {
  dataName: string;
  message: string;
  deleteUrl: string;
  actionAfterDelete?: () => void;
} | null;

interface IAlertDeleteState {
  data: TAlertDeleteData;
  open: (alertData: TAlertDeleteData) => void;
  close: () => void;
}

const initialState: TAlertDeleteData = null;

export const useAlertDelete = create<IAlertDeleteState>()((set) => ({
  data: initialState,
  close: () => {
    set({ data: null });
  },
  open: (alertData) => {
    set({ data: alertData });
  },
}));
