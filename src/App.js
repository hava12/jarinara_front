import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from '@mui/material/Button';
import React from 'react'
import routes from "./routes";
import Todo from './components/Todo'
import { Paper, List } from '@mui/material';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{id: 0, title: "Hello World 1", done: true},
              {id: 1, title: "Hello World 2", done: false}]
    }
  }
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{"margin": "16"}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );
    return (
      <Router>
        <div className="App">
          {todoItems}
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
}

export default App;
