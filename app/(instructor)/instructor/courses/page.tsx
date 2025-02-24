import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";

const CoursesPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const courses = await db.course.findMany({
    where: {
      instructorId: userId,
    },
    orderBy: {
      createdAt: "desc",
  },
  });

  return (
    <div className="px-6 py-4">
      <Link href="/instructor/create-course">
        <Button>Create New Course</Button>
      </Link>
      <div>
        {courses.map((course) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/instructor/courses/${course.id}/basic`}>{course.title}</Link>
        ))}
      </div>
    </div>
    )
  }

export default CoursesPage;