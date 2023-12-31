import { Box } from "@mui/material";
import { usePaletteStore } from "@editor/_hooks/paletteStore";
import ColorButton from "./ColorButton";

const ColorList = ({ open }: { open: boolean }) => {
  const palette = usePaletteStore((store) => store.palette);

  if (!open) return null;

  return (
    <Box
      position="absolute"
      bottom={16}
      right={16}
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateRows="repeat(3, 1fr)"
      gap={1}
    >
      {palette.map((color, index) => (
        <ColorButton color={color} index={index} key={index} />
      ))}
    </Box>
  );
};

export default ColorList;
