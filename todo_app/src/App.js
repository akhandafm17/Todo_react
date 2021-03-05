import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  //state = short term memory
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    //order todo by timestamp
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //geef todo terug van firebase firestore
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []) 

  const addTodo = (event) => {
    //stop refresh
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //clear input after submitting
    setInput('');


  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
      </form>
      {/*<input value={input} onChange={event => setInput(event.target.value)}/>*/}
      <Button disabled={!input} variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
         // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
