const express = require('express', '4.16.2')
const myapp = express()
const path = require('path')
const request = require('request')

myapp.use(express.static(__dirname + '/app'));
myapp.use('/node_modules', express.static(__dirname + '/node_modules'));


myapp.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
});

/*** needs read more about "HTML5 Push State" ***/
myapp.get('/user-lists',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
});

myapp.route('/api/users/:id').get((req, res) => {
  var id = req.params.id;
  var apiUrl = id !== "undefined" ? "https://jsonplaceholder.typicode.com/users/" + id : "https://jsonplaceholder.typicode.com/users/";
  request.get({url: apiUrl}, function(error, response, body){
     res.send(body);
  });
});


myapp.listen(3000,() => console.log("myapp is running on port 3000"))
