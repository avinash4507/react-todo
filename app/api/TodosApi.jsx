var $ = require('jQuery');
module.exports = {
    setTodo: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodo: function() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        
        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {
            
        }

        return $.isArray(todos) ? todos : [];
    }
}