"use client";

import { Button } from "@mui/material";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const SignOutButton = ({
  children = "Sign Out",
  ...props
}: {
  children?: React.ReactNode;
}) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/auth");
  };

  return (
    <Button onClick={handleSignOut} {...props}>
      {children}
    </Button>
  );
};

export default SignOutButton;
