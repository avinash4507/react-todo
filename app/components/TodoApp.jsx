var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: [
                {
                    id: 1,
                    task: 'Walk the dog'
                },
                {
                    id: 2,
                    task: 'Clean the yard'
                },
                {
                    id: 3,
                    task: 'Leave mail on porch'
                },
                {
                    id: 4,
                    task: 'Play video games'
                }
            ]
        }
    },
    handleAddTodo: function (task) {
        alert('the task is: ' + task);
    },
    handleSearch: function (searchText, showCompleted) {
        this.setState({
            searchText: searchText,
            showCompleted: showCompleted
        })
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch handleSearch={this.handleSearch}></TodoSearch>
                <TodoList todos={todos}></TodoList>
                <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
            </div>
        );
    }
});

module.exports = TodoApp;