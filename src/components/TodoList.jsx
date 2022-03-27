import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = React.useState([])

    function addTodo(todo){
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    function updateTodo(todoId, newValue){
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
    }

    function removeTodo(id){
        let removeArr = [...todos].filter(todo => todo.id !== id);
        
        setTodos(removeArr);
    }

    function completeTodo(id){
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Plans for today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos} 
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList