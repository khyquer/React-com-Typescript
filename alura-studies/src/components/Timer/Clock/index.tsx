import { SecondsToTime } from '../../../common/utils/time'
import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

const Clock = ({time = 0}: Props) => {
    const [hourTen, hourUnity, divisor1, minuteTen, MinuteUnity, divisor2, secondTen, secondUnity] = SecondsToTime(time);
    return (
        <>
            <span className={style.clockNumber}>{hourTen}</span>
            <span className={style.clockNumber}>{hourUnity}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{MinuteUnity}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secondUnity}</span>
        </>
    )
}

export default Clock;