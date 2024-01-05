import React,{useEffect} from 'react';
import './App.css';
import Main from './components/indexes/Main';
import Navabar from './components/indexes/Navabar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap')
  },[])
  
  return (
  <div>
    <Navabar />
    <Main/>
    
    </div>  
    )
}

export default App;
