import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        &, h1, h2, h3, p {
            margin: 0;
            padding: 0;
        }
    }
`

const Wrapper = styled.div`
    background: #E6E6E6;
    padding: 3em 2em;
    display: grid;
    justify-content: center;
`

const UserProfile = styled.div`
    display: flex;
    gap: 1rem;
    padding-bottom: 1em;
    border-bottom: 1px solid black;
`

const UserImg = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
`

const Img = styled.img`
    display: block;
    max-width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
`

const Button = styled.button`
    display: block;
    font: inherit;
    margin-top: 1em;
    padding: .5em 1em;
    background-color: ${props => (props.backgroundColor)};
    color: ${props => (props.backgroundColor === 'black' ? 'white' : 'black')};
    border: none;
    outline: none;
    border-radius: 15px;
`

export
{
    GlobalStyle,
    Wrapper,
    UserProfile,
    UserImg,
    Img,
    Button
}