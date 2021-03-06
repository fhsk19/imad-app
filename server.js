var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res)  {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});   
app.get('/article-two',function(req,res)  {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/article-three',function(req,res)  {
    res.send('Article three will be served here');
});
var names= 0;
app.get('/submit-name/:name', function (req, res) {
    //Get the name from the request
    var name=req.params.name;
    names.push(name);
    //JSON: JavaScript Object Notation 
    res.send(JSON.stringify(names)); //1000
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
