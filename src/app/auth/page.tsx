import { Box, Paper } from "@mui/material";
import ConfirmEmail from "./_components/ConfirmEmail";
import AuthTabs from "./_components/AuthTabs";

const Auth = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => (
  <Box my={16} mx={{ xs: 2, sm: "auto" }} width={{ xs: "auto", sm: "24rem" }}>
    <Paper elevation={1}>
      {searchParams.hasOwnProperty("confirmEmail") ? (
        <ConfirmEmail />
      ) : (
        <AuthTabs />
      )}
    </Paper>
  </Box>
);

export default Auth;
