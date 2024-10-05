import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import TextForm from './components/TextForm'
import About  from './components/About'


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const ShowAlert=(message,type)=>{
   setAlert({
      msg: message,
      type: type
   })
   setTimeout(()=>{
    setAlert(null);
   },1500)
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
 
      setMode('dark')
      document.body.style.backgroundColor='grey'
      ShowAlert("Dark Mode Enabled","success");
  
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      ShowAlert("Light Mode Enabled","success");
     
       
    }
  }
  return (
    <>
    
     <Navbar Title="TestUtils" mode={mode} toggleMode={toggleMode} />
      
     <Alert alert={alert}/>
    
     <div className="into">

     <div className="container my-4 test2" >
  
     
  
        <TextForm ShowAlert={ShowAlert} title="Enter your yext" mode={mode}/>
        
     

     </div>
     <About/>
     </div>
     </>
  )
}

export default App
