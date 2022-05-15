import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import routes from "./routes";
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import { Paper, List, Container } from '@mui/material';
import {call} from "./service/ApiService.js"

class App extends React.Component {

  componentDidMount() {
    call("/todo", "GET", null).then((response) => {
      this.setState({items:response.date})
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      items: [{id: 0, title: "Hello World 1", done: true},
              {id: 1, title: "Hello World 2", done: false}]
    }
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) => {
      this.setState({items: response.data})
    })
  }

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) => {
      this.setState({items: response.data})
    })
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{"margin": "16"}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} update={this.update}/>
          ))}
        </List>
      </Paper>
    );
    
    return (
      <Router>
        <div className="App">
          <Container maxWidth="md">
              <AddTodo add={this.add}/>
              <div className="TodoList">{todoItems}</div>
          </Container>
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
