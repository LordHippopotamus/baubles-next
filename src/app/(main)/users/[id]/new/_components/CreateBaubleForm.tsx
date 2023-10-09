"use client";

import { Box, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSizesStore } from "../_hooks/sizes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types";
import { useState } from "react";
import { generateArea } from "../_utils/generateArea";

const CreateBaubleForm = () => {
  const set = useSizesStore((state) => state.set);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    set({ [event.currentTarget.name]: +event.currentTarget.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: add validation
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const width = formData.get("width");
    const height = formData.get("height");
    if (
      typeof name !== "string" ||
      typeof width !== "string" ||
      typeof height !== "string"
    )
      return;
    const area = generateArea(+width, +height);
    setLoading(true);
    const { data: bauble, error } = await supabase
      .from("baubles")
      .insert({ name, area })
      .select()
      .single();
    setLoading(false);
    if (error) return;
    router.push("/editor/" + bauble.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h4">Create new bauble</Typography>
        <Box>
          <Typography>Enter the name of new babuble</Typography>
          <TextField name="name" label="Name" margin="dense" fullWidth />
        </Box>
        <Box>
          <Typography>Sizes</Typography>
          <Box display="flex" gap={1}>
            <TextField
              name="width"
              label="Width"
              margin="dense"
              type="number"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="height"
              label="Height"
              margin="dense"
              type="number"
              fullWidth
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box display="flex" gap={1}>
          <Button
            color="inherit"
            size="large"
            sx={{ flexGrow: 1 }}
            variant="contained"
            onClick={router.back}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="large"
            sx={{ flexGrow: 1 }}
            variant="contained"
            disabled={loading}
          >
            Create
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default CreateBaubleForm;
