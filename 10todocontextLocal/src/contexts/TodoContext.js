import {createContext , useContext} from 'react'

export const TodoContext = createContext({
     todos :[
        {
            id :1,
            todo : "todo msg",
            completed :false,
        }
     ],
     addTodo: (todo)=>{},
     updateTodo: (id,todo)=>{},
     deleteTodo: (id)=>{}, 
     toggleComplete: (id)=>{},
}) // creating context for todos

// create a function useTodo and return value of useContext(TodoContext)
export const useTodo = () => {
    return useContext(TodoContext)
}
// export default useTodo

export const TodoProvider =  TodoContext.Provider 

