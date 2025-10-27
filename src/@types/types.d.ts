type Course = import("@/prisma/client").Course;
type CourseTag = import("@/prisma/client").CourseTag;
type CourseModule = import("@/prisma/client").CourseModule;

type CourseWithTagsAndModules = {
    course: Course & {
        tags: CourseTag[];
        modules: CourseModule[];
    };
};