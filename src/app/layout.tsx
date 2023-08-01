import Navigation from "./Navigation";
import ThemeRegistry from "./ThemeRegistry";
import { Paper } from "@mui/material";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <ThemeRegistry options={{ key: "mui" }}>
        <Paper elevation={0} sx={{ minHeight: "100vh" }}>
          <Navigation />
          {children}
        </Paper>
      </ThemeRegistry>
    </body>
  </html>
);

export default RootLayout;
