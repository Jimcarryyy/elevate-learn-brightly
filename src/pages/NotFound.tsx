import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("Page not found — Elevate");

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-16 text-center">
        <p className="mb-2 font-display text-6xl font-semibold text-muted-foreground/40">404</p>
        <h1 className="mb-2 font-display text-2xl font-semibold">Page not found</h1>
        <p className="mb-8 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
