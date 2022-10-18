export function UserProfile({ deleteUser, user }) {
    return (
        <div className='user__profile'>
            <div className='user__img'>
                <img src={user.avatar_url} alt='' />
            </div>

            <div className='user__info'>
                <h3>{user.name}</h3>
                <a href={user.html_url}>@{user.login}</a>
            </div>

            <button onClick={deleteUser}>Delete User</button>
        </div>
    )
}