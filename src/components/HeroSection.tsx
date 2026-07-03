import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { statsDisplay } from "@/data/stats";
import { images } from "@/data/images";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden section-padding pt-28 lg:pt-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Online learning platform
            </p>
            <h1 className="mb-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.25rem]">
              Courses built for people who{" "}
              <span className="gradient-text">ship software</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Structured paths in development and design. Complete React Foundations in 6 weeks,
              track progress lesson by lesson, and learn from instructors who teach what they build.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="bg-purple-gradient shadow-purple transition-all duration-300 hover:shadow-purple-lg">
                <Link to="/courses">
                  Browse courses
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 transition-all duration-300 hover:border-primary/50 hover:bg-accent">
                <Link to="/for-creators">Teach on Elevate</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-primary/15 pt-8">
              <div>
                <dt className="font-display text-2xl font-semibold gradient-text">
                  {statsDisplay.learners}
                </dt>
                <dd className="text-sm text-muted-foreground">Learners</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold gradient-text">
                  {statsDisplay.courses}
                </dt>
                <dd className="text-sm text-muted-foreground">Courses</dd>
              </div>
              <div>
                <dt className="font-display text-2xl font-semibold gradient-text">
                  {statsDisplay.instructors}
                </dt>
                <dd className="text-sm text-muted-foreground">Instructors</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={150} direction="left">
            <div className="card-elevated purple-glow overflow-hidden lg:ml-4">
              <img
                src={images.hero}
                alt="Students collaborating during an online workshop"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="border-t border-primary/10 bg-gradient-to-r from-violet-50/80 to-fuchsia-50/80 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">React Development Bootcamp</p>
                    <p className="text-sm text-muted-foreground">Lesson 18 of 38 · Hooks deep dive</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">65% complete</p>
                    <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-primary/15">
                      <div className="h-full w-[65%] rounded-full bg-purple-gradient transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
