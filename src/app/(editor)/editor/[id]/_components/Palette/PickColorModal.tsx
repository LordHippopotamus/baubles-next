"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { ChromePicker, Color } from "react-color";
import { usePickColorModal } from "./pickColorModalStore";
import { useState } from "react";
import { usePaletteStore } from "@editor/_hooks/paletteStore";

const PickColorModal = () => {
  const pickColorModal = usePickColorModal((state) => state.pickColorModal);
  const closePickColorModal = usePickColorModal(
    (state) => state.closePickColorModal
  );
  const setColorToPalette = usePaletteStore((state) => state.setColor);

  const [color, setColor] = useState<string>("666666");

  const handleSave = () => {
    if (!pickColorModal || !color) return;
    setColorToPalette(pickColorModal, color);
    closePickColorModal();
  };

  return (
    <Dialog open={!!pickColorModal} onClose={closePickColorModal}>
      <DialogTitle>Pick Color</DialogTitle>
      <DialogContent>
        <ChromePicker
          color={color}
          onChange={(color) => setColor(color.hex)}
          disableAlpha
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closePickColorModal}>Close</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PickColorModal;
