import { FC } from "react";

interface ToDoMetricsProps {
    label: string;
    data: string;
    dataClass?: string;
}

export const ToDoMetrics: FC<ToDoMetricsProps> = ({ label, data, dataClass }) => {
    return (
        <div className="flex flex-col mr-[32px]">
            <p className="text-gray-400 text-lg">{label}</p>
            <p className={`${dataClass} text-2xl font-bold text-start`}>{data}</p>
        </div>
    );
}