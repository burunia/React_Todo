/**
 * Created by krzysiek on 11/12/2017.
 */
import React, {Component} from 'react'
import DeleteIcon from 'material-ui-icons/Delete';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

const style = {
    checked: {
        textDecoration: 'line-through'
    },
    unChecked: {
        color: 'green'
    }
}

class Task extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }
    handleChange(event) {
        this.setState({ checked: event.target.checked });
    }


render()
{
    return (
        <div className="Task">
            <input type="checkbox" onChange={this.handleChange}/>
            <span style={this.state.checked ? style.checked : style.unChecked}>
          {this.props.label}
                {this.props.todo.value}</span>
            <Tooltip id="tooltip-icon" title="Delete" placement="bottom">
                <IconButton aria-label="Delete">
                    <DeleteIcon onClick={() => this.props.removeMe(this.props.index)}/>
                </IconButton>
            </Tooltip>
        </div>
    )
}

}

export default Task;
