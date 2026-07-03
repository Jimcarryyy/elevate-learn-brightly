import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-gradient-to-br from-violet-950 via-purple-950 to-fuchsia-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-purple-mesh opacity-40" />
      <div className="container-wide relative px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Link to="/" className="mb-4 inline-block transition-opacity hover:opacity-90">
                <Logo variant="light" />
              </Link>
              <p className="mb-6 max-w-sm text-sm text-white/70">
                Structured online courses for developers and designers. Learn at your pace,
                track your progress, and build skills that transfer to real work.
              </p>
              <a
                href="mailto:hello@elevatelearn.com"
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                hello@elevatelearn.com
              </a>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/courses" className="text-white/70 transition-colors hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-white/70 transition-colors hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/for-creators" className="text-white/70 transition-colors hover:text-white">
                    For Creators
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-white/70 transition-colors hover:text-white">
                    Dashboard preview
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/50">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/about" className="text-white/70 transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white/70 transition-colors hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white/70 transition-colors hover:text-white">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 space-y-2 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Elevate. All rights reserved.</p>
          <p className="text-white/40">Site designed &amp; built by Jimcarry Omambak</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
