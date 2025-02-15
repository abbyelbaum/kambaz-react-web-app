import { ListGroup } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaInbox } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
    const {pathname} = useLocation();
    const links = [
        {label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard},
        {label: "Courses", path: "/Kambaz/Dashboard", icon: LiaBookSolid},
        {label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline},
        {label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox},
        {label: "Labs", path: "/Labs", icon: LiaCogSolid},
    ]
    return (
        <ListGroup id="wd-kambaz-navigation" style={{width: 120 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <ListGroup.Item href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" action className="list-group-item bg-black border-0 text-center">
                <img src="/images/northeastern.svg"/></ListGroup.Item>

            <ListGroup.Item as={Link} to="/Kambaz/Account" id="wd-account-link" className={`text-center border-0 bg-black ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`}/><br/>Account</ListGroup.Item>

            {links.map((link) => (
                <ListGroup.Item key={link.path} as={Link} to={link.path} className={`bg-black text-center border-0
                    ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                        {link.icon({ className: "fs-1 text-danger"})}
                        <br/>
                        {link.label}
                    </ListGroup.Item>
            ))}
        </ListGroup>
    );
}