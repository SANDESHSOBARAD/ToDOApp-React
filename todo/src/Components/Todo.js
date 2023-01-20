import styles from '../style.module.css'
const Todo =({todoItem})=>{
    return(
        <div>
            <div className={styles.tododiv}>
                <h3 className={styles.todoval}>{todoItem.name}</h3>
                <button className={styles.deletebutton}>Done</button>
            </div>

        </div>
    )
}
export default Todo;