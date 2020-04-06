import React from 'react';
import './App.css';

import Header from './header/header.component';
import Lista from './lista/lista.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      input:'',
      messages: [],
      complete: []
    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.completedTodo = this.completedTodo.bind(this);
  }

  completedTodo = (index) => {
    this.state.complete[index] = !this.state.complete[index];
    this.setState({
      complete: this.state.complete
    });
  }


  deleteTodo = (index) => {
    this.state.complete.splice(index,1);
    this.state.messages.splice(index,1);
    this.setState({
      messages: this.state.messages,
      complete: this.state.complete
     });
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  };

  handleSubmit =  (event)  =>{
    event.preventDefault();
    this.state.input.length ?
    this.setState({
    messages: [...this.state.messages,this.state.input],
    input:'',
    complete:[...this.state.complete, false]
    })
    :
    this.setState({
      messages:[...this.state.messages]
    })
  };


  render() {
    return(
        <div className="App">
          <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.input} />
          <Lista messages={this.state.messages} 
          deleteTodo={this.deleteTodo} 
          completedTodo={this.completedTodo} 
          completed={this.state.complete}
          />


    </div>
    );
}
}


export default App;