"use client";

import { PanTool, Brush, FormatColorReset } from "@mui/icons-material";
import { AppBar, Box, Button, useTheme } from "@mui/material";
import { useToolStore } from "@editor/_hooks/toolsStore";

const Navigation = () => {
  const tool = useToolStore((state) => state.tool);
  const setTool = useToolStore((state) => state.setTool);
  return (
    <AppBar position="static">
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
    </AppBar>
  );
};

const Tool = ({
  icon,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => {
  const { palette } = useTheme();

  return (
    <Button
      color="inherit"
      sx={{
        height: { xs: 56, sm: 64 },
        minWidth: { xs: 56, sm: 64 },
        borderRadius: 0,
        background: active ? palette.action.selected : "transparent",
      }}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default Navigation;
