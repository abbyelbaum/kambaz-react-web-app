import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user =  await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
      onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button id="wd-signin-btn"
            onClick={signin}
            className="btn btn-primary w-100 mb-2">
            Sign in </Button><br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div> );}