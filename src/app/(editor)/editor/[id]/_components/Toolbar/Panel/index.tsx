"use lient";

import { Box, Drawer } from "@mui/material";
import Tool from "../Tool";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import BaubleName from "./BaubleName";
import DeleteBaubleButton from "./DeleteBaubleButton";

const Panel = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tool icon={<Menu />} onClick={handleOpen} />
      <Drawer open={open} onClose={handleClose}>
        <Box
          p={2}
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <BaubleName />
          <Box>
            <DeleteBaubleButton />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Panel;
