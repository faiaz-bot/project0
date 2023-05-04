import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState('light')
    const toggleMode = ()=>{
        if(mode === 'dark'){
            setMode('light')
        }
        else {
            setMode('dark')
        }
    }
  return (
      <>
         <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode}/>
          <div className="container my-3" >
              <TextForm heading="Enalyze The Text To Analyze"/>
          </div>
          {/*<div className= "container my-5">*/}
          {/*    <About/>*/}
          {/*</div>*/}

      </>
  );
}

export default App;
