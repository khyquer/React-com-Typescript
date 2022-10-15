import { useState } from "react";
import Time from "./Time";
import style from './List.module.scss';
import ITasks from '../../types/ITask';

interface Props {
    tasks: ITasks[],
    selectTask: (taskSelected: ITasks) => void
}


const List = ({tasks, selectTask}: Props) => {
    return (
        <aside className={style.listTasks}>
            <h2> Estudos do Dia</h2>
            <ul>
                {tasks.map(({id, name, time, selected, completed}, index) => (
                    <Time
                        id={id}
                        name={'#' + index + ' ' + name}
                        time={time}
                        key={id}
                        selected={selected}
                        completed={completed}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;