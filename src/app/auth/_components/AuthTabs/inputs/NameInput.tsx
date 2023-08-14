import { Person } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";

const NameInput = () => (
  <TextField
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <Person />
        </InputAdornment>
      ),
    }}
    name="name"
    label="Name"
    type="text"
  />
);

export default NameInput;
