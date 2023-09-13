export type PaletteColor = {
  id: number;
  color: string;
  selected: boolean;
};

export type Palette = PaletteColor[];

export const isPaletteColor = (
  paletteColor: any
): paletteColor is PaletteColor => {
  if (
    !(
      "id" in paletteColor ||
      "color" in paletteColor ||
      "selected" in paletteColor
    )
  ) {
    return false;
  }

  if (
    typeof paletteColor.id !== "number" ||
    typeof paletteColor.color !== "string" ||
    typeof paletteColor.selected !== "boolean"
  ) {
    return false;
  }

  return true;
};

export const isPalette = (palette: any): palette is Palette => {
  if (!Array.isArray(palette)) {
    return false;
  }

  for (let paletteColor of palette) {
    if (!isPaletteColor(paletteColor)) {
      return false;
    }
  }

  return true;
};
