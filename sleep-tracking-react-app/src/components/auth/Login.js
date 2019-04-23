import React from 'react'
import axios from 'axios'

import { Link, withRouter } from 'react-router-dom'
import axiosConfig from './axiosConfig.js'
import { apiUri } from './globalVariables.js'
// import axiosConfig from './axiosConfig.js'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = e => {
        e.preventDefault()

        axios
        .post(`${apiUri}/auth/login`, this.state, axiosConfig)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/users')
        })
        .catch(error => console.log(error))
    }



    render() {
        return(
            <div className='forms'>
                <form onSubmit={this.submit}>
                    <div className='credentials'>Type Your Credentials!</div>
                    <input 
                      placeholder='E-mail'
                      value={this.state.email}
                      name='email'
                      onChange={this.changeInput}
                    /> 
                    <input 
                      placeholder='Password'
                      value={this.state.password}
                      name='password'
                      onChange={this.changeInput}
                    />
                    <div className='buttons'>
                        <button>Submit</button>
                            &nbsp;  &nbsp;
                        <Link to='/signup'><button>Sign Up</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(Login) 