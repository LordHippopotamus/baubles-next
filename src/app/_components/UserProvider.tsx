"use client";

import { useEffect, useState } from "react";
import { UserContext } from "../_context/user";
import { User } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../_types/supabase";

const UserProvider = ({
  children,
  defaultUser,
}: {
  children: React.ReactNode;
  defaultUser: User | null;
}) => {
  const [user, setUser] = useState(defaultUser);

  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  }, [supabase.auth]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
