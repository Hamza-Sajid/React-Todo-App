import React from "react";
import test from "../img/test.png";
import test2 from "../img/test2.png";
import "../App.css"
import { useState } from "react/cjs/react.development";

function Todo()
{

    //Functions
    function inArray()
    {
        setArr([...arr,input]);

        
    }
    function Delete()
    {
        setArr([]);
    }


    //state are used to store the data
    const [input,setInput]=useState("");
    const [arr,setArr]=useState([]);

return(
<>
    <div className="main-div">

        <div className="child-div">
            <figure>
                <img src={test} alt="un"></img>
                <figcaption>ADD YOUR LIST ITEMS HERE!</figcaption>
            </figure>
            <div className="addItems">
                <input onChange={ (e) => setInput(e.target.value)} value={input} type="text" placeholder="anything"></input>
                <button style={{position: 'relative', top:'2vh', background:'transparent', border:'none'}} >
                    <img alt="add"  width="40" height="40" src={test2} onClick={inArray} >
                    </img>
                </button>
                
            </div>

<div className="showItems">
    {
        arr.map(   (index,value) =>
        {return(
            <div className="eachItem">
            <h3>{index}</h3>
            <li className="far fa-trash-alt add-btn" title="Delete Items"></li>
            </div>
            )
        } )
    }
    
   
    <div className="showItems">
    <button onClick={Delete} className="btn effect04" data-sm-link-text="Remove All"><span>Delete All</span></button>
</div>

</div>
        </div>

    </div>

</>

)


}

export default Todo;