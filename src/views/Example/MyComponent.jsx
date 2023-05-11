import React from 'react';

class MyComponent extends React.Component {

    state = {
        email: '',
        pw: ''
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.targer.value
        })
    }
    handleChangePassword = (event) => {
        this.setState({
            pw: event.targer.value
        })
    }

    render() {
        return (
            <>
                <div>
                    <form action="">
                        <label htmlFor="fname">Enter your email:</label><br />
                        <input type="text" value={this.state.email} onChange={(event) => this.handleChangeEmail(event)} placeholder='Enter your email' /><br />
                        <label htmlFor="lname">Enter your password:</label><br />
                        <input type="password" value={this.state.pw} onChange={(event) => this.handleChangePassword(event)} placeholder='Enter your password' /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </>

        )
    }
}

export default MyComponent