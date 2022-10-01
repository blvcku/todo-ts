import React from 'react';
import { TasksListContainer } from './TasksList.styles';
import useTasksData from '../tasks-data-context/useTasksData';
import Task from './task/Task';

const TasksList:React.FC = () => {

    const { data } = useTasksData();

    return(
        <TasksListContainer>
            {data.map(({title, description}, index) => (
                <Task key={index} index={index} title={title} description={description} />
            ))}
        </TasksListContainer>
    )
}

export default TasksList;