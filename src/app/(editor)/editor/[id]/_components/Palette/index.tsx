"use client";

import { Palette as PaletteIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ColorList from "./ColorList";
import PickColorModal from "./PickColorModal";
import { usePaletteStore } from "@editor/_hooks/paletteStore";
import ContextMenu from "./ContextMenu";

const Palette = ({ fetchedPalette }: { fetchedPalette: string[] }) => {
  const [open, setOpen] = useState(false);
  const selectedColor = usePaletteStore((state) => state.selectedColor);
  const setPalette = usePaletteStore((state) => state.setPalette);

  useEffect(() => setPalette(fetchedPalette), [fetchedPalette, setPalette]);

  return (
    <>
      <ContextMenu />
      <PickColorModal />
      <ColorList open={open} />
      <IconButton
        onClick={() => setOpen((prev) => !prev)}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        size="large"
      >
        <PaletteIcon
          sx={{ transition: "0.3s", color: selectedColor }}
          fontSize="large"
        />
      </IconButton>
    </>
  );
};

export default Palette;
