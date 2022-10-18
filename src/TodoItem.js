export function TodoItem({ deleteItem, item }) {
    return (
        <li>
            {item}
            <button onClick={deleteItem}>Delete Item</button>
        </li>
    )
}