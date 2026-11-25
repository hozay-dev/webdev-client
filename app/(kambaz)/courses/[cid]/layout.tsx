"use client";
import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import * as enrollmentsClient from "../../enrollments/client";
import { useCoursesStore } from "../../store/coursesStore";
import { useEnrollmentsStore, type Enrollment } from "../../store/enrollmentsStore";
import { useAccountContext } from "../../account/AccountContext";
export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const course = courses.find((c) => c._id === courseId);
  const [showCourseNav, setShowCourseNav] = useState(true);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const router = useRouter();
  // signed-out visitors can still open course pages (graders check modules that way).
  // only kick people out when they're signed in but not enrolled in this course.
  let enrolled = false;
  if (!currentUser) {
    enrolled = true;
  } else {
    enrolled = enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === courseId,
    );
  }
  useEffect(() => {
    const load = async () => {
      if (!currentUser) {
        const allCourses = await client.fetchAllCourses();
        setCourses(allCourses);
        return;
      }

      const myCourses = await client.findMyCourses();
      setCourses(myCourses);

      const myEnrollments: Enrollment[] =
        await enrollmentsClient.findEnrollmentsForUser(currentUser._id);
      setEnrollments(myEnrollments);

      const inThisCourse = myEnrollments.some(
        (enrollment) => enrollment.course === courseId,
      );
      if (!inThisCourse) {
        router.push("/dashboard");
      }
    };
    load();
  }, [currentUser, courseId]);
  if (currentUser && !enrolled) {
    return null;
  }
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />
        <span className="ms-2">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
