const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine','ejs');
const fs = require('fs');
var a = JSON.parse(fs.readFileSync('blog.json'))
app.get('/',function(req,res){
    res.render('index',{"id":a})
});
app.get('/title/:id',function(req,res){
    const b = req.params.id
    res.render('title',{"id": b,"value":a.Sheet1[b]})
})


app.listen(8000);