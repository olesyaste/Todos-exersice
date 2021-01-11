import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './components/Counter';
const axios = require('axios');

const list = ['test1', 'test2', 'test3'];

class App extends React.Component {
  state = {
    todos: []
  }

componentDidMount(){
axios.get(`https://jsonplaceholder.typicode.com/todos/`)
    .then(res => {
      const todos = res.data;
      console.log(todos)
      this.setState({ todos });
  })
}

render() {

  return (
    <>
    <Counter counter = {9} />
      <ul>
        {list.map(el => {
         return <li style={{color: 'green'}}>{el}</li>
        })}
      </ul>
      <ol>
        { this.state.todos.slice(0,10).map(todo =>
        <li style={{color: 'red'}} key={todo.id}>{todo.title}</li>) }
      </ol>
   </>
  );
 }
}
export default App;
