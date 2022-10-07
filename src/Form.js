import React from "react";

export class Form extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.onSubmit} action='#'>
                    <input type='text' name='username' placeholder='Aa' />
                </form>
            </React.Fragment>
        )
    }
}