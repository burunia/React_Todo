/**
 * Created by krzysiek on 11/12/2017.
 */
import React, {Component} from 'react'
import DeleteIcon from 'material-ui-icons/Delete';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const style = {
    checked: {
        textDecoration: 'line-through',

    },
    unChecked: {
        color: 'green',

    },

}

class Task extends Component {
    state = {
        direction: 'row',
        justify: 'space-between',
        alignItems: 'space-between',
    }


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false
        }
    }

    handleChange(event) {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <div className="Task" style={{display: "block", height: 60, paddingTop: 30}}>
                <Checkbox style={{float: 'left', marginTop: -10}} type="checkbox" onChange={this.handleChange}/>
                <span style={this.state.checked ? style.checked : style.unChecked}>
          {this.props.label}
                    {this.props.todo.value}</span>
                <Tooltip id="tooltip-icon" title="Delete" placement="bottom">
                    <IconButton style={{float: "right", marginTop: -10}} aria-label="Delete">
                        <DeleteIcon onClick={() => this.props.removeMe(this.props.index)}/>
                    </IconButton>
                </Tooltip>
                <Divider style={{marginTop: 35}}/>
            </div>
        )
    }

}

export default Task;
