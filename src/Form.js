export function Form(props) {
    return (
        <form action='/' method='POST' onSubmit={props.onSubmit}>
            <input type='text' name='image_url' placeholder='Aa' />
            <button>Submit</button>
        </form>
    )
}