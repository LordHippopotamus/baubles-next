import { Database } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { isPalette } from "../_types/palette";

export const getPalette = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from("baubles")
    .select("palette")
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  const palette = data[0].palette;

  if (!isPalette(palette)) {
    throw new Error("Wrong palette type");
  }

  return palette;
};
