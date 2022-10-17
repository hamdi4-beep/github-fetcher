export function Form({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} action='/'>
            <input type='text' name='todo-item' placeholder='Aa' />
            <button className='add-todo'>Create Todo</button>
        </form>
    )
}