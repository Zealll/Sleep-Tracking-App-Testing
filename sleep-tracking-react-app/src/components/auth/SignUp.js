import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { apiUri } from './globalVariables.js'
import axiosConfig from './axiosConfig.js'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            name: '',
            lastName: '',
            age: null,
            password: ''
        }
    }

    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = e => {
        e.preventDefault()

        axios
        .post(`${apiUri}/auth/register`, this.state)
        .then(response => console.log(response))
    }



    render() {
        return(
            <div className='forms'>
                <form onSubmit={this.submit}>
                    <div className='credentials'>Type Your Credentials!</div>
                    <input 
                      value={this.state.email}
                      placeholder='E-mail'
                      name='email'
                      onChange={this.changeInput}
                    />
                    <input 
                      value={this.state.name}
                      placeholder='Name'
                      name='name'
                      onChange={this.changeInput}/>
                    <input 
                      value={this.state.lastName}
                      placeholder='Last Name'
                      name='lastName'
                      onChange={this.changeInput}  
                    />
                    <input 
                      type='number'
                      value={this.state.age}
                      placeholder='Age'
                      name='age'
                      onChange={this.changeInput}
                    />
                    <input 
                      value={this.state.password}
                      placeholder='Password'
                      name='password'
                      onChange={this.changeInput}
                    />
                    <button>Submit</button>
                    <Link to='/'><button>back to Log In</button></Link>
                </form>
            </div>
        )
    }
}


export default SignUp