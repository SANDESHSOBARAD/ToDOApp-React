import styles from '../style.module.css'
import shortid from 'shortid'
const Form=({todo, setTodo, todoList,  setTodoList})=>{

    const handleChange=(event)=>{
        setTodo(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name: todo, id: shortid.generate()}]);
        setTodo("");
    }

    return (
        <div className={styles.formdivstyle} >
            <form
            onSubmit={handleSubmit}
            >
                <input
                onChange={handleChange}
                type='text'
                className={styles.forminputstyle}
                placeholder="Add Task"
                >
                </input>
                <button
                type='submit'
                className={styles.formbuttonstyle}
                >
                    Add
                </button>
            </form>
        </div>
    )
}
export default Form;