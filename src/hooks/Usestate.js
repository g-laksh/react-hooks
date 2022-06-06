import react, {useState} from 'react';

const Usestate = () => {
    const [count, setcount] =useState(()=>{
        console.log('run function')
        return 0
      
      })
      function dCount(){
        setcount(prevCount => prevCount-1)
      }//function to decrement count
      function iCount(){
        setcount(prevCount => prevCount+1)
      }//function to increment count
  return (
      <>
    <div> <button onClick={dCount}>-</button>
    <span>{count}</span>
    <button onClick={iCount}>+</button></div>
    </>
  )
}

export default Usestate