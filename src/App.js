import { useState } from 'react'
import './styles'

function Form({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='username' placeholder='Aa' />
            <button>Add User</button>
        </form>
    )
}

function User({ user, deleteUser }) {
    return (
        <div className='user__profile'>
            <div className='user__img'>
                <img src={user.avatar_url} alt='' />
            </div>

            <div className='user__info'>
                <h3>{user.name}</h3>
                <p>@{user.login}</p>
                <button onClick={deleteUser}>Delete User</button>
            </div>
        </div>
    )
}

export default function App() {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')

    const handleSubmit = e => {
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username')

        if (!username) return

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.ok && res.json())
        .then(user => setUsers(oldUsers => [...oldUsers, user]))

        e.preventDefault()
    }

    const handleClick = target => setUsers(users.filter(user => target !== user))

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className='wrapper flex'>
            <div>
                <input type='search' onChange={({ currentTarget }) => setQuery(currentTarget.value)} placeholder='Search Users' />
                
                <div className='users__container'>
                    {filteredUsers.map((user, i) => (
                        <User key={i} user={user} deleteUser={() => handleClick(user)} />
                    ))}
                </div>
            </div>

            <Form onSubmit={handleSubmit} />
        </div>
    )
}