import React, { useContext } from 'react'
import { UserValue } from './Context'
import '../App.css';
function List() {
    
    const {tasks, toggleDone , handleDelete, reset} = useContext(UserValue);

    const items = tasks.length;

    const resetList = () =>
    {
      reset();
    }

    const del = (e)=>
    {
        handleDelete(e);
    }
    const update = (e) =>
{
    // e.preventDefault();
    const val =prompt("Enter new value");
    toggleDone(e,val);
}
  return (
    <div className='list-container'>
        <ol>

        {
            tasks.map((e,index)=>
            {
                return(
                    <li key={index}>
                        {e}
                        <div style={{float:'right'}}>
                        <i class="bi bi-trash" onClick={()=> del(index)}>
                        <p style={{display:'inline', fontSize:'0.3em', fontWidth:'100'}}>Delete</p> 
                        </i>
                        
                        <i onClick={()=> update(index)} style={{marginRight:'1em', paddingLeft:'1em' }} class="bi bi-clipboard">
                            <p style={{display:'inline', fontSize:'0.3em', fontWidth:'100'}}>Update</p>
                        </i>
                        </div>
                    </li>
                )
            })
        }
       
            </ol>

            <div className='option-container'>
  <div>
  <h5>{items} items left</h5>
  </div>

  <div>
     
  </div>
  

  <div>
      <h5 style={{cursor:'pointer'}} 
      onClick={resetList}>Clear All</h5>
  </div>
  
            </div>
    </div>
  )
}

export default List