"use client";

import { BaubleForCard } from "@main/_types/baubles";
import {
  Card,
  CardActionArea,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { default as NextLink } from "next/link";
import { useRouter } from "next/navigation";

const BaubleCard = ({ bauble }: { bauble: BaubleForCard }) => {
  const router = useRouter();
  return (
    <Card>
      <CardActionArea onClick={() => router.push("/editor/" + bauble.id)}>
        <CardContent sx={{ p: 2, pb: 2 }}>
          <Typography variant="h5" gutterBottom>
            {bauble.name}
          </Typography>
          <Typography color="text.secondary">
            {new Date(bauble.created_at).toLocaleDateString()}
            &nbsp; by &nbsp;
            <Link
              component={NextLink}
              href={"/users/" + bauble.author.id}
              onClick={(event: React.MouseEvent) => event.stopPropagation()}
            >
              {bauble.author.name}
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BaubleCard;
