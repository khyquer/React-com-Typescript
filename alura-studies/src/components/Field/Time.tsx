import style from './Field.module.scss'

const Time = ({value}:any) => {
    return (
        <div className={style.inputContainer}>
            <label htmlFor="time">Adicione um estudo</label>
            <input
                type="time"
                name="time"
                id="time"
                min="00:00:00"
                max="01:30:00"
                required
                value={value}
            />
        </div>
    )
}

export default Time;