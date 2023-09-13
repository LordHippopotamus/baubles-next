import { Palette, PaletteColor } from "@/types";
import { create } from "zustand";

interface PaletteState {
  palette: Palette;
  setPalette: (palette: Palette) => void;
  setColor: (id: PaletteColor["id"], color: PaletteColor["color"]) => void;
  deleteColor: (id: PaletteColor["id"]) => void;
  selectColor: (id: PaletteColor["id"]) => void;
}

export const usePaletteStore = create<PaletteState>((set) => ({
  palette: [],
  setPalette: (palette) => set({ palette }),
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
        el.id === id ? { ...el, color: "transparent" } : { ...el }
      ),
    })),
  selectColor: (id) =>
    set((state) => ({
      palette: state.palette.map((el) => ({ ...el, selected: el.id === id })),
    })),
}));
