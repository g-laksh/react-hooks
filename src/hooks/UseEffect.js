import react, { useState, useEffect } from 'react';



const UseEffect = () => {
    const [resource, setresource] = useState('posts')
    //on clicked change resource by set resource
    const [item, setitem] = useState([])
    //on click setitem according to the useeffect 
    const[windowWidth,setwindowwidth] = useState(window.innerWidth)
    //for windoe resize display
    const handleResize = ()=> {
        setwindowwidth(window.innerWidth)
    }
    useEffect(() =>{
        window.addEventListener('resize',handleResize)

    },[])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        //from file take data of required type
            .then(response => response.json())
            .then(json => setitem(json))
    }, [resource]
    //on  response map item
    )
    return (
        <>
            <div>
                <button onClick={() => setresource('posts')}>Posts</button>
                <button onClick={() => setresource('users')}>Users</button>
                <button onClick={() => setresource('comments')}>Comments</button>
            
            <h6>{resource}
            </h6>
            {/* {item.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
             
             <h3>windowsize display </h3>
            <div>{windowWidth}</div>
            </div>
        </>
    )
}

export default UseEffect