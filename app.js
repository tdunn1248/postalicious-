const express = require('express')
const app = express()
const http = require('http')
const pug = require('pug')

// fs.appendFile('html/index.html', (err) =>{
//   if (err) throw err;
//   console.log('The ')
// })

// const router = app.Router()

// const compilePug = pug.render('index.html')
// console.log(pug);
// console.log(app)
// console.log(http)
// app.set('views', 'html/index.html')

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req, res) {
  res.render( 'index', { title: 'hello pug world', message: 'hi' })
  // res.sendFile(__dirname + '/index.html')
  // , {title: 'hey', message: 'hello there!'}
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!!!!')
})
