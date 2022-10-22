import React, { useCallback, useRef, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Site from "./site"

function App() {

  return (
    <>
    <div className="App">
      <Router>
        <Site></Site>
      </Router>
    </div>
    {console.log("App")}
    </>
  );
}

export default App;