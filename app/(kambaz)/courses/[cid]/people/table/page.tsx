"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as client from "../client";
import * as enrollmentsClient from "../../../../enrollments/client";
import {
  emptyUser,
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const { currentUser, setCurrentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>(emptyUser);
  useEffect(() => {
    const load = async () => {
      setUsers(await client.findUsersForCourse(courseId));
    };
    load();
  }, [courseId]);
  const onAddUser = async () => {
    const newUser = await client.createUser(user);
    await enrollmentsClient.enrollIntoCourse(newUser._id, courseId);
    setUsers([...users, newUser]);
    setUser(emptyUser);
  };
  const onUpdateUser = async () => {
    const saved = await client.updateUser(user);
    setUsers(users.map((u) => (u._id === saved._id ? saved : u)));
    if (saved._id === currentUser?._id) {
      setCurrentUser(saved);
    }
    setUser(emptyUser);
  };
  const onDeleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    setUsers(users.filter((u) => u._id !== userId));
  };
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {isFaculty && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <input
            id="wd-people-first-name"
            placeholder="First name"
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            id="wd-people-last-name"
            placeholder="Last name"
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <select
            id="wd-people-role"
            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">TA</option>
            <option value="FACULTY">Faculty</option>
          </select>
          {user._id ? (
            <button
              type="button"
              id="wd-people-update-click"
              onClick={onUpdateUser}
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
            >
              Update Person
            </button>
          ) : (
            <button
              type="button"
              id="wd-people-add-click"
              onClick={onAddUser}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Add Person
            </button>
          )}
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2 text-nowrap">
                {isFaculty && (
                  <>
                    <button
                      type="button"
                      onClick={() => setUser(user)}
                      className="me-2 rounded bg-neutral-200 px-2 py-0.5 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteUser(user._id)}
                      className="rounded bg-neutral-200 px-2 py-0.5 text-sm"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
