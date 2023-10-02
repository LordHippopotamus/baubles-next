import { Database } from "@/types";
import { isArea } from "@editor/_types/area";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { isPalette } from "@editor/_types/palette";

export const getBauble = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from("baubles")
    .select("area, palette, author, name")
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  const { area, palette, author, name } = data[0];

  if (!isArea(area)) {
    throw new Error("Wrong area type");
  }

  if (!isPalette(palette)) {
    throw new Error("Wrong palette type");
  }

  return { area, palette, author, name };
};
