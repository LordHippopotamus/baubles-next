import { Email } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";

const EmailInput = () => (
  <TextField
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <Email />
        </InputAdornment>
      ),
    }}
    name="email"
    label="Email"
    type="email"
  />
);

export default EmailInput;
