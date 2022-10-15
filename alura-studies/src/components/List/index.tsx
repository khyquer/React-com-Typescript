import { useState } from "react";
import Time from "./Time";
import style from './List.module.scss'
import ITasks from '../../types/ITask'

const List = ({tasks, setTasks}: {tasks: ITasks[], setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>}) => {

    const addTask = () => {
        setTasks([...tasks, {
            name: 'Estudar React',
            time: '01:00:00'
        }])
    }

    return (
        <aside className={style.listTasks}>
            <h2 onClick={addTask}> Estudos do Dia</h2>
            <ul>
                {tasks.map(({name, time}, index) => (
                    <Time name={'#' + index + ' ' + name} time={time} key={index.toString()} />
                ))}
            </ul>
        </aside>
    )
}

export default List;