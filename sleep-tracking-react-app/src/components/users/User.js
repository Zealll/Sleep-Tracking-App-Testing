import React from 'react'
import axios from 'axios'
import { apiUri } from '../auth/globalVariables.js'

import axiosConfig from '../auth/axiosConfig.js'


class User extends React.Component {
    constructor() {
        super()
        this.state = {
            user: []
        }
    }


    componentDidMount() {
        axios
        .get(`${apiUri}/users`, axiosConfig)
        .then(response => this.setState({user: response.data}))
        .catch(error => this.setState({error: error}))
    }


    render() {
        return(
            <div className='row'>
                {this.state.user.map(user => (
                    <div key={user.id}>
                        {user.name}
                        {user.email}
                    </div>
                ))}
            </div>
        )
    }
}

export default User