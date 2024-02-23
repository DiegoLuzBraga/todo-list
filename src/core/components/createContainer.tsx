import { useState } from "react";
import { useToDoContext } from "../hooks/toDoController"

export const CreateContainer = () => {
    const { addTask } = useToDoContext();
    const [newTask, setNewTask] = useState("");

    return (
        <div className="flex flex-row justify-center gap-4">
            <input
                className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Escreva uma nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="px-8 bg-indigo-600 text-white rounded-md border"
                onClick={() => {
                    if (newTask.length) {
                        addTask(newTask);
                        setNewTask("");
                    }
                }}>
                Adicionar
            </button>
        </div>
    );
}