import { Database } from "@/app/_types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const getProfile = async (id: User["id"]) => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase.from("profiles").select().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
};
