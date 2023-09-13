"use client";

import { PanTool, Brush, FormatColorReset } from "@mui/icons-material";
import { AppBar, Box } from "@mui/material";
import { useToolStore } from "@editor/_hooks/toolsStore";
import Tool from "./Tool";
import SaveStatus from "./SaveStatus";

const Navigation = () => {
  const tool = useToolStore((state) => state.tool);
  const setTool = useToolStore((state) => state.setTool);

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Tool
            icon={<PanTool />}
            onClick={() => setTool("pan")}
            active={tool === "pan"}
          />
          <Tool
            icon={<Brush />}
            onClick={() => setTool("brush")}
            active={tool === "brush"}
          />
          <Tool
            icon={<FormatColorReset />}
            onClick={() => setTool("eraser")}
            active={tool === "eraser"}
          />
        </Box>
        <SaveStatus />
      </Box>
    </AppBar>
  );
};

export default Navigation;
