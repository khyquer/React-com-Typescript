import React from "react";
import ITask from "../../../types/ITask";
import style from './Time.module.scss'

interface Props extends ITask {
    selectTask: (taskSelected: ITask) => void
}

const Time = ({id, name, time, selected, completed, selectTask}: Props) => {
    const timeStyle = `${style.time}
    ${selected ? style.timeSelected : ''}
    ${completed ? style.timeCompleted : ''}
    `

    return (
        <li
            className={timeStyle}
            title={id}
            onClick={() => !completed && selectTask({id, name, time, selected, completed})}
        >
            <h3>{name}</h3>
            <span>{time}</span>
            {completed && <span className={style.completed} aria-label="Tarefa Concluída"></span>}
        </li>
    )
}

export default Time;