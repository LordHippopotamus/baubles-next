import { BaublesResponse } from "@main/_types/baubles";
import BaubleCard from "./BaubleCard";
import { Box } from "@mui/material";
import CreateBaubleDialog from "./CreateBaubleDialog";
import Pagination from "./Pagination";
import NoBaublesAlert from "./NoBaublesAlert";

const BaublesList = ({
  baubles,
  count,
  page = 1,
  perPage = 10,
  showSensitiveActions = false,
}: {
  baubles: BaublesResponse["baubles"];
  count: BaublesResponse["count"];
  page?: number;
  perPage?: number;
  showSensitiveActions?: boolean;
}) => (
  <>
    {showSensitiveActions && <CreateBaubleDialog />}
    <Box display="flex" flexDirection="column" gap={2} width="100%" mt={2}>
      {!baubles.length && <NoBaublesAlert />}
      <Box display="flex" flexDirection="column" gap={2}>
        {baubles.map((bauble) => (
          <BaubleCard
            key={bauble.id}
            bauble={bauble}
            showSensitiveActions={showSensitiveActions}
          />
        ))}
      </Box>
    </Box>
    <Pagination count={Math.ceil(count / perPage)} page={page} />
  </>
);

export default BaublesList;
