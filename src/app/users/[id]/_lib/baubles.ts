import { Database } from "@/app/_types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const getUserBaubles = async (id: User["id"]) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase
    .from("baubles")
    .select()
    .eq("author", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
