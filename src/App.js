import React from 'react'
import { User } from './User'
import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }

    render() {
        const { user } = this.state

        return (
            <div className='wrapper'>
                {user && (<User user={user} />)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.github.com/users/hamdi4-beep')
        .then(res => res.ok && res.json())
        .then(user => this.setState({ user }))
    }
}