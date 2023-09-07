import { create } from "zustand";

interface PaletteState {
  palette: { id: number; color: string | null; selected: boolean }[];
  setColor: (id: number, color: string | null) => void;
  deleteColor: (id: number) => void;
  selectColor: (id: number) => void;
}

export const usePaletteStore = create<PaletteState>((set, get) => ({
  palette: [
    { id: 0, color: null, selected: false },
    { id: 1, color: null, selected: false },
    { id: 2, color: null, selected: false },
    { id: 3, color: null, selected: false },
    { id: 4, color: null, selected: false },
    { id: 5, color: null, selected: false },
    { id: 6, color: null, selected: false },
    { id: 7, color: null, selected: false },
  ],
  setColor: (id, color) =>
    set((state) => ({
      palette: state.palette.map((el) =>
        el.id === id
          ? { id, color, selected: true }
          : { ...el, selected: false }
      ),
    })),
  deleteColor: (id) =>
    set((state) => ({
      palette: state.palette.map((el) =>
        el.id === id ? { ...el, color: null } : { ...el }
      ),
    })),
  selectColor: (id) =>
    set((state) => ({
      palette: state.palette.map((el) => ({ ...el, selected: el.id === id })),
    })),
}));
