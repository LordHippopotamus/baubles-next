import { Box } from "@mui/material";
import Area from "./_components/Area";
import Palette from "./_components/Palette";
import EmptyColorAlert from "./_components/EmptyColorAlert";
import { getUser } from "@/lib/user";
import { getBauble } from "./_lib/bauble";
import Toolbar from "./_components/Toolbar";

const Editor = async ({ params }: { params: { id: string } }) => {
  const bauble = await getBauble(params.id);
  const user = await getUser();
  const isAuthor = user?.id === bauble.author;

  return (
    <>
      {isAuthor && <Toolbar id={params.id} name={bauble.name} />}
      <Box
        height={{ xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" }}
        display="flex"
        position="relative"
      >
        <Area fetchedArea={bauble.area} />
        {isAuthor && <Palette fetchedPalette={bauble.palette} />}
        <EmptyColorAlert />
      </Box>
    </>
  );
};

export default Editor;
