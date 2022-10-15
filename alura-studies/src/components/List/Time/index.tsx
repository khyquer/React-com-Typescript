import React from "react";
import style from './Time.module.scss'

interface TimeInterface {
    name: string,
    time: string
}

const Time = ({id, name, time, selected, completed}: TimeInterface) => {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Time;