import React from "react";

interface TimeInterface {
    key: string,
    name: string,
    time: string
}

const Time = (prop: TimeInterface) => {
    return (
        <li key="0">
            <h3>Nome da tarefa s</h3>
            <span>00:00:00</span>
        </li>
    )
}

export default Time;