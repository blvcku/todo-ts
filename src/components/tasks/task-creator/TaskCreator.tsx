import React, { useState } from "react";
import { TaskCreatorContainer } from './TaskCreator.styles';
import useTasksData from "../tasks-data-context/useTasksData";

const TaskCreator:React.FC = () => {

    const { setData } = useTasksData();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!title || !description) return;
        setData(prev => [...prev, {title: title, description: description}]);
        setTitle('');
        setDescription('');
    }

    const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.currentTarget.value);
    }

    const handleChangeDescription = (e: React.FormEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setDescription(e.currentTarget.value);
    }

    return(
        <TaskCreatorContainer onSubmit={handleSubmit}>
            <h2>Create new task</h2>
            <input value={title} onChange={handleChangeTitle} type='text' placeholder='Task title' name='task-title' />
            <textarea value={description} onChange={handleChangeDescription} placeholder='Task description' name='task-description' />
            <button type='submit'>
                Create task
            </button>
        </TaskCreatorContainer>
    )
}

export default TaskCreator;