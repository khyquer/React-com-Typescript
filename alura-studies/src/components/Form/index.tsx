import { useState } from "react";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import style from './Form.module.scss'

const Form = () => {
    const [taskName, setTaskName] = useState('00:00:00');
    const [taskTime, setTaskTime] = useState('00:00:00');

    return (
        <form
            className={style.newTask}
            onSubmit={(e:any) => {e.preventDefault()}}
        >
            <TextField value={taskName} />
            <TimeField value={taskTime} />
            <Button>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;