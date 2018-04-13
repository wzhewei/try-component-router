const express = require('express', '4.16.2')
const bodyParser = require('body-parser')
const myapp = express()
const path = require('path')
const request = require('request')
const _ = require('underscore')
var blogs = null;
var posts = null;

myapp.use(bodyParser.urlencoded({
    extended: true
}));
myapp.use(bodyParser.json());
myapp.use(express.static(__dirname + '/dist'));
myapp.use('/node_modules', express.static(__dirname + '/node_modules'));

myapp.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

myapp.route('/api/blog/posts/:id').get((req, res) => {
  var id = req.params.id;
  var apiUrl = "https://www.googleapis.com/blogger/v3/blogs/" + id + "/posts?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo";
  request.get({url: apiUrl}, function(error, response, body){
     posts = JSON.parse(body);
     res.send(posts);
  });
});

myapp.route('/api/blogs/:id').get((req, res) => {
  var id = req.params.id;
  var apiUrl = "https://www.googleapis.com/blogger/v3/blogs/" + id + "?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo";
  request.get({url: apiUrl}, function(error, response, body){
     blogs = JSON.parse(body);
     res.send(blogs);
  });
});


myapp.listen(3000,() => console.log("myapp is running on port 3000"))
