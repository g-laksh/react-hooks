
import './App.css';
import UseEffect from './hooks/UseEffect';
import useLocalStorage from './hooks/useLocalStorage';
import Useref from './hooks/Useref';
import Usestate from './hooks/Usestate';
import Usestate2 from './hooks/Usestate2';

function App() {
  const [name,setName] = useLocalStorage('name','')

  return (<>
    <div className="App">
    
       HOOKS
       <div className="App-header">useState Hook
       <Usestate/>
      
       <Usestate2/>
       </div>
       <div className="App-header">useEffect Hook
       <UseEffect/>
       </div>
       <div className="App-header">useEffect Hook
       <Useref/>
       </div>
       <input type="text" value={name} 
       onChange={e => setName(e.target.value)}/>

    </div>

    </>
  )
}

export default App;
