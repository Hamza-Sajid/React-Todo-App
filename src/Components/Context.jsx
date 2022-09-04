import { createContext, useState } from "react";

const UserValue = createContext();


 const UserInputProvider = ({children}) =>
{

    const [tasks,setTasks]=useState([]);
const setValue = (e) =>
{
    setTasks([...tasks , e]);
}


const reset = () =>
{
    setTasks([]);
}
  const handleDelete = (removeIndex) => {
    setTasks(oldArray => {
      return oldArray.filter((value, i) => i !== removeIndex)
    })}



    const toggleDone = (id,val) => {
        let newState = [...tasks];
        newState[id] = val;
        setTasks(newState)
    }

    return(
        <UserValue.Provider value={{tasks,setValue, handleDelete, toggleDone , reset}}>
                {children}
        </UserValue.Provider>
    )
};
export {UserValue,UserInputProvider};
