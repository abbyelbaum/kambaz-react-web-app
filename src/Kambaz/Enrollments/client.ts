import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/users`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const enrollInCourse = async (courseId: string) => {
  await axiosWithCredentials.post(ENROLLMENTS_API, { courseId });
};

export const unenrollFromCourse = async (courseId: string) => {
  await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${courseId}`);
};

export const fetchUserEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/enrollments`);
  return data;
};
