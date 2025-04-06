import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const {pathname} = useLocation();
  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link: any) => (
                <Link to={`/Kambaz/Account/${link}`} key={link} className={`list-group-item text-danger border border-0 ${pathname.includes("Profile") ? "active text-black" : "text-danger"}`} > {link} </Link>
            ))}
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item text-danger border border-0 ${pathname.includes("Users") ? "active text-black" : "text-danger"}` }> Users </Link> )}
    </div>
);}
