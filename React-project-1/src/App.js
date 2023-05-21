// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
function App() {
  // let name = "Coder_m";
  const [Mode, setMode] = useState('light');

  const toggleMode = () => {
    if(Mode === "light"){
      setMode('dark');
    }else{
      setMode('light');
    }
  }
  

  return (
    <>
      <Navbar title="Text Formater" aboutText="About Formater" mode={Mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <div className="container my-3">
          <TextForm heading="Enter Text to Formate Below"/>
          {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
