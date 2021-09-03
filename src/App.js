import "./styles/App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="App_Body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
