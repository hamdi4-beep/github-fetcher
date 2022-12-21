import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import './styles'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    background: #fbfaf5;
    width: 100%;
    max-width: 48rem;
    min-height: 100vh;
    overflow: hidden;
    margin-inline: auto;
`

function Container({ children }) {
    const [list, setList] = useState(['Minimalistic', 'UI/UX'])
    const inputRef = useRef(null)
    const ulRef = useRef(null)

    const handleSubmit = e => {
        const input = inputRef.current
        const item = input.value

        setList([...list, item])
        input.value = ''

        e.preventDefault()
    }

    const deleteItem = id => {
        const filtered = list.filter((item, i) => id !== i)
        setList(filtered)
    }

    return (
        <div className='list-container'>
            <ul ref={ulRef}>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Aa' ref={inputRef} />
                </form>

                <div className='items-list'>
                    {(list.length > 0 && list.map((item, i) => (
                        <li onClick={() => deleteItem(i)} key={i}>
                            {item}
                        </li>
                    ))) || <li className='empty'>No more items.</li>}

                    {children(ulRef)}
                </div>
            </ul>
        </div>
    )
}

export default function App() {
    const handleClick = ({ target }, ref) => {
        const ul = ref.current
        ul.className = target.classList[1]
    }

    return (
        <Wrapper>
            <div className='cover-img'>
                <img src='https://media.tenor.com/DO1dJzsv2MQAAAAC/aesthetic-aesthetic-background.gif' alt='product cover' />
            </div>

            <Container>
                {ref => (
                    <div className='colors-container'>
                        <div className='color one' onClick={e => handleClick(e, ref)}></div>
                        <div className='color two' onClick={e => handleClick(e, ref)}></div>
                        <div className='color three' onClick={e => handleClick(e, ref)}></div>
                        <div className='color four' onClick={e => handleClick(e, ref)}></div>
                    </div>
                )}
            </Container>
        </Wrapper>
    )
}