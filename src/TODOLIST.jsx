import React ,{ useState } from 'react'

function TODOLIST(){

    const [task,settask] = useState(["Eat","Shower","Work"]);

    const [newtask,setnewtask] = useState("");

    function inputcahnge(event){
        setnewtask(event.target.value);
    }

    function addtask(){
        if(newtask.trim() !== ""){
            settask(t =>[...t,newtask]);
            setnewtask("");
        }
    }

    function deletetask(index){
        const updatedtask = task.filter((Element,i) => i !== index);
        settask(updatedtask);
    }

    function movetaskup(index){
        if(index>0){
            const updatedtask = [...task];
            [updatedtask [index],updatedtask [index-1]] = [updatedtask [index-1],updatedtask [index]],
            settask(updatedtask);
        }
    }

    function movetaskdown(index){
        if(index<task.length-1){
            const updatedtask = [...task];
            [updatedtask [index],updatedtask [index+1]] = [updatedtask [index+1],updatedtask [index]];
            settask(updatedtask);
        }
    }

    return(
        <div className='to-do-list'>

            <h1>To-Do-List</h1>

            <div>
                <input type='text' placeholder='Enter the task...' value={newtask} onChange={inputcahnge}/>

                <button className='add-button' onClick={addtask}>Add</button>
            </div>

            <ol>
                {task.map((tasks,index) => <li key={index}><span className='text'>{tasks}</span>

                <button className='delete' onClick={() => deletetask(index)}>Delete</button>

                <button className='move-button' onClick={() => movetaskup(index)}>☝️</button>

                <button className='move-button' onClick={() => movetaskdown(index)}>👇</button>

                </li>)}
            </ol>

        </div>
    );

}
export default TODOLIST