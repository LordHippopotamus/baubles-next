import { Row } from "@/types";
import { Box, Typography } from "@mui/material";

const ProfileName = ({ name }: { name: Row<"profiles">["name"] }) => (
  <Box display="flex" justifyContent="center" >
    <Typography variant="h2">{name}</Typography>
  </Box>
);

export default ProfileName