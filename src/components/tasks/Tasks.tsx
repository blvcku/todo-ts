import React from "react";
import { TasksContainer } from "./Tasks.styles";
import TasksDataProvider from './tasks-data-context/TasksDataProvider';
import TaskCreator from './task-creator/TaskCreator';
import TasksList from './tasks-list/TasksList';

const Tasks:React.FC = () => {
    return(
        <TasksDataProvider>
			<TasksContainer>
                <TaskCreator />
                <TasksList />
            </TasksContainer>
		</TasksDataProvider>
    )
}

export default Tasks;