import { Box } from "@mui/material";
import Area from "./_components/Area";
import { getArea } from "./_lib/area";
import Palette from "./_components/Palette";

const Editor = async ({ params }: { params: { id: string } }) => {
  const area = await getArea(params.id);

  return (
    <Box
      height={{ xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }}
      display="flex"
    >
      <Area defaultArea={area} />
      <Palette />
    </Box>
  );
};

export default Editor;
