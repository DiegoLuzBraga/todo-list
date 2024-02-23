import { Task } from "../hooks/toDoController";

const listKey = 'toDoList';

export const setListToStorage = (list: Array<Task>) => {
    localStorage.setItem(listKey, JSON.stringify(list));
}

export const getListFromStorage = (): Array<Task> => {
    if (typeof window !== 'undefined') {
        const rawList = localStorage.getItem(listKey);
        if (rawList) {
            return JSON.parse(rawList) as Array<Task>
        }
    }
    return [];
}