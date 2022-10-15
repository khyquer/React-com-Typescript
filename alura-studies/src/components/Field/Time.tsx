import style from './Field.module.scss'

const Time = ({value, onChange}:any) => {
    return (
        <div className={style.inputContainer}>
            <label htmlFor="time">Adicione um estudo</label>
            <input
                type="time"
                name="time"
                id="time"
                min="00:00:01"
                max="01:30:00"
                step="1"
                required
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Time;