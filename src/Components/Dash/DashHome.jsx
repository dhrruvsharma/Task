import React, { useEffect, useState } from "react";
import TaskPop from "./TaskPop";

const DashHome = () => {

    const [visible, setVisible] = useState(false);
    const [tasks, setTasks] = useState(() => {
        const stored = JSON.parse(localStorage.getItem('tasks'));
        return (stored?.length > 0) ? stored : [];
    })

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    const FinishTask = (index) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task, i) =>
                (i === index) ? { ...task, status: 1 } : task
            );
        });
    }

    const DeleteTask = (index) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((_,i) => i !== index);
        })
    }

    return (
        <div className="main ">
            <button onClick={() => { setVisible(true) }} className="bg-black text-white p-1 rounded">
                Create a new task
            </button>
            {visible && (
                <TaskPop setVisible={setVisible} setTasks={setTasks} />
            )}
            <div className="task-container">
                {tasks?.length ? (
                    <div className="tasks">
                        <h1 className="mt-4 text-xl font-bold">Your Current Tasks</h1>
                        {tasks.map((item, index) => (
                            <div key={index} className="bg-white text-black m-2 rounded p-1 flex justify-between items-center">
                                <div>
                                    <h1 className="text-xl font-semibold">{item.name}</h1>
                                    <p>{item.description}</p>
                                    <div className="flex">Status: {item.status ? (<p className="text-green-600">Finished</p>) : <p className="text-red-700">Pending</p>}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {!item.status && (
                                        <button className="bg-black text-white p-1 rounded mr-4" onClick={() => { FinishTask(index) }}>Mark as Finished</button>)}
                                    <button className="bg-black text-white p-1 rounded mr-4" onClick={()=>{DeleteTask(index)}}>Delete</button>

                                </div>
                            </div>
                        ))}
                    </div>
                ) : <h1>No Tasks to display currently</h1>}
            </div>
        </div>
    )
}

export default DashHome;