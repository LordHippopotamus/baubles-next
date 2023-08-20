"use client";

import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FormEvent, useState } from "react";
import { EmailInput, PasswordInput } from "./inputs";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      // TODO: add validation
      return;
    }

    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <EmailInput />
        <PasswordInput />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          size="large"
          sx={{ alignSelf: "flex-end" }}
        >
          Sign In
        </LoadingButton>
      </Box>
    </form>
  );
};

export default SignInForm;
