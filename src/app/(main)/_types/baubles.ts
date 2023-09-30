import { Row } from "@/types";

export type BaubleForCard = {
  id: Row<"baubles">["id"];
  created_at: Row<"baubles">["created_at"];
  name: Row<"baubles">["name"];
  author: {
    id: Row<"profiles">["id"];
    name: Row<"profiles">["id"];
  };
};

export type BaublesResponse = {
  baubles: BaubleForCard[];
  count: number;
};
