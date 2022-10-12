export function User(props) {
    const user = props.user

    const handleClick = e => {
        const userImg = document.querySelector('.user-img')
        
        if (!userImg.classList.contains('spin')) userImg.classList.add('spin')
        if (userImg.classList.contains('pause')) userImg.classList.remove('pause')

        uploadImg(url => {
            const img = userImg.querySelector('img')

            img.src = url
            img.onload = function() {
                userImg.classList.add('pause')
            }
        })
    }

    return (
        <div className='user-wrapper'>
            <div className='user-profile'>
                <div className='user-img'>
                    <img src={user.avatar_url} alt='' />
                </div>

                <div className='user-info'>
                    <h3>{user.name}</h3>
                    <p>@{user.login}</p>
                </div>
            </div>

            <button onClick={handleClick}>Change Profile Picture</button>
        </div>
    )
}

function uploadImg(addImg) {
    const input = document.createElement('input')
    input.type = 'file'
    input.click()

    input.onchange = function(e) {
        if (this.files[0]) {
            const file = this.files[0]
            const type = file.type
            const url = URL.createObjectURL(file)

            if (type.split('/')[0] !== 'image') return

            addImg(url)
        }
    }

    input.remove()
}