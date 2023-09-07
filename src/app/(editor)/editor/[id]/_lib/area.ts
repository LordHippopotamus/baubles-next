import { Database, isArea } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getArea = async (id: string) => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from("baubles")
    .select("area")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }

  const area = data[0].area;

  if (!isArea(area)) {
    throw new Error("Wrong area type");
  }

  return area;
};
