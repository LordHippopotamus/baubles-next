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
import BaublesList from "@main/_components/BaublesList";
import { getBaublesForCard } from "@main/_lib/baubles";
import ProfileName from "./_components/ProfileName";

const Profile = async ({ params }: { params: { id: string } }) => {
  const user = await getUser();
  const isCurrentUserProfile = user?.id === params.id;
  const profile = await getProfile(params.id);
  const userBaubles = await getBaublesForCard(params.id);

  return (
    <Container sx={{ py: 4 }}>
      <ProfileName name={profile.name} />
      <BaublesList
        baubles={userBaubles}
        showSensitiveActions={isCurrentUserProfile}
      />
    </Container>
  );
};

export default Profile;
