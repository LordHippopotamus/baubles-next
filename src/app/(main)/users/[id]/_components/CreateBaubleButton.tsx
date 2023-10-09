"use client";

import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CreateBaubleButton = () => {
  const path = usePathname();

  return (
    <Button
      variant="contained"
      startIcon={<Add />}
      size="large"
      component={Link}
      href={path + "/new"}
    >
      Create Bauble
    </Button>
  );
};

export default CreateBaubleButton;
