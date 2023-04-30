import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
      <>
         <Navbar title="TextUtils" about="About" home="Home"/>
          <div className="container my-3" >
              <TextForm heading="Enalyze The Text To Analyze"/>
          </div>
      </>
  );
}

export default App;
