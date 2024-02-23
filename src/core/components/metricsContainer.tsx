import { useToDoContext } from "../hooks/toDoController"
import { ToDoMetrics } from "./toDoMetrics"

export const MetricsContainer = () => {
    const { allTasks, numberOfTasksCompleted, numberOfTasksPending } = useToDoContext();

    return (
        <div className='flex justify-center py-[16px]'>
            <ToDoMetrics label='Total de tarefas' data={allTasks} />
            <ToDoMetrics
                label='Concluídas'
                data={`${numberOfTasksCompleted}%`}
                dataClass={numberOfTasksCompleted >= 50 ? "text-green-500" : "text-red-500"}
            />
            <ToDoMetrics
                label='Pendentes'
                data={`${numberOfTasksPending}%`}
                dataClass={numberOfTasksPending >= 50 ? "text-red-500" : "text-green-500"}
            />
        </div>
    )
} 