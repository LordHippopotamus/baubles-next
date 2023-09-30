import { Paper, Alert, AlertTitle } from "@mui/material";

const NoBaublesAlert = () => (
  <Paper elevation={1}>
    <Alert severity="info" variant="filled">
      <AlertTitle>No baubles</AlertTitle>
      There&apos;s no baubles yet, just create your first!
    </Alert>
  </Paper>
);

export default NoBaublesAlert;
