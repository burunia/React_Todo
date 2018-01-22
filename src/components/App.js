import React, {Component} from 'react';
import '../App.css';
import Form from './Form';
import List from './List';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';


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
            <Grid item xs={12} style={{ padding: 30 }}>
                <div className="App" >
                    <Typography type="body1'" color="inherit" text-align='left'>
                    <AppBar position="static" color="default" >
                        <Toolbar>

                                <TextField style={{ float: 'left' }}
                                    placeholder="Add Task ..."
                                      handleChange={this.handleChange}
                                      inputValue={this.state.inputValue}
                                      handleSubmit={this.handleSubmit}
                                >
                                </TextField>
                                <TextField  ype="text" placeholder="Search..." onChange={this.searchChanged}/>

                        </Toolbar>
                    </AppBar>
                    </Typography>
                    <Paper>

                        <List style={{ float: 'left' }}
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

