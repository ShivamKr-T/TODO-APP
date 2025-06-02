import React,{useState} from "react";

const isOdd=(count)=>{
    return count%2==1?"Odd":"Even";
}

function Counter(){
    const [count,setCount]=useState(0);
    return (
        <div>
            <p>Count is {count}</p>
            <p>This is {isOdd(count)} number</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default Counter;