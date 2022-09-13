import React, { Fragment } from "react";

import "./App.css";

//component
import InputTodo from "./component/InputTodo";

import Listtodo from "./component/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <Listtodo />
      </div>
    </Fragment>
  );
}

export default App;
