import React, {Component} from 'react';

class Form extends Component {


    render() {
        return (
            <div className="Form">
                <form  onSubmit={(evt) => this.props.handleSubmit(evt)}>
                    <input type="text" placeholder="add Task"
                           onChange={(evt) => this.props.handleChange(evt)}
                           value={this.props.inputValue}
                    />
                </form>
            </div>
        )
    }
}

export default Form;