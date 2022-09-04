import './App.css'
import React from 'react';
import Header from './Components/Header';
import AddTasks from './Components/AddTasks';
import List from './Components/List';
import { UserInputProvider } from './Components/Context';
function App() {
   

  return (
   <>
   <UserInputProvider>
   <Header/>
   <AddTasks/>
   <List/>
   </UserInputProvider>
      
 </>
  )
}



export default App
