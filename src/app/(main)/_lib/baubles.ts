import { Database } from "@/types";
import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { BaubleForCard } from "../_types/baubles";

export const getBaublesForCard = async (
  id?: User["id"]
): Promise<BaubleForCard[]> => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: baubles, error } = id
    ? await supabase
        .from("baubles")
        .select("id, created_at, name, author (id, name)")
        .eq("author.id", id)
        .returns<BaubleForCard[]>()
    : await supabase
        .from("baubles")
        .select("id, created_at, name, author (id, name)")
        .returns<BaubleForCard[]>();

  if (error) {
    throw new Error(error.message);
  }

  return baubles;
};
