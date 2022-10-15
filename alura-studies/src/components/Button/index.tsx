import React from "react";
import style from './Button.module.scss'

const Button = ({children, type}: any) => {
    return (
        <button type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button;