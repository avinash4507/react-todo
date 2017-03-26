var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodosApi = require('TodosApi')

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            searchText: '',
            showCompleted: false,
            todos: TodosApi.getTodo()
        }
    },
    componentDidUpdate: function() {
        TodosApi.setTodo(this.state.todos)
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