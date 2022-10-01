import React from 'react';
import { TaskDataType } from '../../Tasks.types';
import { TaskContainer } from './Task.styles';
import useTasksData from '../../tasks-data-context/useTasksData';

const Task:React.FC<TaskDataType> = ({title, description, index}) => {

    const { setData, data } = useTasksData();

    const handleDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!index && index !== 0) return;
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    }

    return(
        <TaskContainer>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={handleDeleteTask} type='button'>
                    Delete
                </button>
            </div>
        </TaskContainer>
    )
}

export default Task;