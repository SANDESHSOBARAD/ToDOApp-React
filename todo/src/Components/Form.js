import styles from '../style.module.css'

const Form=()=>{
    return (
        <div className={styles.formdivstyle} >
            <form>
                <input
                className={styles.forminputstyle}
                placeholder="Add Task"
                >
                </input>
                <button
                className={styles.formbuttonstyle}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
export default Form;