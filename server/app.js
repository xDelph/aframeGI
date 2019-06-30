const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const api = require('./api')

const app = express()

// set the port
app.set('port', 3000)

// enable cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/google', api.queryGoogle)
app.post('/api/unsplash', api.queryUnsplash)
app.get('/api/image', api.getImage)

// tell express that we want to use the public folder
// for our static content
app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Listen for requests
app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})
