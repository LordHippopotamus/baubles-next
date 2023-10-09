import { Area } from "@/types/area";

export const generateArea = (width: number, height: number): Area => {
  const area = [];

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      area.push({ x, y, color: "transparent" });
    }
  }

  return area;
};
