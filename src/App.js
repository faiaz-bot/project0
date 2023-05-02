import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
      <>
         <Navbar title="TextUtils" about="About" home="Home"/>
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
