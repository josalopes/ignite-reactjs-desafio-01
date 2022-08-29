import { Trash } from 'phosphor-react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './Task.module.css';

interface TaskProps {
  id: string,
  description: string;
  isFinished: boolean;
  onDelete: (id: string) => void;
  onFinish: (id: string) => void;
}

export function Task({ id, description, isFinished, onDelete, onFinish }: TaskProps) {
  const isCompleted = isFinished;
  console.log(isCompleted)

  function deleteTask() {
    onDelete(id);
  }

  function finishTask() {
    onFinish(id);
  }

  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={finishTask}
      >
        {isFinished ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={isFinished ? styles.textFinished : ""}>{description}</p>

      <button onClick={deleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}