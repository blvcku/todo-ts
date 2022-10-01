import React, { useState, useEffect } from 'react';
import { defaultState, TasksDataProviderProps, TaskDataType } from '../Tasks.types';
import TasksDataContext from './TasksDataContext';

const TasksDataProvider:React.FC<TasksDataProviderProps> = ({children}) => {

    const [data, setData] = useState<Array<TaskDataType>>(defaultState.data);

    useEffect(() => {
        if(!data.length) return;
        localStorage.setItem('tasks', JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        const tasksJSON = localStorage.getItem('tasks');
        if(!tasksJSON) return;
        const tasks = JSON.parse(tasksJSON);
        setData(tasks);
    }, []);

    const value = {
        data,
        setData
    }

    return(
        <TasksDataContext.Provider value={value}>
            {children}
        </TasksDataContext.Provider>
    )
}

export default TasksDataProvider;