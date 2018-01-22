import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import List from './List';
import '../App.css';

class App extends Component {

    state = {
        query: '',
        inputValue: '',
        todos: [
            {value: 'Naumiej  się Reacta', done: false},
            {value: 'Pucuj trzewiki ', done: true},
        ],
        direction: 'row',
        justify: 'left',
        alignItems: 'left',
    }

    handleChange = (evt) => {
        this.setState({inputValue: evt.target.value});
    }

    removeMe = (index) => {
        this.setState({
            todos: this.state.todos.filter((_, i) => i !== index)
        })
    }

    searchChanged = (evt) => {
        this.setState({query: evt.target.value})
    }

    handleSubmit = (evt) => {
        if (evt.keyCode === 13) {
            const newTodo = {
                value: this.state.inputValue,
                done: false
            };
            const todos = this.state.todos.concat(newTodo);
            this.setState({todos: todos, inputValue: ''})
        }
    }

    render() {
        return (
            <Grid item xs={12} style={{padding: 30, display: 'flex'}}>
                <div className="App">
                    <Typography type="body1'" color="inherit" text-align='left'>
                        <AppBar position="static" color="default" style={{flexDirection: 'center'}}>
                            <Toolbar>
                                <TextField
                                    style={{float: 'left', paddingRight: 40,}}
                                    placeholder="Add Task ..."
                                    onChange={this.handleChange}
                                    inputValue={this.state.inputValue}
                                    onKeyDown={this.handleSubmit}
                                >
                                </TextField>
                                <TextField ype="text" placeholder="Search..." onChange={this.searchChanged}/>

                            </Toolbar>
                        </AppBar>
                    </Typography>
                    <Paper>
                        <List style={{marginTop: 90}}
                              removeMe={this.removeMe}
                              todos={this.state.todos}
                              query={this.state.query}
                        />
                    </Paper>
                </div>
            </Grid>
        );
    }
}

export default App;