import { useState } from "react"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { Form } from "./Form"

export function TodosContainer() {
    const [items, setItems] = useState([])

    const handleSubmit = e => {
        const formData = new FormData(e.currentTarget)
        const todo_item = formData.get('todo-item')

        if (!todo_item) return

        setItems(Array.from(new Set([...items, todo_item])))

        e.currentTarget['todo-item'].value = ''

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