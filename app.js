const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
// const logger = require('morgan')

let port = 8080

// view engine setup 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middlewares
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// serve static Files from /public
app.use(express.static(path.join(__dirname, 'public/')))

// Routes 
app.use('/api/students', require('./router/api-students'))
app.use('/', require('./router/pages'))

app.listen(port, (err) => {
    if(err) throw err
    console.log(`Listening on port : ${port} ..`)
})