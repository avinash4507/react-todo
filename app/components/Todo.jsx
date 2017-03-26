var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function () {
        let {id, task, completed, createdAt, completedAt} = this.props;
        let renderDate = function () {
            let message = 'Created';
            let timeStamp = createdAt;
            if (completed) {
                message = 'Completed';
                timeStamp = completedAt;
            }
            return `${message} ${moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a')}`;
        };
        return (
            <div onClick={() => this.props.onToggle(id)}>
                <input type="checkbox" checked={completed}/>
                <p>{task}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;