import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Courses = typeof RESUME_DATA.courses;

interface CoursesItemProps {
  courses: Courses[number];
}

function CoursesItem({ courses }: CoursesItemProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-1">
        <h3 className="font-medium leading-snug">
          {courses.degree}
        </h3>
        <div className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]" aria-labelledby="courses">
          {courses.school}
        </div>
      </div>
      <div className="text-right tabular-nums text-sm text-muted-foreground">
        {courses.start} - {courses.end}
      </div>
    </div>
  );
}

interface CoursesProps {
  courses: Courses;
  className?: string;
}

/**
 * Courses section component
 * Displays a list of courses in chronological order
 */
export function Courses({ courses, className }: CoursesProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="courses-section">
        Courses
      </h2>
      <div className="space-y-4 print:space-y-2" role="feed" aria-labelledby="courses-section">
        {courses.map((item) => (
          <article key={`${item.school}-${item.start}`} role="article">
            <CoursesItem courses={item} />
          </article>
        ))}
      </div>
    </Section>
  );
} 