import React, {Component} from 'react';
import  Task from './Task';
import Typography from 'material-ui/Typography';
class List extends Component {


    render() {
        let serchedTasks = this.props.todos.filter(
            (todos) => {
                return todos.value.indexOf(this.props.query) !== -1;
            }
        );
        return (
            <div className="List" >
                {serchedTasks.map((todo, index) => {
                    return (
                        <Typography type="body2" color="blue" >
                        <Task
                            key={index}
                            index={index}
                            removeMe={this.props.removeMe}
                            todo={todo}
                        />
                        </Typography>
                    )
                })}

            </div>
        )
    }
}
export default List;
