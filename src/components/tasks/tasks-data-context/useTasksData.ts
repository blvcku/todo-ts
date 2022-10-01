import { useContext } from "react";
import TasksDataContext from "./TasksDataContext";

const useTasksData = () => {
    return useContext(TasksDataContext)
}

export default useTasksData;