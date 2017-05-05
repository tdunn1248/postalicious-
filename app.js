const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('index')
})

app.post('/request/build', function(req, res) {
  // request info from external server
  // get the host from the fetch
  let bod;
  request(req.body.host, function(error, res, body) {
    // return the info from external server to your front end
    bod = body
  })
  res.render('index', {reqBody: JSON.stringify(bod)})
  res.redirect('/')
})

app.listen(3001, function() {
  console.log('Example app listening on port 3001!!!!')
})
