import LoginForm from './components/main/LoginForm.js';
import './App.css';
import Header from './components/layout/Header.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
