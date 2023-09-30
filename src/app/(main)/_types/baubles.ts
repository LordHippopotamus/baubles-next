import { Row } from "@/types";

export type BaublesList = {
  baubles: {
    id: Row<"baubles">["id"];
    created_at: Row<"baubles">["created_at"];
    name: Row<"baubles">["name"];
    author: {
      id: Row<"profiles">["id"];
      name: Row<"profiles">["id"];
    };
  }[];
  count: number;
};
