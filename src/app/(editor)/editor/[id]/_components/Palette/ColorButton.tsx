"use client";

import { Add, Circle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { usePickColorModal } from "./pickColorModalStore";
import { usePaletteStore } from "@editor/_hooks/paletteStore";
import { useContextMenu } from "./contextMenuStore";

const ColorButton = ({
  color,
  index,
}: {
  color: string | null;
  index: number;
}) => {
  const openPickColorModal = usePickColorModal(
    (state) => state.openPickColorModal
  );
  const selectColor = usePaletteStore((state) => state.selectColor);

  const contextMenu = useContextMenu((state) => state.contextMenu);
  const openContextMenu = useContextMenu((state) => state.openContextMenu);
  const closeContextMenu = useContextMenu((state) => state.closeContextMenu);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    !contextMenu
      ? openContextMenu(event.clientX + 2, event.clientY - 6, index)
      : closeContextMenu();
  };

  if (color) {
    return (
      <IconButton
        size="large"
        onClick={() => selectColor(index)}
        onContextMenu={handleContextMenu}
      >
        <Circle sx={{ color }} fontSize="large" />
      </IconButton>
    );
  }

  return (
    <IconButton size="large" onClick={() => openPickColorModal(index)}>
      <Add fontSize="large" />
    </IconButton>
  );
};

export default ColorButton;
