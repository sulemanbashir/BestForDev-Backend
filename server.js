const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const twitter = require('./login/twitter')(app)
const users = require('./controllers/users')(app)
// const database = require('./database/quries')(app)

//admin section, using a subapp
const admin_app = express()

const admin = require('./controllers/admin')(admin_app)

app.use(['/mod', '/admin'], admin_app)

app.listen(3000, () => {
    console.log('listening on 3000')
})
