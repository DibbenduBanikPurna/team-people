import React, { useState } from 'react';
import './App.css';
import AllUser from './Components/Data/AllUser/AllUser';
import {Data} from './Components/Data/Data'
import UserInfo from './Components/Data/UserInfo/UserInfo';
function App() {
  const [user,setUser]=useState(Data)
  const [item,setItem]=useState([])
  const handleAddUser=(person)=>{
    setItem([...item,person])
  }

  return (
    <div className="App">
      <div className="user">
      {user.map(user=>{
        return <AllUser handleAddUser={handleAddUser} user={user}/>
      })}
      </div>
      <div>
        <UserInfo item={item} />
      </div>
     
      
    </div>
  );
}

export default App;
