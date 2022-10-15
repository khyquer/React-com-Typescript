import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import ITask from '../types/ITask';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);

  return (
    <div className={style.AppStyle}>
        <Form tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
        <Timer />
    </div>
  );
}

export default App;
