import Navigation from "./_components/Navigation";

const EditorLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default EditorLayout;
