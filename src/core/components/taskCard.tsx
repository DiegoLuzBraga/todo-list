import { FC, useEffect } from "react";
import { Task } from "../hooks/toDoController";

interface TaskCardProps {
    task: Task;
    completeTask: () => void;
    hideElement: () => void;
}

export const TaskCard: FC<TaskCardProps> = ({ task, completeTask, hideElement }) => {
    useEffect(() => {
        if (task.isCompleted) {
            setTimeout(() => hideElement(), 3000);
        }

    }, [task.isCompleted]);

    return (
        <div className={`${task.hidden ? 'hidden' : 'block'} min-h-[60px] flex flex-row justify-between items-center p-[8px] rounded-md border mt-[16px]`}>
            <p>{task.name}</p>
            {!task.isCompleted && <button
                className="bg-green-600 text-white rounded-md font-semibold p-[8px]"
                onClick={completeTask}>
                Completar
            </button>}
        </div>
    );
}