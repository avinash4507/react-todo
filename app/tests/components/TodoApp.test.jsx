var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add a todo to todos on clicking add todo', () => {
        let newTask = 'hii baby';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: []
        })
        todoApp.handleAddTodo(newTask);

        expect(todoApp.state.todos[0].task).toBe(newTask);
    });
})