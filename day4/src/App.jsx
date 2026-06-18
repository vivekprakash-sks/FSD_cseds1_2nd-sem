import React from 'react'

const App=()=>{
    const[value,setValue]=useState(0);
    const decrementHandler=()=>setValue(value-1);
    return(
        <div>
            <h2>Counter App</h2>
            <button onClick={()=>setValue(value-1)}>Decrement</button>
            <span>{value}</span>   
            <button onClick={()=>setValue(value+1)}>increment</button>
            
            
              </div>
    )
    
}

export default App