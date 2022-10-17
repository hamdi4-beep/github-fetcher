const express = require('express')
const fs = require('fs')

const app = express()

app.get('/', (req, res) => {
    fs.readFile('../db/users.json', (err, data) => {
        err && console.log(err)
        data = JSON.parse(data)

        res.json(data[0])
    })
})

app.get('/user', (req, res) => {
    fs.readFile('../db/users.json', (err, data) => {
        err && console.log(err)
        data = JSON.parse(data)

        res.json(data[0])
    })
})

app.listen(3001, () => console.log('Server is running at 3001'))