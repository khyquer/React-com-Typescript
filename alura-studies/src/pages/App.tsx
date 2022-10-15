import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState([{
      name: 'Estudar React',
      time: '01:00:00'
  }]);

  return (
    <div className={style.AppStyle}>
        <Form tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
        <Timer />
    </div>
  );
}

export default App;
