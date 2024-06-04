import { TodoItem } from "./TodoItem"
export const TodoList = ({todos, DelTodo, updateTodoItem}) =>{
    return(
        <ul>
            { todos.map((item) => {
                    return <TodoItem key={item.id} item={item} DelTodo={DelTodo} updateTodoItem={updateTodoItem}></TodoItem>
                })}
        </ul>
    )
}