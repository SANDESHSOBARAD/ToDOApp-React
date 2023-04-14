import styles from '../style.module.css'
const Todo =({todoItem, todoList,setTodoList})=>{
    const deleteTodo=()=>{
       setTodoList( todoList.filter(item => item.id !== todoItem.id))

    }
    return(
        <div>
            <div className={styles.tododiv}>
                <h3 className={styles.todoval}>{todoItem.name}</h3>
                <button  onClick={deleteTodo} className={styles.deletebutton}>Done</button>
            </div>

        </div>
    )
}
export default Todo;