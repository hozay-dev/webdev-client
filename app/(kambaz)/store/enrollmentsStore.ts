"use client";
import { create } from "zustand";
export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};
type EnrollmentsStore = {
  enrollments: Enrollment[];
  setEnrollments: (enrollments: Enrollment[]) => void;
};
export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: [],
  setEnrollments: (enrollments) => set({ enrollments }),
}));
