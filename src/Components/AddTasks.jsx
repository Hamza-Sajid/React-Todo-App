import React, { useContext, useState } from 'react'
import '../App.css';
import { UserValue } from './Context';
function AddTasks() {
const {tasks,setValue} = useContext(UserValue);

    const [input,setInput]=useState('');
    const handleMe = (e) =>
    {
        e.preventDefault();
        setValue(input);
        console.log(tasks);
    }


    
  return (
    <form onSubmit={(e)=> { handleMe(e)}} className='input'>

<div className='input-div'>
<i class="bi bi-pencil-fill"></i>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Read 2 pages of JS-Pattrens'></input>
        

</div>
        <div className='btn-div'>
          <button>
          <i  onClick={handleMe} style={{color:'black'}} class="bi bi-plus-circle-fill"></i>
          </button>
        
        
        </div>
        {/* </div> */}
    </form>
  )
}

export default AddTasks