import { Row } from "@/types";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

const EditButton = ({ id }: { id: Row<"baubles">["id"] }) => (
  <Button
    color="secondary"
    startIcon={<Edit />}
    LinkComponent={Link}
    href={`/editor/${id}`}
  >
    Edit
  </Button>
);

export default EditButton;
