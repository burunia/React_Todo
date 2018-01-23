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

        if (evt.keyCode === 13 && this.state.inputValue) {
            const newTodo = {
                value: this.state.inputValue,
                done: false
            };
            const todos = this.state.todos.concat(newTodo);
            this.setState({todos: todos, inputValue: ''})
        }
    }

    render() {

        const styleGrid = {
            padding: 30,
            display: 'flex'
        };
        const styleTextField = {
            float: 'left',
            paddingRight: 40,
        };
        const styleAppBar = {
            flexDirection: 'center'
        };
        const styleList = {
            marginTop: 90
        };

        return (
            <Grid item xs={12} style={styleGrid}>
                <div className="App">
                    <Typography type="body1'" color="inherit" text-align='left'>
                        <AppBar position="static" color="default" style={styleAppBar}>
                            <Toolbar>
                                <TextField
                                    style={styleTextField}
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
                        <List style={styleList}
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