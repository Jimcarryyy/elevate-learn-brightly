import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { statsDisplay } from "@/data/stats";
import { images } from "@/data/images";
import { usePageTitle } from "@/hooks/usePageTitle";

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Co-founder",
    image: images.people.alexThompson,
    bio: "Former engineering lead at an ed-tech startup. Started Elevate to make structured online learning accessible outside traditional bootcamps.",
  },
  {
    name: "Maria Rodriguez",
    role: "Head of Product",
    image: images.people.mariaRodriguez,
    bio: "Product designer turned PM. Focuses on learner progress UX and instructor publishing workflows.",
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    image: images.people.davidChen,
    bio: "Full-stack engineer who built Elevate's video pipeline, progress tracking, and creator analytics.",
  },
];

const values = [
  {
    title: "Clarity over volume",
    description:
      "We curate structured paths instead of dumping thousands of unstructured videos. Quality syllabus design matters.",
  },
  {
    title: "Progress you can trust",
    description:
      "Learners should always know where they stand. Every course maps to measurable outcomes and completion criteria.",
  },
  {
    title: "Creators earn fairly",
    description:
      "Instructors keep 70% of revenue. We invest in tools that help them teach better, not just sell more.",
  },
];

const About = () => {
  usePageTitle(
    "About — Elevate",
    "Elevate makes structured online learning accessible for developers and designers."
  );

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-12 text-center">
          <div className="container-narrow">
            <Reveal>
              <h1 className="mb-4 font-display text-4xl font-semibold lg:text-5xl">
                About <span className="gradient-text">Elevate</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                We build software for people who learn by doing—structured courses, honest progress
                tracking, and fair economics for creators.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-narrow">
            <Reveal>
              <Card className="card-elevated">
                <CardContent className="p-8 lg:p-10">
                  <h2 className="mb-4 font-display text-2xl font-semibold">Our story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Elevate started in 2020 when our founders noticed a gap: developers and
                      designers were drowning in unstructured content but starving for clear learning
                      paths with real projects.
                    </p>
                    <p>
                      We built a platform where every course has a syllabus, every lesson has a
                      purpose, and every instructor can see where students struggle. Today,{" "}
                      {statsDisplay.learners} learners across {statsDisplay.countries} countries use
                      Elevate to build skills they apply at work.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="section-padding bg-muted/40">
          <div className="container-wide">
            <Reveal>
              <h2 className="mb-10 text-center font-display text-2xl font-semibold">
                Impact by the numbers
              </h2>
            </Reveal>
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: statsDisplay.learners, label: "Active learners" },
                { value: statsDisplay.courses, label: "Published courses" },
                { value: statsDisplay.instructors, label: "Instructors" },
                { value: statsDisplay.completionRate, label: "Avg. completion rate" },
              ].map((stat, index) => (
                <Reveal key={stat.label} delay={index * 80}>
                  <div className="card-elevated rounded-xl bg-card p-6 text-center">
                    <dt className="font-display text-3xl font-semibold gradient-text">{stat.value}</dt>
                    <dd className="text-sm text-muted-foreground">{stat.label}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <Reveal>
              <h2 className="mb-10 text-center font-display text-2xl font-semibold">Our values</h2>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 100}>
                  <Card className="card-elevated h-full">
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-border bg-muted/40">
          <div className="container-wide">
            <Reveal>
              <h2 className="mb-10 text-center font-display text-2xl font-semibold">Team</h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 100}>
                  <Card className="card-elevated h-full overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-primary/15"
                      />
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="mb-3 text-sm text-primary">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-12 text-center">
                <Button asChild className="bg-purple-gradient shadow-purple">
                  <Link to="/contact">Contact us</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
