import style from './Field.module.scss'

const Text = ({value}:any) =>  {
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
                
            />
        </div>
    )
}

export default Text;