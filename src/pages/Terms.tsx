import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTitle } from "@/hooks/usePageTitle";

const Terms = () => {
  usePageTitle("Terms of Service — Elevate");

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />
      <main className="pt-16">
        <article className="section-padding">
          <div className="container-narrow prose prose-neutral max-w-none">
            <h1 className="mb-6 font-display text-4xl font-semibold">Terms of Service</h1>
            <p className="mb-4 text-sm text-muted-foreground">Last updated: January 2025</p>

            <div className="space-y-6 text-muted-foreground">
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">1. Acceptance</h2>
                <p>
                  By accessing Elevate, you agree to these terms. This is a demonstration platform;
                  certain features described in the product are not fully operational.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">2. Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials.
                  You must provide accurate information when registering.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">3. Course content</h2>
                <p>
                  Course materials are for personal, non-commercial learning unless otherwise stated.
                  Instructors retain ownership of their content and grant Elevate a license to host
                  and distribute it on the platform.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">4. Payments</h2>
                <p>
                  Paid plans are billed according to the pricing page. Refunds are available within
                  14 days of purchase if less than 20% of the course has been completed.
                </p>
              </section>
              <section>
                <h2 className="mb-2 text-lg font-semibold text-foreground">5. Contact</h2>
                <p>
                  Questions about these terms? Email{" "}
                  <a href="mailto:hello@elevatelearn.com" className="text-primary hover:underline">
                    hello@elevatelearn.com
                  </a>
                  .
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

export default Terms;
