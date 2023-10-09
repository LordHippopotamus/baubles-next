"use client";

import { useCallback } from "react";
import { useSizesStore } from "../_hooks/sizes";
import { useTheme } from "@mui/material";

const Preview = () => {
  const width = useSizesStore((state) => state.width);
  const height = useSizesStore((state) => state.height);

  const { palette } = useTheme();

  const generateArea = useCallback(() => {
    const area = [];

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        area.push({ x, y, color: "transparent" });
      }
    }

    return area;
  }, [width, height]);

  const area = generateArea();

  return (
    <svg width="100%" viewBox={`0 0 ${width * 100} ${height * 100}`}>
      {area.map((el) => (
        <path
          key={el.x + ";" + el.y}
          id={el.x + ";" + el.y}
          d={`M${el.x * 100} ${el.y * 100} H${el.x * 100 + 100} V${
            el.y * 100 + 100
          } H${el.x * 100} Z`}
          vectorEffect="non-scaling-stroke"
          fill={el.color}
          stroke={palette.action.active}
          strokeWidth={1}
        />
      ))}
    </svg>
  );
};

export default Preview;
