import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [newAdvice, setAdvice] = useState("");

useEffect(() => {
  getAdvice();
}, [])
const getAdvice = async () => {
const responce = await fetch('http://www.boredapi.com/api/activity/');
const res = await responce.json();
setAdvice(res.activity)
}

  return (
    <div className='container'>

       <div>
      <p className='advice'>If you are bored just click here:</p>            
     <button onClick={getAdvice}>GET ADVICE</button>
    </div>
  
    <div className='title'>
<h2>{newAdvice}</h2>
  </div>
    
    </div>
  );
}

export default App;
