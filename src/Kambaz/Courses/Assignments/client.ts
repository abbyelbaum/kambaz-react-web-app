import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentails = axios.create({withCredentials: true});

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentails.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentails.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};