import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Account from "./Account";

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
      <Account />
    </Toolbar>
  </AppBar>
);

export default Navigation;
