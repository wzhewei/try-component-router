const express = require('express', '4.16.2')
const myapp = express()
const path = require('path')
const request = require('request')

myapp.use(express.static(__dirname + '/app'));
myapp.use('/node_modules', express.static(__dirname + '/node_modules'));


myapp.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
});

/*myapp.get('/user-lists',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
});*/


myapp.route('/api/users').get((req, res) => {
  request.get({url: "https://jsonplaceholder.typicode.com/users/"}, function(error, response, body){
     res.send(body);
  });
});


myapp.listen(3000,() => console.log("myapp is running on port 3000"))
