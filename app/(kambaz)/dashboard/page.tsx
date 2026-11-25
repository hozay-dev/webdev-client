"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";
export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const { currentUser } = useAccountContext();
  // signed out shows everything, signed in only shows my courses unless the toggle is on
  useEffect(() => {
    const load = async () => {
      if (currentUser && !showAllCourses) {
        setCourses(await client.findMyCourses());
      } else {
        setCourses(await client.fetchAllCourses());
      }
      if (currentUser) {
        setEnrollments(
          await enrollmentsClient.findEnrollmentsForUser(currentUser._id),
        );
      }
    };
    load();
  }, [currentUser, showAllCourses]);
  const onAddCourse = async () => {
    if (!currentUser) return;
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    setEnrollments(
      await enrollmentsClient.findEnrollmentsForUser(currentUser._id),
    );
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };
  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };
  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    setEnrollments(
      await enrollmentsClient.enrollIntoCourse(currentUser._id, courseId),
    );
  };
  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    setEnrollments(
      await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId),
    );
    if (!showAllCourses) {
      setCourses(await client.findMyCourses());
    }
  };
  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      {/* startDate is already YYYY-MM-DD so no converting like in the lab */}
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolled={enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser?._id &&
                enrollment.course === c._id,
            )}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onEnroll={() => onEnroll(c._id)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
