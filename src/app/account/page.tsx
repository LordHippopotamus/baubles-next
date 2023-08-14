import { getUser } from "../_lib/user";
import SignOutButton from "./SignOutButton";

const Account = async () => {
  const user = await getUser(true);

  return (
    <main>
      <h1>{user.email}</h1>
      <SignOutButton />
    </main>
  );
};

export default Account;
