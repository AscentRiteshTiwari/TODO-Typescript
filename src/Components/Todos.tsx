import React, { useContext } from 'react';
import TodoItems from './TodoItems';
import classes from './Todos.module.css'
import { TodoContext } from './Store/TodoContext';

const Todos:React.FC =()=>{
    const todoctx = useContext(TodoContext)
    return(
        <ul className={classes.todos}>
            {todoctx.items.map((item)=>(
        <TodoItems key= {item.id} item = {item} onRemoveTodo={todoctx.onRemoveTodo.bind(null, item.id)}/>
            ))
        }
        </ul>
    )
}

export default Todos;