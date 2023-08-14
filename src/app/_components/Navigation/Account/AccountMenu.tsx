"use client";

import { useUser } from "@/app/_hooks/user";
import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const AccountMenu = () => {
  const { user } = useUser();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small">
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem component={Link} href={"/users/" + user?.id}>
          Profile
        </MenuItem>
        <MenuItem component={Link} href="/account">
          My account
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
