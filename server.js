const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// app.get('/', (req, res) => {
//     res.send('It is working')
// })

const twitter = require('./login/twitter')(app)

var userrouter = require('./router/user')
var adminrouter = require('./router/admin')

app.use('/', userrouter)
app.use('/', adminrouter)

app.listen(3000, () => {
    console.log('listening on 3000')
})
