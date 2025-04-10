// src/Kambaz/Courses/People.tsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./People/Table";
import * as client from "./client";

export default function CoursePeople() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchEnrolledUsers = async () => {
    console.log(cid);
    if (cid) {
      const users = await client.findUsersForCourse(cid);
      setUsers(users);
    }
  };

  useEffect(() => {
    fetchEnrolledUsers();
  }, [cid]);

  return (
    <div>
      <h3>People in Course</h3>
      <PeopleTable users={users} />
    </div>
  );
}
