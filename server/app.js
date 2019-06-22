const express = require('express')
const path = require('path')

const app = express()

// set the port
app.set('port', 3000)

// tell express that we want to use the public folder
// for our static content
app.use(express.static(path.join(__dirname, '../public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// enable cors
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept')
  next()
})

// Listen for requests
app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'))
})
