"use client";

import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      name="password"
      label="Password"
      type={showPassword ? "text" : "password"}
    />
  );
};

export default PasswordInput;
