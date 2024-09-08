import { useCallback, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";


function Counter() {
  let [number,setNumber] = useState(35);
  let num = useRef(0);

  function handleClick(e) {
    console.log('render counter');
    e.stopPropagation();

    flushSync(()=>{
      setNumber(number=>number+1);
      setNumber(number=>number+1);
      setNumber(number=>number+1);  
    })
    num.current++;
    
    // window.print();

    console.log(number);
  }

  const fibFx = useCallback(function fib(n){
    if(n===1 || n===2){
      return 1;
    }
    
    return fib(n-1)+fib(n-2);
  },[]);
  
  const fibmemoized = useMemo(()=> fibFx(number),[number,fibFx]);


  return (
    <>
      <h1 style={{color:"white"}}>{number} | {fibmemoized}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default Counter;
