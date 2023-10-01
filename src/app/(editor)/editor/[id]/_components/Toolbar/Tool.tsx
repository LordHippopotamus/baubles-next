import { Button, useTheme } from "@mui/material";

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

export default Tool;
