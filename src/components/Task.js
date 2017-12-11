/**
 * Created by krzysiek on 11/12/2017.
 */
import React, {Component} from 'react'

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
            <button onClick={() => this.props.removeMe(this.props.index)}>Remove</button>
        </div>
    )
}

}

export default Task;