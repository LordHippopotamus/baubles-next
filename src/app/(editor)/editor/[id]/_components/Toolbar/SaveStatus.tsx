"use client";

import { Database } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAreaStore } from "../../_hooks/areaStore";
import { usePaletteStore } from "../../_hooks/paletteStore";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CircularProgress, Toolbar, Typography } from "@mui/material";

const SaveStatus = () => {
  const [saved, setSaved] = useState(true);
  const params = useParams();

  const baubleId = params.id;

  const supabase = createClientComponentClient<Database>();

  const area = useAreaStore((state) => state.area);
  const palette = usePaletteStore((state) => state.palette);

  const saveArea = useCallback(async () => {
    if (!area.length) return; // it should be there
    setSaved(false);
    await supabase.from("baubles").update({ area }).eq("id", baubleId);
    setSaved(true);
  }, [area, supabase, baubleId]);

  const savePalette = useCallback(async () => {
    if (!palette.length) return; // it should be there
    setSaved(false);
    await supabase.from("baubles").update({ palette }).eq("id", baubleId);
    setSaved(true);
  }, [palette, supabase, baubleId]);

  useEffect(() => {
    saveArea();
  }, [saveArea]);

  useEffect(() => {
    savePalette();
  }, [savePalette]);

  return (
    <Toolbar>
      {saved ? (
        <Typography variant="body2">All Changes Saved</Typography>
      ) : (
        <>
          <CircularProgress size={24} color="inherit" />
          &nbsp;
          <Typography variant="body2">Saving</Typography>
        </>
      )}
    </Toolbar>
  );
};

export default SaveStatus;
