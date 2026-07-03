import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { instructorPricing } from "@/data/pricing";

const CreatorCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8 text-white shadow-purple-lg lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-2xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/70">
                  For creators
                </p>
                <h2 className="mb-4 font-display text-3xl font-semibold">
                  Share what you know. Keep {instructorPricing.revenueShare} of revenue.
                </h2>
                <p className="mb-6 text-white/80">
                  Publish structured courses with built-in hosting and analytics. Sarah Johnson&apos;s
                  React bootcamp reached 8,200 students. Emily Rodriguez runs two design courses
                  full-time.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-700 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                >
                  <Link to="/for-creators">
                    Start teaching
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <ul className="space-y-3">
                {instructorPricing.features.map((feature, index) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-fuchsia-200" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CreatorCTA;
