import {useState,useEffect} from 'react';
import { Users } from "./utils";
import './App.css';

function App() {  
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    Users(setUsers);
  },[users])

  return (
    <div className="App">
      <h1>Boring React App</h1> 

      {
      users.map((item,index) => {
        return (
          <div>
          <h2>{item.username}</h2>
          </div>
        )
      })}

    </div>
  );
}

export default App;
