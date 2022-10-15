import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import ITask from '../types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const selectTask = (taskSelected: ITask) => {
    setSelectedTask(taskSelected);
  }

  return (
    <div className={style.AppStyle}>
        <Form tasks={tasks} setTasks={setTasks} />
        <List
          tasks={tasks}
          selectTask={selectTask}
        />
        <Timer />
    </div>
  );
}

export default App;
