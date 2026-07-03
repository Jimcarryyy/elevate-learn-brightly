import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, Clock, Star, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCourseBySlug } from "@/data/courses";
import { getInstructorByName } from "@/data/instructors";
import { usePageTitle } from "@/hooks/usePageTitle";
import { toast } from "sonner";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;
  const instructor = course ? getInstructorByName(course.instructor) : undefined;

  usePageTitle(
    course ? `${course.title} — Elevate` : "Course not found — Elevate",
    course?.description
  );

  if (!course) {
    return (
      <div className="min-h-screen animate-page-enter">
        <Navigation />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-16">
          <h1 className="mb-2 font-display text-2xl font-semibold">Course not found</h1>
          <p className="mb-6 text-muted-foreground">This course may have been moved or removed.</p>
          <Button asChild>
            <Link to="/courses">Back to courses</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleEnroll = () => {
    toast.info("Preview mode", {
      description: "Enrollment is not enabled in this demo. Sign up to explore the full experience.",
    });
  };

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-10">
          <div className="container-narrow">
            <Link
              to="/courses"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              All courses
            </Link>

            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                  {course.badge && <Badge>{course.badge}</Badge>}
                </div>

                <h1 className="mb-4 font-display text-3xl font-semibold text-foreground lg:text-4xl">
                  {course.title}
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">{course.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {course.rating} rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students.toLocaleString()} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Card className="sticky top-24 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="aspect-video w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <p className="mb-4 font-display text-3xl font-semibold">${course.price}</p>
                    <Button className="mb-3 w-full" size="lg" onClick={handleEnroll}>
                      Enroll now
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/dashboard">View dashboard preview</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-narrow grid gap-12 lg:grid-cols-5">
            <div className="space-y-10 lg:col-span-3">
              <div>
                <h2 className="mb-4 font-display text-xl font-semibold">What you&apos;ll learn</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {course.learningOutcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-display text-xl font-semibold">Syllabus</h2>
                <div className="space-y-3">
                  {course.syllabus.map((section, index) => (
                    <div
                      key={section.title}
                      className="flex items-center justify-between rounded-md border border-border px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground">{section.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {section.lessons} lessons
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="mb-4 font-display text-xl font-semibold">Instructor</h2>
              <Card>
                <CardContent className="p-5">
                  {instructor && (
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="mb-4 h-16 w-16 rounded-full object-cover"
                    />
                  )}
                  <p className="font-semibold text-foreground">{course.instructor}</p>
                  {instructor && (
                    <>
                      <p className="mb-3 text-sm text-primary">{instructor.title}</p>
                      <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                      <Separator className="my-4" />
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{instructor.courses} courses</span>
                        <span>{instructor.students.toLocaleString()} students</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
