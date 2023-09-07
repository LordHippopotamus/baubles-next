import { create } from "zustand";

type Tool = "pan" | "brush" | "eraser";

interface ToolState {
  tool: Tool;
  setTool: (tool: Tool) => void;
}

export const useToolStore = create<ToolState>((set) => ({
  tool: "pan",
  setTool: (tool) => set(() => ({ tool })),
}));
