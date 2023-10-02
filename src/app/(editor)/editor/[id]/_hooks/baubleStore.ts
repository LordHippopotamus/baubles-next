import { Database, Row } from "@/types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { create } from "zustand";

type BaubleState = {
  id: Row<"baubles">["id"] | undefined;
  name: Row<"baubles">["name"] | undefined;
  set: (state: Partial<BaubleState>) => void;
};

export const useBaubleStore = create<BaubleState>((set) => ({
  id: undefined,
  name: undefined,
  set: (state) => set(state),
}));
