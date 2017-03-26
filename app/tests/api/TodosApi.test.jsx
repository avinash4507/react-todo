var React = require('react');
var expect = require('expect');
var TodosApi = require('TodosApi');

describe('TodosApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    })
    it('should exist', () => {
        expect(TodosApi).toExist();
    });

    describe('setTodos', () => {
        it('should set todos in localstorage if valid', () => {
            let todo = [
                {
                    id: 1,
                    task: 'hunter',
                    completed: false
                }
            ];
            TodosApi.setTodo(todo);
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toEqual(todo);
        });

        it('should not set invalid todos array', () => {
            let todo = {
                a: 'a'
            };
            TodosApi.setTodo(todo);
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toBe(null);
        })
    });
    describe('getTodos', () => {
        it('should get empty todos fropm localstorage if no data', () => {
            let expectedTodo = JSON.parse(localStorage.getItem('todos'));
            expect(expectedTodo).toEqual(null);
        });

        it('should get todos array if valid data', () => {
            let todo = [
                {
                    id: 1,
                    task: 'hunter',
                    completed: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todo));
            let expectedTodo = TodosApi.getTodo();
            expect(expectedTodo).toEqual(todo);
        })
    });
})