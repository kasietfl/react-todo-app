import React from 'react'

function TodoForm(props) {
    const [input, setInput] = React.useState('')

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        inputRef.current.focus()
    })

    function handleChange(e){
        setInput(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
    
        setInput('');
    };

    

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Add a task'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                    autocomplete="off"
                />
                <button className='todo-button'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm