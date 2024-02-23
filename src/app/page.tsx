"use client";

import { CreateContainer } from '@/core/components/createContainer';
import { MetricsContainer } from '@/core/components/metricsContainer';
import { TasksContainer } from '@/core/components/tasksContainer';
import { TodoContextProvider } from '@/core/hooks/toDoController';
import React from 'react';

export default function Home() {
	return (
		<main className='flex flex-col text-center p-[16px] items-center'>
			<h1 className='text-black font-bold uppercase'>Lista de Tarefas</h1>
			<TodoContextProvider>
				<div className='min-w-[800px]'>
					<MetricsContainer />
					<CreateContainer />
					<TasksContainer />
				</div>
			</TodoContextProvider>
		</main>
	);
}
