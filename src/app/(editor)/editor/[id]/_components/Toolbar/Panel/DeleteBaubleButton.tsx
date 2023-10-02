"use client";

import { Database } from "@/types";
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
import { useState } from "react";
import { useBaubleStore } from "@editor/_hooks/baubleStore";
import { useRouter } from "next/navigation";

const DeleteBaubleButton = () => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const id = useBaubleStore((state) => state.id);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setLoading(true);
    await supabase.from("baubles").delete().eq("id", id);
    setLoading(false);
    router.push("/");
  };

  return (
    <>
      <Button color="error" onClick={handleOpen}>
        Delete Bauble
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Do you really want to delete this bauble?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will remove the bauble without the possibility of recovery
          </DialogContentText>
          <DialogContentText sx={{ mt: 1 }}>
            After deletion, you will be redirected to the main page
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

export default DeleteBaubleButton;
