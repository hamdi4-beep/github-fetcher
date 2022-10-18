import React from 'react'

export function TodoList(props) {
    const list = props.list

    return (
        <ul>
            {list.map((item, i) => (<React.Fragment key={i}>{props.children(item)}</React.Fragment>))}
        </ul>
    )
}