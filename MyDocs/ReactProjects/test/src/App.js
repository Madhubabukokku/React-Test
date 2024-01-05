import './App.css';
import React from 'react';
import New from './components/New';
import Test  from './components/Test'
import classes from './components/new.modules.css'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            from './components/Test';


function App() {
  return (
   <div className={classes.New}>
    <New/>
<Test/>
{classes}
   
   <p>hi</p>
   </div>
  )
}

export default App;
