import React from 'react'
import { Profile } from './Profile'

export class User extends React.Component {
    render() {
        const { user } = this.props

        return (
            <Profile user={user} />
        )
    }
}