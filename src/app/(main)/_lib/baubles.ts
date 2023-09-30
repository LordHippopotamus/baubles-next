import { Database } from "@/types";
import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { BaublesList } from "../_types/baubles";

export const getBaublesList = async ({
  page = 1,
  perPage = 10,
  id,
}: {
  page?: number;
  perPage?: number;
  id?: User["id"];
}): Promise<BaublesList> => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: baubles,
    count,
    error,
  } = id
    ? await supabase
        .from("baubles")
        .select("id, created_at, name, author (id, name)", { count: "exact" })
        .eq("author.id", id)
        .range((page - 1) * perPage, page * perPage - 1)
        .returns<BaublesList["baubles"]>()
    : await supabase
        .from("baubles")
        .select("id, created_at, name, author (id, name)", { count: "exact" })
        .range((page - 1) * perPage, page * perPage - 1)
        .returns<BaublesList["baubles"]>();

  if (error) {
    throw new Error(error.message);
  }

  if (!count) {
    throw new Error("unable to get count of baubles");
  }

  return { baubles, count };
};
