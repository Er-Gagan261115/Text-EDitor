
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Lightdarkmode from "./components/Lightdarkmode";
// import About from './components/About'
import React, { useState } from 'react'
// import { ReactDOM } from 'react-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [cmode, changMode] = useState('white')
  const changemode = (e) => {
    changMode(e)
    if (e === 'blue') {
      // changMode('blue');
      document.body.style.backgroundColor = e;
    }
    else if (e === "yellow") {
      // changMode('yellow');
      document.body.style.backgroundColor = e;
    }
    else if (e === "white") {

      // changMode('white');
      document.body.style.backgroundColor = e;
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-Editor" mode={cmode} changemode1={changemode}/>
            <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/" > */}
              <TextForm text="Enter the text" mode={cmode} />
              
          {/* </Route> */}
          {/* <Route  path="/about" > */}
            {/* <About /> */}
          {/* </Route> */}
        {/* </Switch> */}
            </div>
        {/* </Router> */}
        {/* we made a component in nav and here just returning nav so as there should be clean code */}

    </>
  );
}

export default App;
