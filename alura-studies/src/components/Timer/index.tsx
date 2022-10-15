import Button from "../Button";
import Clock from "./Clock";
import sytle from './Timer.module.scss';

const Timer = () => {
    return (
        <div className={sytle.timer}>
            <p className={sytle.title}>Escolha o card e inicie o cronometro:</p>
            <div className={sytle.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}

export default Timer;