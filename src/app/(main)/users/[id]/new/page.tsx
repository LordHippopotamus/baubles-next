import { Box, Container, Paper } from "@mui/material";
import CreateBaubleForm from "./_components/CreateBaubleForm";
import Preview from "./_components/Preview";

const New = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Box
          mt={2}
          display="flex"
          gap={2}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box flexGrow={{ xs: 1, sm: 0 }}>
            <CreateBaubleForm />
          </Box>
          <Box flexGrow={{ xs: 1 }}>
            <Preview />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default New;
