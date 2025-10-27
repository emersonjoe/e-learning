import { CourseList } from "@/components/pages/courses/coures-list";
import { CourseTagsList } from "@/components/pages/courses/tags-list";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { Suspense } from "react";

type CoursesPageProps = {
  searchParams: Promise<{
    query: string;
    tags: string | string[];
  }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { query, tags } = await searchParams;

  const suspenseKey = JSON.stringify({ query, tags });
  return (
    <>
      <Suspense key={`tags-${suspenseKey}`} fallback={<Skeleton className="w-full h-[22px] min-h-[22px]" />}>
        <CourseTagsList />
      </Suspense>

      <Suspense key={`courses-${suspenseKey}`} fallback={<Skeleton className="flex-1" />}>
        <CourseList query={query} tags={tags} />
      </Suspense>
    </>
  );
}
