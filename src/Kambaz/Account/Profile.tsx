import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin")
  };
  useEffect(() => {fetchProfile();}, []);
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
          <Form.Control defaultValue={profile.username} onChange={(e) => setProfile({...profile, username: e.target.value})} id="wd-username" className="mb-2"/>
          <Form.Control defaultValue={profile.password} onChange={(e) => setProfile({...profile, password: e.target.value})}
                id="wd-password" className="mb-2"/>
          <Form.Control defaultValue={profile.firstName} onChange={(e) => setProfile({...profile, firstname: e.target.value})} id="wd-firstname" className="mb-2"/>
          <Form.Control defaultValue={profile.lastName} onChange={(e) => setProfile({...profile, lastname: e.target.value})} id="wd-lastname" className="mb-2"/>
          <Form.Control defaultValue={profile.dob} onChange={(e) => setProfile({...profile, dob: e.target.value})} type="date" id="wd-dob" className="mb-2"/>
          <Form.Control defaultValue={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} type="email" id="wd-email" className="mb-2"/>
          <Form.Select onChange={(e) => setProfile({...profile, role: e.target.value})} id="wd-role">
            <option value="USER">User</option>       <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
          </Form.Select>
          <Button onClick={signout} className="w-100 mb-2">Sign out</Button>
      </div>)}
    </div>
);}
