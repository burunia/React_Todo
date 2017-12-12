import React, {Component} from 'react';
import '../App.css';
import  Form from './Form';
import  List from './List';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        width: '100%',
    },
};

class App extends Component {

    state = {
        query: '',
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

    searchChanged = (evt) => {
        this.setState({query: evt.target.value})
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
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            <input type="text" placeholder="Search..." onChange={this.searchChanged} />
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List
                    removeMe={this.removeMe}
                    todos={this.state.todos}
                    query={this.state.query}
                />
                <Form
                    handleChange={this.handleChange}
                    inputValue={this.state.inputValue}
                    handleSubmit={this.handleSubmit}

                />
            </div>
        );
    }
}

export default App;

