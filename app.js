const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const http = require('http')
const request = require('request')

// Instantiate app
const app = express()

// const path = require('path') ?
app.set('view engine', 'pug')

//configure middleware
app.use(express.static(__dirname + '/public'))
app.use(bodyParser())

// initial render of you home page
app.get('/', function(req, res) {
  res.render('index', { message: 'Hello' })
})
// wassup world
app.get('/send', function(req, res) {
  res.send('hello world')
})

// endpoint for buidling a HTTP request
app.post( '/request/build', function( req, res ) {
  let bod;
  const url = req.body.host
  res.send({ reqBody: JSON.stringify(req.body), reqBody: reqBody })
  res.redirect('/')
})


//http.createServer()
app.listen(3001, function() {
  console.log('Example app listening on port 3000!!!!')
})
