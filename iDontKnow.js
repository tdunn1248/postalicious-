const get = require('express')()

get.get('/', function(req, res) {
  // res.send('wassup world!')
  res.sendFile('app.js')
})

get.listen(3005, function() {
  console.log('Running runnin rumming')
})
