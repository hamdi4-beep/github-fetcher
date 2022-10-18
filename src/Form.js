export function Form({ data: [users, setUsers] }) {
    const handleSubmit = e => {
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username') // holds the username value

        const { currentTarget: [input] } = e // grabs the text input element

        if (!username) return

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.ok && res.json())
        .then(user => setUsers([...users, user]))

        input.value = ''

        e.preventDefault()
    }

    return (
        <form action='/' onSubmit={handleSubmit}>
            <input type='text' name='username' placeholder='Aa' />
            <button>Add User</button>
        </form>
    )
}