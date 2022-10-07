import React from 'react'

import { User } from './User'
import { Form } from './Form'

import './App.css'

class UsersContainer extends React.Component {
    render() {
        return (
            <div className='users-container'>
                {this.props.children()}
            </div>
        )
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        const { users } = this.state

        return (
            <div className='wrapper'>
                <Form onSubmit={this.handleSubmit} />

                <UsersContainer>
                    {() => users.map((user, i) => {
                        return (<User user={user} key={i} />)
                    })}
                </UsersContainer>
            </div>
        )
    }

    handleSubmit(e) {
        const { currentTarget } = e
        const { users } = this.state
        const { fetchData } = this

        const formData = new FormData(currentTarget)
        const username = formData.get('username')

        fetchData(`https://api.github.com/users/${username}`)
        .then(user => this.setState({
            users: [...users, user]
        }))

        currentTarget.username.value = ''

        e.preventDefault()
    }

    async fetchData(URL) {
        const res = await fetch(URL)
        const body = await res.json()

        return body
    }
}