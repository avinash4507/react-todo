var React = require('react');

var Todo = React.createClass({
    render: function () {
        let {id, task, completed} = this.props;
        return (
            <div onClick={() => this.props.onToggle(id)}>
                <input type="checkbox" checked={completed}/> {task}
            </div>
        );
    }
});

module.exports = Todo;