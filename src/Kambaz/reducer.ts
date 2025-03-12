import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrolledCourses: enrollments, 
  courses: courses,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      state.enrolledCourses.push({ _id: uuidv4(), user: userId, course: courseId });
    },
    unenrollCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      state.enrolledCourses = state.enrolledCourses.filter(
        (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
      );
    },
  },  
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
