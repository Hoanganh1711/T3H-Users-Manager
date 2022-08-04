import React, { useState } from 'react'
import { Button, Input } from 'antd';

const TodoList = () => {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const handeInput = (e) => {
        setTodo(e.target.value)
    }

    const addToDo = () => {
        setTodoList(prev => [...prev, todo])
    }

    return (
        <div style={{ margin: "auto" }}>
            <h2>TODO LIST</h2>
            <Input.Group compact>
                <Input style={{ width: 300 }} onChange={handeInput}/>
                <Button type="primary" onClick={addToDo}>Submit</Button>
            </Input.Group>
            <ul className='todo-list'>
                {todoList.map((todo, index) => {
                    <li key={index}>{todo}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList