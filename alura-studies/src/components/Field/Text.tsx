import style from './Field.module.scss'

const Text = ({value, onChange}:any) =>  {
    const onChangeText = (e: any) => {
        onChange(e.target.value)
    }
    return (
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione um estudo</label>
            <input
                type="text"
                name="task"
                id="task"
                placeholder="O que você quer estudar?"
                required
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Text;