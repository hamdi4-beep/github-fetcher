import React from 'react'
import { Form } from './Form'

import './App.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image_url: ''
        }
    }

    render() {
        const { image_url } = this.state

        return (
            <div className='wrapper'>
                <Form onSubmit={e => this.handleSubmit(e)}/>

                <div className='img-wrapper'>
                    <img src={image_url} alt='' />
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch('/api')
        .then(res => res.ok && res.json())
        .then(data => this.setState({ ...data }))
    }

    handleSubmit(e) {
        const formData = new FormData(e.currentTarget)
        const image_url = formData.get('image_url')

        console.log(image_url)

        e.preventDefault()

        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image_url })
        }).then(res => this.componentDidMount())
    }
}