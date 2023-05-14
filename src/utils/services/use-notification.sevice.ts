import { create } from "zustand";

export type TNotification = {
  message: string;
} | null;

interface INotificationState {
  data: TNotification;
  open: (notificationData: TNotification) => void;

  close: () => void;
}

const initialState: TNotification = null;

export const useNotification = create<INotificationState>()((set) => ({
  data: initialState,
  close: () => {
    set({ data: null });
  },
  open: (notificationData) => {
    set({ data: notificationData });
  },
}));
