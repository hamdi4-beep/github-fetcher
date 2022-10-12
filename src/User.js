export function User(props) {
    const user = props.user

    return (
        <div className='user-wrapper'>
            <div className='user-profile'>
                {props.children}

                <div className='user-info'>
                    <h3>{user.name}</h3>
                    <p>@{user.login}</p>
                </div>
            </div>
        </div>
    )
}