import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import ProtectedFacultyRoute from "../../ProtectedFacultyRoute";

export default function AssignmentControlButtons({assignmentId, deleteAssignment}: 
    {assignmentId: string
        deleteAssignment: (assignmentId: string) => void;
    }) {
    return (
        <div className="float-end">
            <GreenCheckmark/>
            <IoEllipsisVertical className="fs-4"/>
            <ProtectedFacultyRoute>
            <FaTrash className="text-danger me-2 mb-1" onClick={() => {
    console.log({assignmentId});
    deleteAssignment(assignmentId);
}} />
            </ProtectedFacultyRoute>
        </div>
    );
}