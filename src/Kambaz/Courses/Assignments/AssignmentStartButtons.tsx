import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";

export default function AssignmentControlButtons() {
    return (
        <div className="float-start">
            <BsGripVertical className="me-2 fs-3"/>
            <MdOutlineAssignment color="green"/> 
        </div>
    );
}