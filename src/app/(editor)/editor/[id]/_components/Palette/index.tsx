"use client";

import { Palette as PaletteIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import ColorList from "./ColorList";
import PickColorModal from "./PickColorModal";
import { usePaletteStore } from "@editor/_hooks/paletteStore";
import ContextMenu from "./ContextMenu";
import { Palette } from "@/types";

const Palette = ({ fetchedPalette }: { fetchedPalette: Palette }) => {
  const [open, setOpen] = useState(false);
  const palette = usePaletteStore((state) => state.palette);
  const selectedColor = palette.find((el) => el.selected);
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
