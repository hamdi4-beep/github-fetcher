const React = require('react')

export function Form(props) {
    return (
        <React.Fragment>
            <form action='/' method='POST' onSubmit={props.onSubmit}>
                <input type='text' name='image_url' placeholder='Aa' />
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}