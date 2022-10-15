import React, { useState } from "react";
import ITasks from "../../types/ITasks";
import Button from "../Button";
import TextField from "../Field/Text";
import TimeField from "../Field/Time";
import style from './Form.module.scss'

const Form = ({tasks, setTasks}: {tasks: ITasks[], setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>}) => {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('00:00:00');

    const saveTask = () => {
        setTasks([...tasks, {
            name: taskName,
            time: taskTime
        }])
    }

    return (
        <form
            className={style.newTask}
            onSubmit={(e:React.FormEvent<HTMLFormElement>) => {e.preventDefault(); saveTask()}}
        >
            <TextField value={taskName} onChange={setTaskName} />
            <TimeField value={taskTime} onChange={setTaskTime}/>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;