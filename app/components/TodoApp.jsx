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
                    task: 'Walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    task: 'Clean the yard',
                    completed: true
                }, {
                    id: uuid(),
                    task: 'Leave mail on porch',
                    completed: true
                }, {
                    id: uuid(),
                    task: 'Play video games',
                    completed: false
                }
            ]
        }
    },
    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({
            todos: updatedTodos
        })
    },
    handleAddTodo: function (task) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    task: task,
                    completed: false
                }
            ]
        })
    },
    handleSearch: function (searchText, showCompleted) {
        this.setState({searchText: searchText.toLowerCase(), showCompleted: showCompleted})
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch handleSearch={this.handleSearch}></TodoSearch>
                <TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
                <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
            </div>
        );
    }
});

module.exports = TodoApp;