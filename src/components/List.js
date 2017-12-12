import React, {Component} from 'react';
import  Task from './Task';
class List extends Component {

    render() {
        let serchedTasks = this.props.todos.filter(
            (todos) => {
                return todos.value.indexOf(this.props.query) !== -1;
            }
        );
        return (
            <div className="List">
                {serchedTasks.map((todo, index) => {
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