import { BaubleForCard } from "@main/_types/baubles";
import BaubleCard from "./BaubleCard";
import { Alert, AlertTitle, Box, Paper } from "@mui/material";
import CreateBaubleDialog from "./CreateBaubleDialog";

const BaublesList = ({
  baubles,
  showSensitiveActions = false,
}: {
  baubles: BaubleForCard[];
  showSensitiveActions?: boolean;
}) => {
  return (
    <>
      {showSensitiveActions && (
        <Box alignSelf="flex-start">
          <CreateBaubleDialog />
        </Box>
      )}
      <Box display="flex" flexDirection="column" gap={2} width="100%" mt={2}>
        {!baubles.length && (
          <Paper elevation={1}>
            <Alert severity="info" variant="filled">
              <AlertTitle>No baubles</AlertTitle>
              There's no baubles yet, just create your first!
            </Alert>
          </Paper>
        )}
        <Box display="flex" flexDirection="column" gap={2}>
          {baubles.map((bauble) => (
            <BaubleCard
              bauble={bauble}
              showSensitiveActions={showSensitiveActions}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BaublesList;
