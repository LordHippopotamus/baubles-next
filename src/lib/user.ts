import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/types";

export function getUser(): Promise<User | null>;
export function getUser(requireAuthorization: true): Promise<User>;

export async function getUser(requireAuthorization: boolean = false) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const user = await supabase.auth.getUser();

  if (requireAuthorization && user.error) {
    return redirect("/auth");
  }

  return user.data.user;
}
