"use client";

import { Tabs, Tab } from "@mui/material";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useState } from "react";

const AuthTabs = () => {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  return (
    <>
      <Tabs
        value={tab}
        onChange={(e, value) => setTab(value)}
        variant="fullWidth"
      >
        <Tab value="signin" label="Sign In" />
        <Tab value="signup" label="Sign Up" />
      </Tabs>
      {tab === "signin" ? <SignInForm /> : <SignUpForm />}
    </>
  );
};

export default AuthTabs;
