const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

console.log('listening on port: ' + PORT);
app.listen(PORT);
