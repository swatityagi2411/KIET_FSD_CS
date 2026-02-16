import {useState} from 'react'
export default function Counter()
{
    const [count,setCount]=useState(0);

    function handleIncrement(){
        setCount(count=>count+1);
        console.log(count);
    }
function handleDecrement(){
      if(count===0){
        alert("Cant decrease now");
        return;
      }
       setCount(count=>count-1);
        console.log(count);
    }

    return(
<>
<h1> Counter App</h1>
<h3>Count={count}</h3>
<button onClick={handleIncrement}> + </button>
<button onClick={handleDecrement}> - </button>
</>

    );
}