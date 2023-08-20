"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Database } from "@/app/_types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { LoadingButton } from "@mui/lab";

const CreateBaubleDialog = () => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => !loading && setOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: add validation
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    await supabase.from("baubles").insert({ name });
    setLoading(false);
    // TODO: maybe can use something that looks better like a revalidatePath
    handleClose();
    router.refresh();
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<Add />}
        size="large"
        onClick={handleOpen}
      >
        Create Bauble
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Create new bauble</DialogTitle>
          <DialogContent>
            <TextField autoFocus name="name" label="Name" variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button disabled={loading} onClick={handleClose}>
              Cancel
            </Button>
            <LoadingButton loading={loading} type="submit">
              Create
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default CreateBaubleDialog;
