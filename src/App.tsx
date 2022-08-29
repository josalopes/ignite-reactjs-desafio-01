import { useState } from 'react';

import './global.css';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

export interface ITask {
  id: string;
  description: string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(taskDescription: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        description: taskDescription,
        isFinished: false
      }
    ])
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function finishTask(taskToFinish: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskToFinish) {
        return {
          ...task,
          isFinished: !task.isFinished,
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onNewTask={addTask}/>
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onFinish={finishTask}
      />
    </>
  )
}

export default App
