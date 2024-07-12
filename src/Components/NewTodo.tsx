import { FormEvent, useRef, useContext } from "react"
import classes from './NewTodo.module.css'
import { TodoContext } from "./Store/TodoContext";


const NewTodo: React.FC = () =>
{
    const todoCntx = useContext(TodoContext)
    const valRef = useRef<HTMLInputElement>(null);

    function buttonhandler(e:FormEvent)
    {
        e.preventDefault();
        const enteredText = valRef.current!.value;

        if(enteredText!.trim().length === 0)
        {
            //Throw an error
        }

        todoCntx.onAddTodo(enteredText);

    };
    return(
        <form onSubmit = {buttonhandler} className={classes.form}>
            <label htmlFor ='text'>Todo Text</label>
            <input id = 'text' type="text" ref ={valRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;