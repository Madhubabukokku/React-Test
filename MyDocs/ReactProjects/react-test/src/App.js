import React, {useEffect} from "react";
import './App.css'
import Nav from "./components/Nav";
// import Main from "./components/Main";
import Main from "./components/Main";

import 'bootstrap/dist/css/bootstrap.min.css'


function App(){
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap')
  },[])
  return (
    <>
     <Nav/>
     <Main/>
    </>
  )
}


export default App