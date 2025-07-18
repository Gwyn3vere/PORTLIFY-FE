// Layout component
import Header from "./Header/header";
import Grid from "../ui/background/Grid/Grid";

function MainLayout({ children }) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* <Glassmorphic /> */}
        <Grid />
      </div>
      {children}
    </main>
  );
}

export default MainLayout;
