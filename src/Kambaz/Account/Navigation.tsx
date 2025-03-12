import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AccountNavigation() {
  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link: any) => (
                <Link to={`/Kambaz/Account/${link}`} key={link} className="list-group-item text-danger border border-0"> {link} </Link>
            ))}
    </div>
);}
