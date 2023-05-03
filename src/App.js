import { useState } from 'react';
import './App.css';
import { Population,Area } from './Movie/Country'; 
 
function App() {
  const [name,setName] = useState('jonathan')
 
  const changeValue = (name) => {
    setName(name)
  }

  return (
    <>
      <p>{name}</p>  
 
      <button onClick={() => changeValue('blue') } >
        make blue
      </button>

      <Population 
        name={name}
        changeValue={changeValue}
      />

    </> 
     
  );
}

export default App;
