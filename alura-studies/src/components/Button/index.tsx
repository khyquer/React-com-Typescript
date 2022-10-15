import React from "react";
import style from './Button.module.scss'

const Button = ({children, type, onClick}: any) => {
    return (
        <button
            type={type}
            className={style.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;