import Time from "./Time";
import style from './List.module.scss';
import ITask from '../../types/ITask';

interface Props {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void
}


const List = ({tasks, selectTask}: Props) => {
    return (
        <aside className={style.listTasks}>
            <h2> Estudos do Dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Time
                        key={item.id}
                        selectTask={selectTask}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;