import { Container } from "@mui/material";
import BaublesList from "./_components/BaublesList";
import { getBaublesList } from "./_lib/baubles";

const Home = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams.page ? +searchParams.page : 1;
  const { baubles, count } = await getBaublesList({ page });

  return (
    <Container sx={{ py: 4 }}>
      <BaublesList baubles={baubles} count={count} page={page} />
    </Container>
  );
};

export default Home;
