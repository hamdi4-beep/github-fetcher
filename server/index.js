const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const PORT = 3001

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '..', 'views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    const data = JSON.stringify(req.body)
    
    fs.writeFile('../db/database.json', data, err => {
        if (err) {
            console.log(err)
        }
    })

    res.end()
})

app.get('/', (req, res) => res.render('index'))

app.get('/api', (req, res) => {
    fs.readFile('../db/database.json', (err, data) => {
        if (err) {
            console.log(err)
        }

        data = JSON.parse(data)

        res.json(data)
    })
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))