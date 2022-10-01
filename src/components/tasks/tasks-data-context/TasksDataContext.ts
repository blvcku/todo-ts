import React from "react";
import { TasksDataContextInterface, defaultState } from "../Tasks.types";

const TasksDataContext = React.createContext<TasksDataContextInterface>(defaultState);

export default TasksDataContext;
