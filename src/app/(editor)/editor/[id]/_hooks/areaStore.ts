import { Area } from "@editor/_types/area";
import { create } from "zustand";

interface AreaState {
  area: Area;
  setArea: (area: Area) => void;
  draw: (x: number, y: number, color: string) => void;
  getSizes: () => { x: number; y: number };
}

export const useAreaStore = create<AreaState>((set, get) => ({
  area: [],
  setArea: (area) => set({ area }),
  draw: (x, y, color) => {
    const rect = get().area.find((el) => el.x === x && el.y === y);
    if (rect?.color === color) return; // dont update if already have same color

    set((state) => ({
      area: state.area.map((el) => ({
        ...el,
        color: el.x === x && el.y === y ? color : el.color,
      })),
    }));
  },
  getSizes: () => {
    const area = get().area;
    let x = 0,
      y = 0;
    for (let rect of area) {
      if (rect.x > x) x = rect.x;
      if (rect.y > y) y = rect.y;
    }
    return { x: x + 1, y: y + 1 };
  },
}));
