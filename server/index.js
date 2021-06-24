const express = require('express')
const app = express()

const path = require('path')

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../index.html'))
    res.sendFile(path.join(__dirname, '../styles.css'))
})

const port = process.env.PORT || 5050

app.listen(port, function(){ console.log(`Server running on ${port}`)})