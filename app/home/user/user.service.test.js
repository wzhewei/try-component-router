describe('testing users services...', function(){

  beforeEach(module('mainApp.home.user.usersService'));

  var users;
  var $q;
  var $rootScope;
  var deferred;
  var usersList=[{
    id:1,
    name:"john"
  }];

  beforeEach(inject(function(usersService, _$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    deferred = _$q_.defer();
  }));

  xit('getUsers should return list of users', function(){
    var returnValues;
    deferred.promise.then(function(data){
      returnValue = data;
    });
    deferred.resolve(userList);
    $rootScope.$apply();
    expect(returnValue).toEqual(userList);
  });

});
