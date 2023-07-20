import { useState } from "react";
export default function ToDolist() {
    const [input, setInput] = useState("")
    const [messageList, setMessageList] = useState([
        { id: 1, text: "Abhishek" },
        { id: 2, text: "Abhi" },
        { id: 3, text: "Abhishek mishra" }
    ]);
    const [edit, setEdit] = useState("")
    const [editId, setEditID] = useState(null)
    const handleAdd = () => {

        setMessageList([...messageList, { id: Date.now(), text: input }])
        setInput("")

    }
    const deleteTodo=(id)=>{
        let deleteid= messageList.filter((e)=>e.id!==id)
        setMessageList(deleteid)
        
    }
    const edittodo =(id)=>{
        let ediyt= messageList.find((e)=>e.id===id)
        setEdit(ediyt.text)
        setEditID(id)
    }
    const savetodo =(id) =>{
        let save = messageList.map((item)=>
        item.id === id ?{...item,text:edit}: item)
        setMessageList(save)
        setEditID(null)
    }
    console.log(messageList)
    return (
        <>
            <h1>TO-DO list</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAdd}>ADD TODO</button>

            <ol>
                {messageList.map((todo) => (

                    <li key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input type="text" value={edit} onChange={(e) => setEdit(e.target.value)} />
                                <button onClick={()=>savetodo(todo.id)}>save</button>
                            </>
                        ) : (
                            <>
                                <span>{todo.text}</span>
                                <button onClick={()=>edittodo(todo.id)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>
                        )}

                    </li>
                ))}
            </ol>

        </>
    )
}