var express = require('express')
var app = express()

app.set('port',3000)
app.use(express.json())

app.get('/', function(request, response) {
  response.send('Hello World!!!!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
