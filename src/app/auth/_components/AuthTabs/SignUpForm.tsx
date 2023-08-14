"use client";

import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { EmailInput, NameInput, PasswordInput } from "./inputs";

const SignUpForm = () => {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof name !== "string"
    ) {
      // TODO: add validation
      return;
    }

    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    });

    setLoading(false);
    router.push("?confirmEmail");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <EmailInput />
        <NameInput />
        <PasswordInput />
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          size="large"
          sx={{ alignSelf: "flex-end" }}
        >
          Sign Up
        </LoadingButton>
      </Box>
    </form>
  );
};

export default SignUpForm;
