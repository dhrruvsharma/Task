import React, { useEffect, useState } from "react";

const TaskPop = ({ setVisible,setTasks }) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name: name,
            description: description,
            status: 0
        }
        setTasks((prev) => [...prev,newTask]);
        setVisible(false);
    }

    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        }
        if (name === 'description') {
            setDescription(value);
        }
    }

    return (
        <div className="task bg-bgcc p-1 rounded w-1/3">
            <form onSubmit={HandleSubmit} className="flex flex-col items-start text-xl ">
                <label htmlFor="name" className="mt-2">Enter Name</label>
                <input type="text" name="name" id="name" autoComplete="off" placeholder="Task Name" required onChange={HandleChange} className="rounded p-1 w-full" />
                <label htmlFor="description" className="mt-2">Enter Description</label>
                <input type="text" name="description" id="description" autoComplete="off" placeholder="Task Description" required onChange={HandleChange} className="rounded p-1 w-full" />
                <button type="submit" className="w-full bg-white mt-3 rounded p-1">Create Task</button>
            </form>
            <button onClick={() => { setVisible(false) }} className="bg-white p-1 text-black mt-3">
                Close
            </button>
        </div>
    )
}
export default TaskPop;