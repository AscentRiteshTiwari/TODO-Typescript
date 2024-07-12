import { createContext, PropsWithChildren } from "react";
import Todo from "../../models/todo";
import { useState } from "react";


type ContextObj = {
        items:Todo[];
        onAddTodo:(text:string)=>void;
        onRemoveTodo:(id:string)=>void
    
    }


export const TodoContext = createContext<ContextObj>(
    {
        items:[],
        onAddTodo:()=>{},
        onRemoveTodo:(id:string)=>{}
    }
);

const TodosContextProvider:React.FC<PropsWithChildren<{}>>= (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText:string) =>
    {
      const newTodo = new Todo(todoText);

      setTodos((prevtodos)=>{
        return prevtodos.concat(newTodo);
      })
      
    }
    const removeTodoHandler = (todoId:string)=>
    {
      setTodos((prevtodos)=>{
        return prevtodos.filter(todo => todo.id !== todoId);
      })
    }

    const contextValue: ContextObj={
        items:todos,
        onAddTodo:addTodoHandler,
        onRemoveTodo:removeTodoHandler
    }
    return <TodoContext.Provider value={contextValue}>
         {props.children} {/* Here it was not taking the children generic type 
         use PropswithChildren
         PropsWithChildren<{}> ensures that your component can accept children as a prop.  */}
    </TodoContext.Provider>
}


export default TodosContextProvider;