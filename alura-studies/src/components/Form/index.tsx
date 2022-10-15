import React from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import style from './Form.module.scss'

class Form extends React.Component {
    render(){
        return (
            <form className={style.newTask}>
                <TextField />
                <TimeField />
                <Button />
            </form>
        )
    }
}

export default Form;