import { create } from "zustand";

interface PaletteState {
  palette: (string | null)[];
  selectedColor: null | string;
  setPalette: (palette: string[]) => void;
  setColor: (index: number, color: string) => void;
  deleteColor: (index: number) => void;
  selectColor: (index: number) => void;
}

export const usePaletteStore = create<PaletteState>((set) => ({
  palette: [],
  selectedColor: null,
  setPalette: (palette) => set({ palette }),
  setColor: (receivedIndex, color) =>
    set((state) => ({
      palette: state.palette.map((el, index) =>
        receivedIndex === index ? color : el
      ),
      selectedColor: color
    })),
  deleteColor: (receivedIndex) =>
    set((state) => ({
      palette: state.palette.map((el, index) =>
        receivedIndex === index ? null : el
      ),
      selectedColor: state.selectedColor === state.palette[receivedIndex] ? null : state.selectedColor
    })),
  selectColor: (index) =>
    set((state) => ({
      selectedColor: state.palette[index]
    })),
}));
