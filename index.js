const express = require('express')
const cors = require('cors')
const authMiddleware = require('./auth-middleware')

const app = express()

app.use(cors())

app.use('/', authMiddleware)

app.get('/books', (req, res) => {
    return res.send({
        books: [
            {
                id: 1,
                name: 'Harry Potter'
            },
            {
                id: 2,
                name: 'Clean Code'
            },
            {
                id: 3,
                name: 'Javascript'
            },
        ]
    })
})

app.listen(4000, () => console.log('Server running at PORT 4000'))