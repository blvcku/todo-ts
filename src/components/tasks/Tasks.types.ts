import { ReactNode, SetStateAction, Dispatch } from "react";

export interface TasksDataContextInterface{
    data: Array<TaskDataType>;
    setData: Dispatch<SetStateAction<Array<TaskDataType>>>;
}

export type TasksDataProviderProps = {
    children: ReactNode;
}

export type TaskDataType = {
    title: string;
    description: string;
    index?: number;
}

export const defaultState = {
    data: [],
    setData: () => null
}