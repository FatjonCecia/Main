import { useState, useEffect } from "react";
export default function QuestionTimer({timeout,onTiemout,mode}){
const [remainingTime,setRemainingTime]=useState(timeout);
useEffect(()=>{
   const timer= setTimeout(onTiemout,timeout);
return ()=>{
    clearTimeout(timer);
};
},[timeout,onTiemout]);
useEffect(()=>{

    const interval=setInterval(()=>{
        setRemainingTime(prevRemainingTime=>prevRemainingTime-100);
    },100);

    return ()=>{

        clearInterval(interval);
    };
    
},[])

    return <progress id="question-time"
      max={timeout}
       value={remainingTime}
       className={mode}
       />
}
//dummy