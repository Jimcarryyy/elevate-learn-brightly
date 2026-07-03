import { useState } from "react";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { courseCategories, courses } from "@/data/courses";
import { usePageTitle } from "@/hooks/usePageTitle";
import { cn } from "@/lib/utils";

const Courses = () => {
  usePageTitle(
    "Courses — Elevate",
    "Browse structured courses in development, design, data science, and more."
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = courses
    .filter((course) => selectedCategory === "All" || course.category === selectedCategory)
    .filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-12">
          <div className="container-wide text-center">
            <Reveal>
              <h1 className="mb-4 font-display text-4xl font-semibold text-foreground lg:text-5xl">
                Course <span className="gradient-text">catalog</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                {courses.length} courses across development, design, and data. Filter by topic or
                search by instructor.
              </p>

              <div className="relative mx-auto max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses or instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-primary/20 pl-10 transition-all duration-300 focus:border-primary/40"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {courseCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>

            <p className="mb-8 text-sm text-muted-foreground">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>

            {filteredCourses.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses.map((course, index) => (
                  <Reveal key={course.id} delay={index * 50}>
                    <CourseCard {...course} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card py-16 text-center">
                <h3 className="mb-2 text-lg font-semibold text-foreground">No courses found</h3>
                <p className="text-muted-foreground">Try a different search term or category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
