import { Box } from "@mui/material";
import Area from "./_components/Area";
import { getArea } from "./_lib/area";
import Palette from "./_components/Palette";
import { getPalette } from "./_lib/palette";

const Editor = async ({ params }: { params: { id: string } }) => {
  const area = await getArea(params.id);
  const palette = await getPalette(params.id);

  return (
    <Box
      height={{ xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }}
      display="flex"
    >
      <Area fetchedArea={area} />
      <Palette fetchedPalette={palette} />
    </Box>
  );
};

export default Editor;
