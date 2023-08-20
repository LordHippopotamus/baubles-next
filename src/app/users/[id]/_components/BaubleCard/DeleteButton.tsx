"use client";

import { Row } from "@/app/_types";
import { Database } from "@/app/_types/supabase";
import { Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteButton = ({ id }: { id: Row<"baubles">["id"] }) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => !loading && setOpen(false);
  const handleDelete = async () => {
    setLoading(true);
    await supabase.from("baubles").delete().eq("id", id);
    setLoading(false);
    handleClose();
    router.refresh();
  };

  return (
    <>
      <Button color="warning" startIcon={<Delete />} onClick={handleOpen}>
        Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you really want to delete this bauble?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will remove the bauble without the possibility of recovery
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={loading} onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton loading={loading} onClick={handleDelete} color="error">
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;
