import { Container } from "@mui/material";
import BaublesList from "./_components/BaublesList";
import { getBaublesForCard } from "./_lib/baubles";

const Home = async () => {
  const baubles = await getBaublesForCard();
  return (
    <Container sx={{ py: 4 }}>
      <BaublesList baubles={baubles} />
    </Container>
  );
};

export default Home;
