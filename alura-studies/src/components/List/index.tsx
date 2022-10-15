import { useState } from "react";
import Time from "./Time";
import style from './List.module.scss'

const List = () => {
    const [tasks, setTasks] = useState([{
        name: '#0 ' + ' Estudar React',
        time: '01:00:00'
    }]);

    const [cont, setCont] = useState(1);

    const addTask = () => {
        setCont(cont + 1);
        setTasks([...tasks, {
            name: '#' + cont + ' Estudar React',
            time: '01:00:00'
        }])
    }

    return (
        <aside className={style.listTasks}>
            <h2 onClick={addTask}> Estudos do Dia</h2>
            <ul>
                {tasks.map(({name, time}, index) => (
                    <Time name={name} time={time} key={index.toString()} />
                ))}
            </ul>
        </aside>
    )
}

export default List;