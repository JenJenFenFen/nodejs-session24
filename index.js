const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()

const port = process.env.PORT

const createUser = require('./routes/createUserRoute')

app.use(express.json())
app.use(express.urlencoded({ 
    extended: true 
}))
app.use(cors({ 
    origin: true,
    credentials: true
}))

app.use(createUser)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
})