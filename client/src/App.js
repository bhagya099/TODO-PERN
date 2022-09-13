import React, { Fragment } from "react";

import "./App.css";

//component
import InputTodo from "./component/InputTodo";
import EditTodo from "./component/EditTodo";
import Listtodo from "./component/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
