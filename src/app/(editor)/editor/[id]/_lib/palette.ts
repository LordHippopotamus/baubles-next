import { Database } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

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

  return palette;
};
