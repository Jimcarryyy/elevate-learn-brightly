import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const Privacy = () => {
  usePageTitle("Privacy Policy — Elevate");

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />
      <main className="pt-16">
        <article className="section-padding">
          <div className="container-narrow prose prose-neutral max-w-none">
            <h1 className="mb-6 font-display text-4xl font-semibold">Privacy Policy</h1>
            <p className="mb-4 text-sm text-muted-foreground">Last updated: January 2025</p>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">Information we collect</h2>
                <p>
                  We collect account information (name, email), course progress data, and usage
                  analytics to improve the learning experience. Payment information is processed by
                  our payment provider and not stored on our servers.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">How we use data</h2>
                <p>
                  Your data is used to deliver courses, track progress, send account-related
                  communications, and improve platform features. We do not sell personal information
                  to third parties.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">Cookies</h2>
                <p>
                  We use essential cookies for authentication and session management. Analytics
                  cookies help us understand how the platform is used and can be disabled in your
                  browser settings.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">Your rights</h2>
                <p>
                  You may request access to, correction of, or deletion of your personal data by
                  contacting us. EU residents have additional rights under GDPR.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">Contact</h2>
                <p>
                  Privacy inquiries:{" "}
                  <a href="mailto:hello@elevatelearn.com" className="text-primary hover:underline">
                    hello@elevatelearn.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
