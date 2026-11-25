"use client";
import { create } from "zustand";
export type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  term: string;
  department: string;
  credits: number;
  description: string;
  image: string;
};
const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  // my courses.json has a term on every course so the draft needs one too
  term: "Fall 2023",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/reactjs.jpg",
};
type CoursesStore = {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
  addCourse: (course: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
}));
export { emptyCourse };
