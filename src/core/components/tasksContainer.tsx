import { useToDoContext } from "../hooks/toDoController"
import { TaskCard } from "./taskCard";

export const TasksContainer = () => {
    const { toDoList, completeTask, hideElement } = useToDoContext();

    return toDoList.map((item, index) =>
        <TaskCard
            task={item}
            key={`${item.name}-${index}`}
            completeTask={() => completeTask(index)}
            hideElement={() => hideElement(index)}
        />
    );
}