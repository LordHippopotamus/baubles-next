import { Row } from "@/types";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import DeleteButton from "./DeleteButton";

const BaubleCard = ({
  bauble,
  showDeleteButton = false,
}: {
  bauble: Row<"baubles">;
  showDeleteButton?: boolean;
}) => {
  return (
    <Card>
      <CardContent sx={{ p: 2, pb: 2 }}>
        <Typography variant="h5" gutterBottom>
          {bauble.name}
        </Typography>
        <Typography color="text.secondary">
          {new Date(bauble.created_at).toLocaleDateString()}
        </Typography>
      </CardContent>
      {showDeleteButton && (
        <CardActions>
          <DeleteButton id={bauble.id} />
        </CardActions>
      )}
    </Card>
  );
};

export default BaubleCard;
