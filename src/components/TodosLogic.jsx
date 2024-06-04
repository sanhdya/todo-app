import { useState } from "react";
import { InputTodo } from "./InputTodo";
import { TodoList } from "./TodoList";
import { v4 as uuidv4} from "uuid"
import { TodosProvider } from "../context/TodosContext";
export const TodosLogic = () =>{
    const [todos, setTodos ]= useState([
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ]);
    // const handleChange = (id) => {
    //     setTodos((prevState) => 
    //     prevState.map((todo) => {
    //         if(todo.id === id){
    //             return {
    //                 ... todo,
    //                 completed: !todo.completed
    //             };
    //         }
    //         return todo
    //     }))
    // }
    const DelTodo = (id) =>{
      setTodos([
        ...todos.filter((item) => {
          return item.id !== id;
        })
      ])
      console.log('delited', id)
    }
    const addTodoItem = (input) => {
      const newTodo = {
        id: uuidv4(),
        title: input,
        completed: false,
      };
      setTodos([ ...todos, newTodo])
    }
    const updateTodoItem = (title, id) =>{
      setTodos(
        todos.map((item) => {
          if(item.id === id){
            item.title = title;
          }
          return item
        })
      )
    }
    return (
      <TodosProvider>
        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodoList todos={todos} DelTodo={DelTodo} updateTodoItem={updateTodoItem}/>
        </div>
      </TodosProvider>    
    )
}