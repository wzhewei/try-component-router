const blogsServiceModule = angular.module('blogsService', [])
.service('myBlogsService', function($http) {

  this.getBlogs = function getBlogs (id) {
    return $http.get('/api/blogs/' + id).then(function (data) {
      return data.data;
    });
  };

  //https://www.googleapis.com/blogger/v3/blogs/2467941757588655044?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo
  //https://www.googleapis.com/blogger/v3/blogs/2467941757588655044/posts?key=AIzaSyBs5or1JzSHCTDtrn-PeHqZgvP6wp3qafo

});

export {blogsServiceModule};
