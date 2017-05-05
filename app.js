const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const http = require('http')
const request = require('request')
const beauty = require('pug-beautify')
// const path = require('path')


app.use(express.static(__dirname + '/public'))
app.set('view engine', beauty('pug'))
app.use(bodyParser())
//app.use(bodyParser().JSON())

// initial render of you home page
app.get('/', function(req, res) {
  res.render('index', { message: 'Hello' })
})

// endpoint for buidling a HTTP request
app.post( '/request/build', function( req, res ) {
  let bod;
  const url = req.body.host
  request(url , (error, response, body) => {
    bod = body
  })
  res.render('index', { reqBody: JSON.stringify(req.body), resBody: bod })
  res.redirect('/')
})

//how to connect html or how to ge the host and post into request?
//how to post all info into text area?

//post to database
//respond with the head and the body?
app.post('/send', function(req, res) {
  res.send('hello world')

  // const host = req.body.host
  // const method = req.body.method
  // request(host).pipe(res.send)
  // res.send(req.body)
  // console.log(req.body)
  // res.redirect('/')
})

//http.createServer()
app.listen(3001, function() {
  console.log('Example app listening on port 3000!!!!')
})
