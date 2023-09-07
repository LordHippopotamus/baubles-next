import { create } from "zustand";

type ContextMenuState = {
  contextMenu: { mouseX: number; mouseY: number; colorId: number } | null;
  openContextMenu: (mouseX: number, mouseY: number, colorId: number) => void;
  closeContextMenu: () => void;
};

export const useContextMenu = create<ContextMenuState>((set) => ({
  contextMenu: null,
  openContextMenu: (mouseX, mouseY, colorId) =>
    set({ contextMenu: { mouseX, mouseY, colorId } }),
  closeContextMenu: () => set({ contextMenu: null }),
}));
