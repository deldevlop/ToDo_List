import React, { useState } from "react";

const ToDoList = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const AddItem = (event) => {
        event.preventDefault();

        if (value.trim() !== '') {
            setItems([...items, value]);
            setValue('');
        }
    };

    const DeleteItem = (index) =>{
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);    

    }

    let listContent = null;

    if (items.length === 0) {
        listContent = <p className="text-center mt-2">Add a task</p>
    } else {
        listContent = <ul className="ms-3 me-2">
            {items.map((item, index) => (
                <div className="d-flex flex-row align-items-center justify-content-between"><li key={index}>{item}</li><button onClick={()=>DeleteItem(index)} className="btn me-5"><i class="bi bi-trash-fill"></i></button></div>
            ))}
        </ul>
    }


    return (
        <div className="list">
            <h1>ToDo List</h1>
            <form className="forInput text-center" onSubmit={AddItem}>
                <div className="ms-2 me-2 mb-4 justify-content-center d-flex align-items-center flex-row">
                    <input type="text" className="form-control"  value={value} onChange={(e) => setValue(e.target.value)} />
                    <button type="submit" className="btn" > <i className="bi bi-plus-circle-fill"></i></button>
                </div>
            </form>
            {listContent}
        </div>
    );
}

export default ToDoList;