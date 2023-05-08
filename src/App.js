import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#1e1e1e'
      document.body.style.color = 'white'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
      <div className={`container my-3 ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <TextForm heading="Enalyze The Text To Analyze" />
      </div>
      {/*<div className= "container my-5">*/}
      {/*    <About/>*/}
      {/*</div>*/}
    </>
  )
}

export default App;
