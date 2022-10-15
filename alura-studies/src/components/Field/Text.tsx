import style from './Field.module.scss'

const Text = () =>  {
    return (
        <div className={style.inputContainer}>
            <label htmlFor="task">Adicione um estudo</label>
            <input
                type="text"
                name="task"
                id="task"
                placeholder="O que você quer estudar?"
                required
            />
        </div>
    )
}

export default Text;