export type Rect = {
  x: number;
  y: number;
  color: string;
};

export type Area = Rect[];

export const isRect = (rect: any): rect is Rect => {
  if (!("x" in rect || "y" in rect || "color" in rect)) {
    return false;
  }

  if (
    typeof rect.x !== "number" ||
    typeof rect.y !== "number" ||
    typeof rect.color !== "string"
  ) {
    return false;
  }

  return true;
};

export const isArea = (area: any): area is Area => {
  if (!Array.isArray(area)) {
    return false;
  }

  for (let rect of area) {
    if (!isRect(rect)) {
      return false;
    }
  }

  return true;
};
