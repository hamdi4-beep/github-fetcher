import styled, { createGlobalStyle } from "styled-components"
import { useState } from 'react'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

const Container = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: grid;
    place-items: center;
    background: black;
    color: white;
    padding: 5em;
    padding-bottom: ${props => props.paddingBottom};
    transition: padding-bottom 500ms ease;
`

const HeaderText = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1em;
    line-height: 1;
`

const InputText = styled.input`
    font: inherit;
    background: #222;
    color: white;
    margin-bottom: 1.3em;
    padding: .5em 1em;
    outline: none;
    border: none;
    border-radius: 10px;
`

const Square = styled.div`
    background: ${props => props.color};
    width: 10rem;
    height: 10rem;
    margin-top: 2em;
    margin-inline: auto;
`

export default function App() {
    const [paddingBottom, setPaddingBottom] = useState('1em')
    const [color, setColor] = useState('yellow')

    const handleRangeChange = ({ value }) => setPaddingBottom(`${value}em`)
    const handleTextChange = ({ value }) => setColor(value.replace(/\s/, ''))

    return (
        <div className='wrapper'>
            <GlobalStyle />

            <Container paddingBottom={paddingBottom}>
                <HeaderText>Design Pattern</HeaderText>
                <InputText onChange={({ currentTarget }) => handleTextChange(currentTarget)} placeholder='Aa' />
                <input type='range' onChange={({ currentTarget }) => handleRangeChange(currentTarget)} min='1' max='10' />
            </Container>

            <Square color={color}></Square>
        </div>
    )
}