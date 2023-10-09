"use client";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useAreaStore } from "../_hooks/areaStore";
import { useTheme } from "@mui/material";
import { Area } from "@/types/area";
import { useEffect } from "react";
import { useToolStore } from "../_hooks/toolsStore";
import { usePaletteStore } from "../_hooks/paletteStore";
import { useEmptyColorAlertStore } from "../_hooks/emptyColorAlertStore";

const Area = ({ fetchedArea }: { fetchedArea: Area }) => {
  const area = useAreaStore((state) => state.area);
  const setArea = useAreaStore((state) => state.setArea);
  const draw = useAreaStore((state) => state.draw);
  const sizes = useAreaStore((state) => state.getSizes)();
  const setOpen = useEmptyColorAlertStore((state) => state.setOpen);

  const openEmptyColorAlert = () => setOpen(true);

  const tool = useToolStore((state) => state.tool);

  const selectedColor = usePaletteStore((state) => state.selectedColor);

  const { palette } = useTheme();

  useEffect(() => setArea(fetchedArea), [fetchedArea, setArea]);

  const handleMove = (event: React.MouseEvent) => {
    if (
      event.buttons === 1 &&
      event.target instanceof SVGPathElement &&
      event.target.tagName === "path"
    ) {
      const [x, y] = event.target.id.split(";");
      if (tool === "brush" && !selectedColor) return openEmptyColorAlert();
      if (tool === "brush" && selectedColor) draw(+x, +y, selectedColor);
      if (tool === "eraser") draw(+x, +y, "transparent");
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    if (!(event.target instanceof SVGPathElement)) return;
    const [x, y] = event.target.id.split(";");
    if (tool === "brush" && !selectedColor) return openEmptyColorAlert();
    if (tool === "brush" && selectedColor) draw(+x, +y, selectedColor);
    if (tool === "eraser") draw(+x, +y, "transparent");
  };

  const handleTouch = (event: React.TouchEvent) => {
    if (!(event.target instanceof SVGPathElement)) return;
    const target = document.elementFromPoint(
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY
    );
    if (!target) return;
    const [x, y] = target.id.split(";");
    if (tool === "brush" && !selectedColor) return openEmptyColorAlert();
    if (tool === "brush" && selectedColor) draw(+x, +y, selectedColor);
    if (tool === "eraser") draw(+x, +y, "transparent");
  };

  return (
    <TransformWrapper disabled={tool !== "pan"}>
      <TransformComponent
        contentStyle={{ height: "100%", width: "100%" }}
        wrapperStyle={{ height: "100%", width: "100%" }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${sizes.x * 100} ${sizes.y * 100}`}
          onMouseMove={handleMove}
          onTouchMove={handleTouch}
        >
          {area.map((el) => (
            <path
              key={el.x + ";" + el.y}
              id={el.x + ";" + el.y}
              d={`M${el.x * 100} ${el.y * 100} H${el.x * 100 + 100} V${
                el.y * 100 + 100
              } H${el.x * 100} Z`}
              vectorEffect="non-scaling-stroke"
              fill={el.color || "transparent"}
              stroke={palette.action.active}
              strokeWidth={1}
              onClick={handleClick}
            />
          ))}
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Area;
