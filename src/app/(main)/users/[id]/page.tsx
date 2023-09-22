import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { getUser } from "@/lib/user";
import { getProfile } from "./_lib/profile";
import { getUserBaubles } from "./_lib/baubles";
import CreateBaubleDialog from "./_components/CreateBaubleDialog";
import BaubleCard from "./_components/BaubleCard";

const Profile = async ({ params }: { params: { id: string } }) => {
  const user = await getUser();
  const isCurrentUserProfile = user?.id === params.id;
  const profile = await getProfile(params.id);
  const userBaubles = await getUserBaubles(params.id);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      <Typography variant="h2">{profile.name}</Typography>

      {isCurrentUserProfile && (
        <Box my={2} alignSelf="flex-start">
          <CreateBaubleDialog />
        </Box>
      )}

      <Box display="flex" flexDirection="column" gap={2} width="100%">
        {!userBaubles.length && (
          <Paper elevation={6}>
            <Alert severity="info">
              <AlertTitle>No baubles</AlertTitle>
              There's no baubles yet, just create your first!
            </Alert>
          </Paper>
        )}
        {userBaubles.map((bauble) => (
          <BaubleCard
            bauble={bauble}
            showDeleteButton={isCurrentUserProfile}
            key={bauble.id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Profile;
