import React from "react";
import Time from "../Time";
import './style.scss'

const List = () => {
    const tasks = [
        {
            name: 'Estudar React',
            time: '01:00:00'
        },
        {
            name: 'Estudar Typescript',
            time: '02:00:00'
        },
        {
            name: 'Revisar',
            time: '03:00:00'
        }
    ]

    return (
        <aside className="listTasks">
            <h2> Estudos do Dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Time name={task.name} time={task.time} key={index.toString()} />
                ))}
            </ul>
        </aside>
    )
}

export default List;