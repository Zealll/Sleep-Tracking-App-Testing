const jsonWT = require('jsonwebtoken')
const secrets = require('../config/secrets.js')


function generateToken(user) {
    const payload = {
        subject: user.id,
        email: user.email
    }

    const options = {
        expiresIn: '1d'
    }

    return jsonWT.sign(payload, secrets.jwtSecret, options)
}


module.exports = {
    generateToken
}