const express = require('express')
const cors = require('cors')
const twitterAPI = require('node-twitter-api')
//const secret = require('secret')
//const twitter = new twitterAPI({
//     consumerKey: secret.consumerKey,
//     consumerSecret: secret.consumerSecret,
//     callback: secret.callback
// });
// knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'your_database_user',
//         password: 'your_database_password',
//         database: 'myapp_test',
//     },
// })

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('It is working')
})

app.get('/categories', (req, res) => {
    //code for categories
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    res.send(id)
    //code for returning the requested links
})

app.post('/add', (req, res) => {
    const { url, title, category, id } = req.body
    //code for add
})

app.get('/request-token', (req, res) => {
    //code for twitter's token request
})

app.get('/access-token', (req, res) => {
    //code for access-token and credentials verification
})

//admin section, using a subapp
const admin = express()

admin.get('/', (req, res) => {
    res.send('Inside admin')
})

admin.get('/proposed-links', (req, res) => {
    //code for proposed-links
})

admin.put('/approve', (req, res) => {
    //code for updating the database
})

admin.delete('/delete', (req, res) => {
    //code for deleting the link frm the database
})

app.use(['/mod', '/admin'], admin)

app.listen(3000, () => {
    console.log('listening on 3000')
})
