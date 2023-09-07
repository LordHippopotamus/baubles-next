import Navigation from "./_components/Navigation";

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default BaseLayout;
