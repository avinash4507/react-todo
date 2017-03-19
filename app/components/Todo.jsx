var React = require('react');

var Todo = React.createClass({
    render: function () {
        let {id, task} = this.props;
        return (
            <div>
                {id}. {task}
            </div>
        );
    }
});

module.exports = Todo;