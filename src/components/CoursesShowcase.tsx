import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { courseCategories, getFeaturedCourses } from "@/data/courses";
import { cn } from "@/lib/utils";

const CoursesShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const featuredCourses = getFeaturedCourses();

  const filters = courseCategories.filter((c) => c !== "DevOps");

  const filteredCourses =
    activeFilter === "All"
      ? featuredCourses
      : featuredCourses.filter((course) => course.category === activeFilter);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-3 font-display text-3xl font-semibold lg:text-4xl">
                Featured <span className="gradient-text">courses</span>
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Hand-picked courses with high completion rates and practical projects.
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0 border-primary/30 transition-all duration-300 hover:border-primary hover:bg-accent">
              <Link to="/courses">
                View all courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "bg-purple-gradient text-white shadow-purple"
                    : "bg-card text-secondary-foreground hover:border-primary/30 hover:shadow-sm border border-border"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCourses.map((course, index) => (
            <Reveal key={course.id} delay={index * 80}>
              <CourseCard {...course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesShowcase;
