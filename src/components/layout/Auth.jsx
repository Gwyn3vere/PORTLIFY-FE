import PortfolioReel from "../ui/background/PortfolioReel/PortfolioReel";

function AuthLayout({ children }) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <PortfolioReel />
      </div>
      {children}
    </main>
  );
}

export default AuthLayout;
