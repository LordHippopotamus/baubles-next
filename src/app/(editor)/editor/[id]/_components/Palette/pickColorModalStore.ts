import { create } from "zustand";

type PickColorModalState = {
  pickColorModal: number | null;
  openPickColorModal: (id: number) => void;
  closePickColorModal: () => void;
};

export const usePickColorModal = create<PickColorModalState>((set) => ({
  pickColorModal: null,
  openPickColorModal: (id) => set({ pickColorModal: id }),
  closePickColorModal: () => set({ pickColorModal: null }),
}));
