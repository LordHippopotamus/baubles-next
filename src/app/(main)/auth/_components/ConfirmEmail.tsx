import { Check } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const ConfirmEmail = () => (
  <Box p={2} gap={2} display="flex" flexDirection="column" alignItems="center">
    <Box display="flex" flexDirection="column" alignItems="center">
      <Check fontSize="large" color="success" />
      <Typography variant="h5">Success!</Typography>
    </Box>
    <Typography>Check your email to complete the registration.</Typography>
    <Button component={Link} href="/">
      Start Research
    </Button>
  </Box>
);

export default ConfirmEmail;
