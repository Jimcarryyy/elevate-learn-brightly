import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { instructorPricing, learnerPlans, pricingFaqs } from "@/data/pricing";
import { usePageTitle } from "@/hooks/usePageTitle";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Pricing = () => {
  usePageTitle(
    "Pricing — Elevate",
    "Simple pricing for learners and a 70% revenue share for course creators."
  );

  const handlePlanSelect = (planName: string) => {
    if (planName === "Teams") {
      window.location.href = "/contact";
      return;
    }
    toast.info("Preview mode", {
      description: "Billing is not enabled in this demo. Explore the platform with a free account.",
    });
  };

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-12 text-center">
          <div className="container-narrow">
            <h1 className="mb-4 font-display text-4xl font-semibold lg:text-5xl">Pricing</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Start free, upgrade when you need full access. Creators keep{" "}
              {instructorPricing.revenueShare} of course revenue.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide">
            <h2 className="mb-8 font-display text-2xl font-semibold">For learners</h2>
            <div className="mb-16 grid gap-6 md:grid-cols-3">
              {learnerPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={cn(plan.highlighted && "border-primary shadow-md")}
                >
                  <CardHeader>
                    {plan.highlighted && (
                      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
                        Most popular
                      </p>
                    )}
                    <CardTitle className="font-display text-xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      <span className="font-display text-4xl font-semibold">
                        {plan.price === 0 ? "Free" : `$${plan.price}`}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-sm text-muted-foreground"> {plan.period}</span>
                      )}
                    </p>
                    <ul className="mb-6 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      onClick={() => handlePlanSelect(plan.name)}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-16 rounded-lg border border-border bg-muted/40 p-8 lg:p-10">
              <h2 className="mb-2 font-display text-2xl font-semibold">For creators</h2>
              <p className="mb-6 max-w-2xl text-muted-foreground">
                Publish for free. Elevate takes {instructorPricing.platformFee}; you keep{" "}
                {instructorPricing.revenueShare}. Payouts are {instructorPricing.payoutSchedule}{" "}
                with a {instructorPricing.minimumPayout} minimum.
              </p>
              <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                {instructorPricing.features.map((feature) => (
                  <li key={feature} className="text-sm text-foreground">
                    · {feature}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/for-creators">Learn about teaching</Link>
              </Button>
            </div>

            <h2 className="mb-6 font-display text-2xl font-semibold">FAQ</h2>
            <Accordion type="single" collapsible className="max-w-2xl">
              {pricingFaqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
