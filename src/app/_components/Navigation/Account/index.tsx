"use client";

import { useUser } from "@/app/_hooks/user";
import { Button } from "@mui/material";
import Link from "next/link";
import AccountMenu from "./AccountMenu";

const Account = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <Button color="inherit" component={Link} href="/auth">
        Sign In
      </Button>
    );
  }

  return <AccountMenu />;
};

export default Account;
