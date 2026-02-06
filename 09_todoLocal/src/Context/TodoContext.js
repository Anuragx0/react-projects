import { useContext,createContext } from "react";

export const TodoContex = createContext({
    todos : [{
        id : 1,
        todo : "Todo Msg",
        completedTodo : false
    }, ],
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) =>{},
    toggleComplete : (id) =>{}
})

export const TodoContexProvider = TodoContex.Provider

export const useTodo = () => {
    return useContext(TodoContex)
}

