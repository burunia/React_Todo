import React, {Component} from 'react';

import  Task from './Task';

class List extends Component {

    state = {
        todos: [
            {value: 'Naumiej  się Reacta', done: false},
            {value: 'Pucuj trzewiki ', done: true},
        ]
    }

    render() {
        return (
            <div className="List">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Task
                            key={index}
                            index={index}
                            removeMe={this.props.removeMe}
                            todo={todo}
                        />
                    )
                })}

            </div>
        )
    }
}
export default List;