import React from "react";

interface TimeInterface {
    key: string,
    name: string,
    time: string
}

const Time = (prop: TimeInterface) => {
    return (
        <li key={prop.key} className="item">
            <h3>{prop.name}</h3>
            <span>{prop.time}</span>
        </li>
    )
}

export default Time;