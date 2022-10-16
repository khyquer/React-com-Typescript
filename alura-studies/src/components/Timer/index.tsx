import { useEffect, useState } from "react";
import { TimetoSeconds } from "../../common/utils/time";
import ITask from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import sytle from './Timer.module.scss';

interface Props{
    selectedTask: ITask | undefined
    completTask: () =>  void
}

const Timer = ({selectedTask, completTask}: Props) => {

    const [timeClock, setTimeClock] = useState<number>();

    useEffect(() => {
        if(selectedTask?.time){
            setTimeClock(TimetoSeconds(String(selectedTask.time)));
        }
    }, [selectedTask]);

    function countdown(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTimeClock(counter - 1);
                return countdown(counter - 1);
            }
            completTask();
        }, 1000);
    }
    
    return (
        <div className={sytle.timer}>
            <p className={sytle.title}>Escolha o card e inicie o cronometro:</p>

            <div className={sytle.clockWrapper}>
                <Clock time={timeClock} />
            </div>
            <Button onClick={() => countdown(timeClock)}>
                Iniciar
            </Button>
        </div>
    )
}

export default Timer;