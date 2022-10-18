import React from "react"

export function UsersList(props) {
    const list = props.list

    return (
        <div className='users__list'>
            {list.map((user, i) => (<React.Fragment key={i}>{props.children(user)}</React.Fragment>))}
        </div>
    )
}