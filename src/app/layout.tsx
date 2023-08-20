import Navigation from "./_components/Navigation";
import ThemeRegistry from "./_components/ThemeRegistry";
import { Paper } from "@mui/material";
import UserProvider from "./_components/UserProvider";
import { getUser } from "./_lib/user";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <UserProvider defaultUser={user}>
          <ThemeRegistry options={{ key: "mui" }}>
            <Paper elevation={0} sx={{ minHeight: "100vh", borderRadius: 0 }}>
              <Navigation />
              {children}
            </Paper>
          </ThemeRegistry>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
