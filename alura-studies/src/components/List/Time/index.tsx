import React from "react";
import ITasks from "../../../types/ITask";
import style from './Time.module.scss'

const Time = ({id, name, time, selected, completed}: ITasks) => {
    return (
        <li className={style.item} title={id}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Time;