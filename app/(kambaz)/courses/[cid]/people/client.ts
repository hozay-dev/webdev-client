import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;
export const findUsersForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/users`);
  return data;
};
export const createUser = async (user: unknown) => {
  const { data } = await axios.post(USERS_API, user);
  return data;
};
export const updateUser = async (user: { _id: string }) => {
  const { data } = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return data;
};
export const deleteUser = async (userId: string) => {
  const { data } = await axios.delete(`${USERS_API}/${userId}`);
  return data;
};
