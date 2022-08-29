import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import styles from './Header.module.css'

import todoLogo from '../assets/rocket.svg'

interface TaskProps {
  onNewTask: (taskDescription: string) => void;
}

export function Header({ onNewTask }: TaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onNewTask(newTask)
    console.log(newTask);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Todo" />
      <strong>to<span>do</span></strong>

      <form  onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input
          type="text"
          name='task'
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          // required
        />

        <button type="submit" disabled={false}>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}