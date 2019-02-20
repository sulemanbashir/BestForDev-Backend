const express = require('express')
const cors = require('cors')
const twitterAPI = require('node-twitter-api')
const secrets = require('./controllers/secrets')
const { consumerKey, consumerSecret, callbackURL, databaseURL } = secrets
const twitter = new twitterAPI({
    consumerKey: consumerKey,
    consumerSecret: consumerSecret,
    callback: callbackURL,
})
const db = require('knex')({
    client: 'pg',
    connection: {
        connectionString: databaseURL,
        ssl: true,
    },
})

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
