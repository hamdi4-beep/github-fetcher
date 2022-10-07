import React from 'react'

export class Profile extends React.Component {
    render() {
        const user = this.props.user

        return (
            <div className='user-profile'>
                <div className='user-img'>
                    <img src={user.avatar_url} alt='' />
                </div>

                <div className='profile-info'>
                    <h3>{user.name}</h3>
                    <p>@{user.login}</p>
                </div>
            </div>
        )
    }
}