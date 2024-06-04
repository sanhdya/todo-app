import { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
export const InputTodo = ({ addTodoItem }) =>{
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            addTodoItem(input);
            setInput('');
            setMessage('');
        }else{
            setMessage('please add items...')
        }
       
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" className="input-text" value={input} placeholder="Add Todo .."  onChange={handleChange}/>
                <button className="input-submit">
                    <FaPlusCircle color="#5e5e5e"
    size="20px"
    className="submit-icon" />
                </button>
            </form>
            <div className="submit-warning">{message}</div>
        </div>
        
    )
}