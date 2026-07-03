import { Link } from "react-router-dom";
import { ArrowRight, Upload, BarChart2, Megaphone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { instructorPricing } from "@/data/pricing";
import { instructors } from "@/data/instructors";
import { usePageTitle } from "@/hooks/usePageTitle";
import { toast } from "sonner";

const steps = [
  {
    icon: Upload,
    title: "Plan your curriculum",
    description:
      "Outline modules and lessons. Our template helps you structure content learners can follow week by week.",
  },
  {
    icon: BarChart2,
    title: "Publish and track",
    description:
      "Upload videos, set pricing, and monitor enrollments from a single dashboard with real-time analytics.",
  },
  {
    icon: Megaphone,
    title: "Grow your audience",
    description:
      "Use built-in coupons, featured placements, and email tools to reach students without managing separate marketing stacks.",
  },
];

const testimonials = [
  {
    quote:
      "I moved my React workshop to Elevate and reached more students in three months than two years of independent sales.",
    name: "Sarah Johnson",
    role: "React bootcamp instructor",
    course: "Complete React Development Bootcamp",
  },
  {
    quote:
      "The analytics tell me exactly where students drop off. I revised two modules and completion went up 18%.",
    name: "Emily Rodriguez",
    role: "Product designer & instructor",
    course: "UI/UX Design Masterclass",
  },
];

const ForCreators = () => {
  usePageTitle(
    "For Creators — Elevate",
    "Publish courses, keep 70% of revenue, and reach students worldwide."
  );

  const handleStartTeaching = () => {
    toast.info("Preview mode", {
      description: "Instructor onboarding is not enabled in this demo.",
    });
  };

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-12">
          <div className="container-narrow">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              For creators
            </p>
            <h1 className="mb-4 font-display text-4xl font-semibold lg:text-5xl">
              Teach what you build. Keep {instructorPricing.revenueShare}.
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Elevate handles hosting, payments, and discovery so you can focus on course quality.
              No upfront fees—publish when your curriculum is ready.
            </p>
            <Button size="lg" onClick={handleStartTeaching}>
              Start teaching
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="section-padding bg-muted/40">
          <div className="container-wide">
            <h2 className="mb-10 font-display text-2xl font-semibold">How it works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={step.title}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <p className="mb-1 text-xs font-medium text-muted-foreground">Step {index + 1}</p>
                    <h3 className="mb-2 font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <h2 className="mb-8 font-display text-2xl font-semibold">From our instructors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <p className="mb-4 text-foreground">&ldquo;{item.quote}&rdquo;</p>
                  <footer>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.role} · {item.course}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border bg-muted/40">
          <div className="container-wide">
            <h2 className="mb-8 font-display text-2xl font-semibold">Featured instructors</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {instructors.map((instructor) => (
                <Card key={instructor.id}>
                  <CardContent className="p-5 text-center">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
                    />
                    <p className="font-semibold">{instructor.name}</p>
                    <p className="mb-2 text-sm text-primary">{instructor.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {instructor.courses} courses · {instructor.students.toLocaleString()} students
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/pricing">View creator pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForCreators;
