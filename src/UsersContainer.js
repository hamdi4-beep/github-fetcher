import { useState } from "react";

import { Form } from "./Form";
import { UsersList } from './UsersList'
import { UserProfile } from "./UserProfile";

export function UsersContainer() {
    const [users, setUsers] = useState([])

    const handleDeleteUserClick = target => setUsers(users.filter(user => user !== target))

    return (
        <div className='users__container'>
            <Form data={[users, setUsers]} />

            {users.length > 0 && (
                <UsersList list={users}>
                    {user => (<UserProfile deleteUser={() => handleDeleteUserClick(user)} user={user} />)}
                </UsersList>
            )}
        </div>
    )
}