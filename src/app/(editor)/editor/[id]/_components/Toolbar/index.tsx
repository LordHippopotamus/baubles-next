"use client";

import { PanTool, Brush, FormatColorReset } from "@mui/icons-material";
import { AppBar, Box } from "@mui/material";
import { useToolStore } from "@editor/_hooks/toolsStore";
import { useBaubleStore } from "@editor/_hooks/baubleStore";
import Tool from "./Tool";
import SaveStatus from "./SaveStatus";
import Panel from "./Panel";
import { Row } from "@/types";
import { useEffect } from "react";

const Toolbar = ({
  id,
  name,
}: {
  id: Row<"baubles">["id"];
  name: Row<"baubles">["name"];
}) => {
  const tool = useToolStore((state) => state.tool);
  const setTool = useToolStore((state) => state.setTool);

  const set = useBaubleStore((state) => state.set);

  useEffect(() => set({ id, name }), [id, name, set]);

  return (
    <>
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Panel />
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
    </>
  );
};

export default Toolbar;
