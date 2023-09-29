import { BaubleForCard } from "@main/_types/baubles";
import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { default as NextLink } from "next/link";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const BaubleCard = ({
  bauble,
  showSensitiveActions = false,
}: {
  bauble: BaubleForCard;
  showSensitiveActions?: boolean;
}) => {
  return (
    <Card>
      <CardContent sx={{ p: 2, pb: 2 }}>
        <Typography variant="h5" gutterBottom>
          {bauble.name}
        </Typography>
        <Typography color="text.secondary">
          At &nbsp;
          {new Date(bauble.created_at).toLocaleDateString()}
          &nbsp; by &nbsp;
          <Link component={NextLink} href={"/users/" + bauble.author.id}>
            {bauble.author.name}
          </Link>
        </Typography>
      </CardContent>
      {showSensitiveActions && (
        <CardActions sx={{ display: "flex", gap: 1 }}>
          <DeleteButton id={bauble.id} />
          <EditButton id={bauble.id} />
        </CardActions>
      )}
    </Card>
  );
};

export default BaubleCard;
