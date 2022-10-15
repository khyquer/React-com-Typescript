import style from './Field.module.scss'

const Time = () => {
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
            />
        </div>
    )
}

export default Time;