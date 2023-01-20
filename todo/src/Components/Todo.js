import styles from '../style.module.css'
const Todo =()=>{
    return(
        <div>
            <div className={styles.tododiv}>
                <h3 className={styles.todoval}>To-do</h3>
                <button className={styles.deletebutton}>Done</button>
            </div>

        </div>
    )
}
export default Todo;