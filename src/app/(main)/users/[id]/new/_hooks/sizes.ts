import { create } from "zustand";

type SizesState = {
  width: number;
  height: number;
  set: ({
    width,
    height,
  }: {
    width?: SizesState["width"];
    height?: SizesState["height"];
  }) => void;
};

export const useSizesStore = create<SizesState>((set) => ({
  width: 1,
  height: 1,
  set: (state) => set(state),
}));
