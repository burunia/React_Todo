import React, {Component} from 'react';
import '../App.css';
import  Form from './Form';
import  List from './List';

class App extends Component {

    state = {
        inputValue: "",
        todos: [
            {value: 'Naumiej  się Reacta', done: false},
            {value: 'Pucuj trzewiki ', done: true},
        ]
    }
    handleChange = (evt) => {
        this.setState({inputValue: evt.target.value});
    }
    removeMe = (index) =>{
        this.setState({
            todos: this.state.todos.filter((_, i) => i !== index)
        })

    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = {
            value: this.state.inputValue
        };
        const todos = this.state.todos;
        todos.push(newTodo);
        this.setState({todos: todos, inputValue: ''})

    }

    render() {
        return (
            <div className="App">
                <Form
                    handleChange={this.handleChange}
                    inputValue={this.state.inputValue}
                    handleSubmit={this.handleSubmit}
                />
                <List
                    removeMe={this.removeMe}
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App;
