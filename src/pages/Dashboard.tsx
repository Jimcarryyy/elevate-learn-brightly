import { Link } from "react-router-dom";
import { BookOpen, Clock, Award, TrendingUp, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { usePageTitle } from "@/hooks/usePageTitle";
import { toast } from "sonner";

const enrolledCourses = [
  {
    id: "1",
    slug: "react-development-bootcamp",
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 65,
    nextLesson: "React Hooks Deep Dive",
    totalLessons: 38,
    completedLessons: 25,
    lastAccessed: "2 hours ago",
  },
  {
    id: "2",
    slug: "data-science-with-python",
    title: "Data Science with Python",
    instructor: "Dr. Michael Chen",
    progress: 23,
    nextLesson: "Pandas for Data Analysis",
    totalLessons: 32,
    completedLessons: 7,
    lastAccessed: "1 day ago",
  },
  {
    id: "3",
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    instructor: "Emily Rodriguez",
    progress: 89,
    nextLesson: "Final Project Review",
    totalLessons: 26,
    completedLessons: 23,
    lastAccessed: "3 hours ago",
  },
];

const achievements = [
  { name: "First module complete", earned: true },
  { name: "7-day streak", earned: true },
  { name: "Capstone submitted", earned: false },
  { name: "Course published", earned: false },
];

const Dashboard = () => {
  usePageTitle(
    "Dashboard preview — Elevate",
    "Preview the Elevate student dashboard with enrolled courses and progress tracking."
  );

  const handleContinue = (title: string) => {
    toast.info("Preview mode", {
      description: `Lesson playback for "${title}" is not enabled in this demo.`,
    });
  };

  return (
    <div className="min-h-screen animate-page-enter">
      <Navigation />

      <main className="pt-16">
        <section className="page-header section-padding pb-8">
          <div className="container-wide">
            <p className="mb-2 text-sm font-medium text-primary">Dashboard preview</p>
            <h1 className="mb-2 font-display text-3xl font-semibold lg:text-4xl">
              Welcome back, Alex
            </h1>
            <p className="text-muted-foreground">
              Sample learner view — pick up where you left off.
            </p>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-wide">
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: BookOpen, label: "Enrolled courses", value: "3" },
                { icon: Award, label: "Certificates", value: "1" },
                { icon: Clock, label: "Hours this month", value: "18h" },
                { icon: TrendingUp, label: "Day streak", value: "12" },
              ].map((stat) => (
                <Card key={stat.label}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-xl font-semibold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-5 lg:col-span-2">
                <h2 className="font-display text-xl font-semibold">Continue learning</h2>
                {enrolledCourses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-5">
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                          <Link
                            to={`/course/${course.slug}`}
                            className="font-semibold text-foreground hover:text-primary"
                          >
                            {course.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                        </div>
                        <span className="shrink-0 text-xs text-muted-foreground">
                          {course.lastAccessed}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="mb-1.5 flex justify-between text-sm text-muted-foreground">
                          <span>
                            {course.completedLessons}/{course.totalLessons} lessons
                          </span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">Next lesson</p>
                          <p className="text-sm font-medium">{course.nextLesson}</p>
                        </div>
                        <Button size="sm" onClick={() => handleContinue(course.title)}>
                          <Play className="h-3.5 w-3.5" />
                          Continue
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="mb-3 font-semibold">Learning streak</h3>
                    <p className="font-display text-3xl font-semibold text-primary">12 days</p>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Three more days unlocks the Consistent Learner badge.
                    </p>
                    <Progress value={80} className="h-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <h3 className="mb-4 font-semibold">Achievements</h3>
                    <ul className="space-y-3">
                      {achievements.map((item) => (
                        <li key={item.name} className="flex items-center gap-3 text-sm">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              item.earned ? "bg-primary" : "bg-muted-foreground/30"
                            }`}
                          />
                          <span
                            className={
                              item.earned ? "text-foreground" : "text-muted-foreground"
                            }
                          >
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/courses">Browse new courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
