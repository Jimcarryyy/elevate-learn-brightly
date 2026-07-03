export const platformStats = {
  learners: 12400,
  courses: 340,
  instructors: 180,
  countries: 42,
  completionRate: 87,
} as const;

export function formatStat(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1).replace(/\.0$/, '')}K`;
  }
  return value.toLocaleString();
}

export const statsDisplay = {
  learners: formatStat(platformStats.learners),
  courses: platformStats.courses.toLocaleString(),
  instructors: platformStats.instructors.toLocaleString(),
  countries: `${platformStats.countries}`,
  completionRate: `${platformStats.completionRate}%`,
} as const;
