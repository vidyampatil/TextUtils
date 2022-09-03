import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  const[mode,setMode]=useState('light') //Where dark mode is enabled or not

  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) =>{
    setAlert({
       msg:message,
       type:type
     } )
     setTimeout(() => {
       setAlert(null);
     }, 2000);
  }


  const toggleMode =()=>{
     if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#0b2b5a';
      showAlert("Dark mode has been enabled..!", "Success")
      setTimeout(() => {
        document.title = "TextUtils-Dark mode"
      }, 2000);
     
     }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled..!", "Success")
      setTimeout(() => {
        document.title = "TextUtils-Light mode"
      }, 2000);
     
     }
  }

  return (
    <React.Fragment>
     {/* here abouttext is props name and title is defaultprop pass in js file */}
     <Navbar  title="textUtils" abouttext="About Us"  mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
            {/* <About /> */}
             <TextForm heading="Enter the text to analyze below" mode={mode}  showAlert={showAlert}/> 
    </React.Fragment>
  );
}

export default App;
