import { PrismaClient } from "@prisma/client";
import sampleCourses from "./sample-courses.json";

const prisma = new PrismaClient();

async function main() {
    for (const courseData of sampleCourses) {
        const { tags, modules, ...course } = courseData;

        const createdCourse = await prisma.course.create({
            data: {
                ...course,
                status: 'PUBLISHED',
                tags: {
                    connectOrCreate: tags.map((name: string) => ({
                        where: { name },
                        create: { name },
                    })),
                },
                modules: {
                    create: modules.map((module: any, index) => ({
                        title: module.title,
                        description: module.description,
                        order: index + 1,
                        lessons: {
                            create: module.lessons.map((lesson: any, lessonIndex: number) => ({
                                title: lesson.title,
                                description: lesson.description,
                                videoId: lesson.videoId,
                                durationInMs: lesson.durationInMs,
                                order: lessonIndex + 1,
                            })),
                        },
                    })),
                },
            },
        });

        console.log(`Created course with ID: ${createdCourse.id}`);
        }
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});     