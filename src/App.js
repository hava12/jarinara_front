import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from '@mui/material/Button';
import React from 'react'
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <div className="container">
            <Routes>
                <>
                    {routes.map((route) => {
                          return <Route path={route.path} key={route.path} element={<route.component />} exact></Route>;
                    })}
                </>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
