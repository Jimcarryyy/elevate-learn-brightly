import { BookOpen, BarChart3, Video } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: BookOpen,
    title: "Structured learning paths",
    description:
      "Each course follows a clear syllabus—from fundamentals to capstone projects—so you always know what to study next.",
  },
  {
    icon: BarChart3,
    title: "Progress you can see",
    description:
      "Track lessons completed, time spent, and streaks. Resume exactly where you left off on any device.",
  },
  {
    icon: Video,
    title: "Tools for creators",
    description:
      "Instructors get video hosting, analytics, and promotion tools. Publish once and reach students in 40+ countries.",
  },
];

const FeatureBlocks = () => {
  return (
    <section className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container-wide relative">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <h2 className="mb-4 font-display text-3xl font-semibold lg:text-4xl">
              Built for <span className="gradient-text">focused learning</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Elevate is designed around how people actually learn online—not endless video libraries
              with no direction.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 100}>
              <div className="card-elevated group h-full p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-purple-gradient text-white shadow-purple transition-transform duration-300 group-hover:scale-105">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
