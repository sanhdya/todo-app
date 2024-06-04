import { useState } from "react"
import { FaTrash } from "react-icons/fa"
import { AiFillEdit } from "react-icons/ai"
export const TodoItem = ({item, DelTodo, updateTodoItem}) =>{
    const [edit, setEdit] = useState(false)
    const handleEditing = () => {
        setEdit(true);
    }
    let viewMode ={};
    let editMode = {};
    if(edit){
        viewMode.display = 'none';
    }else{
        editMode.display = 'none';
    }
    const handleUpdateDone = (event)=>{
        if(event.key === 'Enter'){
            setEdit(false);
        }
    }
    return (
        <li className="item">
            <div className="content" style={viewMode}>
                {/* <input type="checkbox" checked={item.completed} onChange={() => handleChange(item.id)}/> */}
                    <p>{item.title}</p>
                    <button onClick={handleEditing}>
                        <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
                    </button>
                    <button onClick={() => DelTodo(item.id)}>
                        <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
                    </button>
            </div>  
            <input type="text" value={item.title} className="textInput" style={editMode} onChange={(e) => updateTodoItem(e.target.value, item.id)}  onKeyDown={handleUpdateDone}/>     
        </li>
    )
    
}