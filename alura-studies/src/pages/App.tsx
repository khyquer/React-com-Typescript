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
    setTasks(oldTaks => oldTaks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }

  const completTask = () => {
    if(selectedTask){
      setSelectedTask(undefined);
      setTasks(oldTasks =>
        oldTasks.map(task => {
            if(task.id === selectedTask.id){
              return {
                ...task,
                selected: false,
                completed: true
              };
            }
            return task;
          })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
        <Form setTasks={setTasks} />
        <List
          tasks={tasks}
          selectTask={selectTask}
        />
        <Timer
          selectedTask={selectedTask}
          completTask={completTask}
         />
    </div>
  );
}

export default App;
