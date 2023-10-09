import { Container } from "@mui/material";
import { getUser } from "@/lib/user";
import { getProfile } from "./_lib/profile";
import BaublesList from "@main/_components/BaublesList";
import { getBaublesList } from "@main/_lib/baubles";
import ProfileName from "./_components/ProfileName";
import CreateBaubleButton from "./_components/CreateBaubleButton";

const Profile = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? +searchParams.page : 1;
  const user = await getUser();
  const isCurrentUserProfile = user?.id === params.id;
  const profile = await getProfile(params.id);
  const { baubles: userBaubles, count } = await getBaublesList({
    id: params.id,
    page,
  });

  return (
    <Container sx={{ py: 4 }}>
      <ProfileName name={profile.name} />
      {isCurrentUserProfile && <CreateBaubleButton />}
      <BaublesList baubles={userBaubles} count={count} page={page} />
    </Container>
  );
};

export default Profile;
