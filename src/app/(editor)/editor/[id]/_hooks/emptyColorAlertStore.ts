import { create } from "zustand";

type EmptyColorAlertState = {
    open: boolean;
    setOpen: (open: boolean) => void
}

export const useEmptyColorAlertStore = create<EmptyColorAlertState>(set => ({
    open: false,
    setOpen: (open) => set({open})
}))