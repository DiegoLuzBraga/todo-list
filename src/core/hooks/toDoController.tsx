"use client";
import { FC, createContext, useContext, useState, useMemo, useEffect } from 'react';
import { percentageCalc } from '../utils/percentage';
import { getListFromStorage, setListToStorage } from '../utils/localStorage';

export interface Task {
    name: string;
    isCompleted: boolean;
    hidden: boolean;
}

interface ToDoProps {
    toDoList: Array<Task>;
    allTasks: string;
    numberOfTasksCompleted: number;
    numberOfTasksPending: number;
    addTask: (newTask: string) => void;
    completeTask: (index: number) => void;
    hideElement: (index: number) => void;
}

const TodoContext = createContext<ToDoProps>({
    addTask: () => { },
    completeTask: () => { },
    hideElement: () => { },
    toDoList: [],
    allTasks: "",
    numberOfTasksCompleted: 0,
    numberOfTasksPending: 0
});

export const TodoContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
    const [toDoList, setToDoList] = useState<Array<Task>>(getListFromStorage());

    useEffect(() => setListToStorage(toDoList), [toDoList]);

    const addTask = (newTask: string) => {
        const newList = [...toDoList];

        newList.unshift({ name: newTask, isCompleted: false, hidden: false });

        setToDoList(newList);
    }

    const completeTask = (index: number) => {
        const list = [...toDoList];

        list[index].isCompleted = true;

        list.push(list.splice(index, 1)[0]);

        setToDoList(list);
    }

    const hideElement = (index: number) => {
        const list = [...toDoList];

        list[index].hidden = true;

        list.push(list.splice(index, 1)[0]);

        setToDoList(list);
    }

    const allTasks = useMemo(() => {
        return toDoList.length.toString();
    }, [toDoList]);

    const numberOfTasksCompleted = useMemo(() => {
        const completed = toDoList.reduce((number, tasks) => {
            if (tasks.isCompleted) {
                number = number + 1;
            }
            return number;
        }, 0);

        return percentageCalc(completed, toDoList.length);
    }, [toDoList]);

    const numberOfTasksPending = useMemo(() => {
        const pending = toDoList.reduce((number, tasks) => {
            if (!tasks.isCompleted) {
                number = number + 1;
            }
            return number;
        }, 0);

        return percentageCalc(pending, toDoList.length);
    }, [toDoList]);

    return <TodoContext.Provider value={{
        toDoList,
        allTasks,
        numberOfTasksCompleted,
        numberOfTasksPending,
        addTask,
        completeTask,
        hideElement,
    }} >
        {children}
    </TodoContext.Provider>
}

export const useToDoContext = () => useContext(TodoContext);