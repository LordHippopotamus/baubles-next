"use client";

import { Close, Done, Edit } from "@mui/icons-material";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useBaubleStore } from "@editor/_hooks/baubleStore";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";

const BaubleName = () => {
  const supabase = createClientComponentClient<Database>();

  const name = useBaubleStore((state) => state.name);
  const id = useBaubleStore((state) => state.id);
  const set = useBaubleStore((state) => state.set);

  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleEdit = () => setEdit(!edit);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newName = formData.get("name");
    if (typeof newName !== "string") throw new Error("name has invalid type");
    if (!id) throw new Error("id is not availble");
    setLoading(true);
    const { data, error } = await supabase
      .from("baubles")
      .update({ name: newName })
      .eq("id", id)
      .select("name")
      .single();
    if (error) throw new Error(error.message);
    setLoading(false);
    set({ name: data.name });
    toggleEdit();
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {edit ? (
        <form onSubmit={handleSubmit}>
          <Box display="flex" gap={1}>
            <TextField name="name" defaultValue={name} variant="standard" />
            <IconButton disabled={loading} type="submit" color="primary">
              <Done />
            </IconButton>
            <IconButton disabled={loading} onClick={toggleEdit}>
              <Close />
            </IconButton>
          </Box>
        </form>
      ) : (
        <>
          <Typography>{name}</Typography>
          <IconButton onClick={toggleEdit} color="primary">
            <Edit fontSize="small" />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default BaubleName;
