
import { TbClipboardText } from 'react-icons/tb';

import styles from './Tasks.module.css';

import { Task } from './Task';
import { ITask } from '../App';


interface Props {
  tasks: ITask[];
  onDelete: (id: string) => void;
  onFinish: (id: string) => void;
}

export function Tasks({ tasks, onDelete, onFinish }: Props) {

  const tasksCount = tasks.length;
  const finishedTasks = tasks.filter(task => task.isFinished).length;

  function handleDeleteTask(tarefa: string) {
    onDelete(tarefa);
  }

  function handleUpdateTask(tarefa: string) {
    onFinish(tarefa);
  }

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{finishedTasks} de {tasksCount}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map(task => {
          return (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              isFinished={task.isFinished}
              onDelete={onDelete}
              onFinish={onFinish}
            />
          )
        })}

        {
          tasks.length <= 0 && (
            <section className={styles.empty}>
              <TbClipboardText size={50} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>

          )
        }
      </div>
    </section>
  )
}