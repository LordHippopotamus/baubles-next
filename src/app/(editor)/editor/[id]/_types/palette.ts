export type Palette = (string | null)[];

export const isPalette = (palette: any): palette is Palette => {
  if (!Array.isArray(palette)) {
    return false;
  }

  for (let el of palette) {
    if (!(el === null || typeof el === "string")) {
      return false;
    }
  }

  return true;
};
