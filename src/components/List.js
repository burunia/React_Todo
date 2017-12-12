import React, {Component} from 'react';
import  Task from './Task';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

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
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>                        <Task
                                    key={index}
                                    index={index}
                                    removeMe={this.props.removeMe}
                                    todo={todo}
                                /></Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel>
                    )
                })}

            </div>
        )
    }
}
export default List;
