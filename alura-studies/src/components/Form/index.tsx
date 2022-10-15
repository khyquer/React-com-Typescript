import { useState } from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import style from './Form.module.scss'

const Form = () => {
    const [time, setTime] = useState('00:00:00');

    return (
        <form className={style.newTask}>
            <TextField />
            <TimeField value={time} />
            <Button>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;