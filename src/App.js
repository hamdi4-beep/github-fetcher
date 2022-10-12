import React from 'react'
import { User } from './User'
import './App.css'

function uploadImg(addImg) {
    const input = document.createElement('input')

    input.type = 'file'
    input.click()

    input.onchange = e => {
        if (input.files[0]) {
            const file = input.files[0]
            const type = file.type

            if (type.split('/')[0] !== 'image') return

            addImg(URL.createObjectURL(file))
        }
    }

    input.remove()
}

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    render() {
        const { user } = this.state

        return (
            <div className='wrapper'>
                {user && (
                    <User user={user}>
                        <div className='user-img' onClick={e => this.handleClick(e)}>
                            <img src={user.avatar_url} alt='' />
                        </div>
                    </User>
                )}
            </div>
        )
    }

    handleClick(e) {
        const userImg = e.currentTarget

        uploadImg(URL => {
            this.setState(prevState => ({
                user: {
                    ...prevState.user,
                    avatar_url: URL
                }
            }))

            if (!userImg.classList.contains('pause')) userImg.classList.add('pause')
        })

        if (!userImg.classList.contains('spin')) userImg.classList.add('spin')
        if (userImg.classList.contains('pause')) userImg.classList.remove('pause')
    }

    componentDidMount() {
        fetch('https://api.github.com/users/hamdi4-beep')
        .then(res => res.ok && res.json())
        .then(user => this.setState({ user }))
    }
}