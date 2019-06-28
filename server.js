const express = require('express')
const mongoos = require('mongoose')

const app = express()

app.get('/', function(req, res) {
    res.send('ok')
})

app.post('/api/register', function(req, res) {
    res.send('register')
})

app.listen('3000', () => {
    console.log('http://localhost:3000/')
})