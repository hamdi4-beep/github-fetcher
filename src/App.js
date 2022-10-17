import React, { useState } from 'react'
import './styles'
import { Form } from './Form'

function TodoList(props) {
    const list = props.list

    return (
        <ul>
            {list.map((item, i) => (<React.Fragment key={i}>{props.children(item)}</React.Fragment>))}
        </ul>
    )
}

function TodoItem({ deleteItem, item }) {
    return (
        <li>
            {item}
            <button onClick={deleteItem}>Delete Item</button>
        </li>
    )
}

function TodosContainer() {
    const [items, setItems] = useState([])

    const handleSubmit = e => {
        const formData = new FormData(e.currentTarget)
        const todo_item = formData.get('todo-item')

        if (!todo_item) return

        setItems(Array.from(new Set([...items, todo_item])))

        e.preventDefault()
    }

    const handleDeleteClick = (e, target) => {
        setItems(items.filter(item => !item.includes(target)))
    }

    return (
        <div className='todos__container'>
            <Form onSubmit={handleSubmit} />

            {items.length > 0 && (
                <TodoList list={items}>
                    {item => (<TodoItem deleteItem={e => handleDeleteClick(null, item)} item={item} />)}
                </TodoList>
            )}
        </div>
    )
}

export default function App() {
    return (
        <div className='wrapper'>
            <TodosContainer />
        </div>
    )
}