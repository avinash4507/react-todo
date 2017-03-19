var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: [
                {
                    id: uuid(),
                    task: 'Walk the dog'
                },
                {
                    id: uuid(),
                    task: 'Clean the yard'
                },
                {
                    id: uuid(),
                    task: 'Leave mail on porch'
                },
                {
                    id: uuid(),
                    task: 'Play video games'
                }
            ]
        }
    },
    handleAddTodo: function (task) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    task: task
                }
            ]
        })
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