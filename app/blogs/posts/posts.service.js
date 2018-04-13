const postsServiceModule = angular.module('postsService', [])
.service('myPostsService', function($http) {

  this.getPosts = function getPosts (id) {
    return $http.get('/api/blog/posts/' + id).then(function (data) {
      return data.data.items;
    });
  };

  //https://www.googleapis.com/blogger/v3/blogs/2467941757588655044?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo
  //https://www.googleapis.com/blogger/v3/blogs/2467941757588655044/posts?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo

});

export {postsServiceModule};
