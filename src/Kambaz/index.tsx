import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRotue from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse } from "./reducer";
import Session from "./Account/Session";
import * as userClient from "./Account/client";


export default function Kambaz() {
    const dispatch = useDispatch();
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
      try {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchCourses();
    }, [currentUser]);  
    const [course, setCourse] = useState<any>({
      _id: "0", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      image: "public/images/reactjs.webp", description: "New Description"
    });
    const addNewCourse = async () => {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
      
      if (currentUser) {
          dispatch(enrollCourse({ userId: currentUser._id, courseId: newCourse._id }));
      }
  };
    const deleteCourse = (courseId: string) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if(c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    };  
    return (
      <Session>
        <div id="wd-kambaz">
            <KambazNavigation/>
            <div className="wd-main-content-offset p3">
                <h1>Kambaz</h1>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={
                          <ProtectedRotue>
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} /> </ProtectedRotue>} />
                        <Route path="Courses/:cid/*" element={<ProtectedRotue><Courses courses={courses} /> </ProtectedRotue>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
      </Session>
    );
}