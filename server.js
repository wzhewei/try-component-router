const express = require('express', '4.16.2')
const bodyParser = require('body-parser')
const myapp = express()
const path = require('path')
const request = require('request')
const _ = require('underscore')
var user = null;
var userList = null;
var updated_user = null;

/*TODO trying open redis server */

/*const redisServer = require('redis-server')
const server = new redisServer(6379)
const redis = require('redis')
const client = redis.createClient()*/

/*server.open(function(err){
  if(err == null){
    client.on('connect', function(){
      console.log("redis connected!!");
    })
  }
})*/


myapp.use(bodyParser.urlencoded({
    extended: true
}));
myapp.use(bodyParser.json());
myapp.use(express.static(__dirname + '/dist'));
myapp.use('/node_modules', express.static(__dirname + '/node_modules'));

myapp.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

/*** needs read more about "HTML5 Push State" ***/
myapp.get('/user-lists',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

myapp.route('/api/users/:id').get((req, res) => {
  var id = req.params.id;
  var hasId = id !== "undefined";
  var apiUrl = hasId ? "https://jsonplaceholder.typicode.com/users/" + id : "https://jsonplaceholder.typicode.com/users/";
  request.get({url: apiUrl}, function(error, response, body){
     if(!userList && !hasId){
       userList = JSON.parse(body);

     }else{
       if(hasId){
         _.each(userList,function(item,index){
           if(index == id){
             user = item;
           }
         });
       }
     }
     //Send back userList or each user info.
     if(hasId){
       res.send(user);
     }
     else {
       res.send(userList);
     }
  });
});

myapp.route('/api/users/add').post((req, res) => {
  updated_user = req.body.data;
  _.each(userList,function(user,index){
    if(updated_user.id == user.id){
      userList[index] = _.extend(updated_user,{isModified:true});
    }
  })
  res.send("user updated");
});


myapp.listen(3000,() => console.log("myapp is running on port 3000"))
