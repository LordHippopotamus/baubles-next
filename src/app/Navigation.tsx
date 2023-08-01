import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
        component={Link}
        href="/"
      >
        Baubles
      </Typography>
      <Button color="inherit" component={Link} href="/auth">
        Sign In
      </Button>
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton> */}
    </Toolbar>
  </AppBar>
);

export default Navigation;
