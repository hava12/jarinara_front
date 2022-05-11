import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import routes from "./routes";
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import { Paper, List, Container } from '@mui/material';

class App extends React.Component {

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json"}
    };

    fetch("http://localhost:8080/todo", requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            items: response.data,
          })
        },
        (error) => {
          this.setState({
            error,
          })
        }
      );
  }

  constructor(props) {
    super(props)
    this.state = {
      items: [{id: 0, title: "Hello World 1", done: true},
              {id: 1, title: "Hello World 2", done: false}]
    }
  }

  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; // key를 위한 id 추가
    item.done = false; // done 초기화
    thisItems.push(item); // 리스트에 아이템 추가
    this.setState({items: thisItems}); // 업데이트는 반드시 this.setState로 해야 함
    console.log("items : ", this.state.items);
  }

  delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items);
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items: newItems}, () => {
      console.log("Update Items : ", this.state.items);
    })
    
  }
  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{"margin": "16"}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
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
