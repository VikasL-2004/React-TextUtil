import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, { useState } from 'react'



function App() {
  const [mode, setMode]= useState("light");
  const togelMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= '#353e3e76';
          document.body.style.color="white";

    }else{
      setMode('light')
          document.body.style.backgroundColor= "white";
          document.body.style.color="Black";

    }
  }

  return (
    <>
<Navbar
  ome="Home"
  lick="About"
  bran="TextUtil" 
  mode={mode}
togelMode={togelMode}/>      <div className="container"><TextFrom heading="Text enter here"   mode={mode}
/></div>
      {/* <About /> */}

    </>
  );
}

export default App;
