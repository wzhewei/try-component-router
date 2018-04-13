
const blogsModule = angular.module('blogsModule',[])
.component('blogsComponent',{

   templateUrl: './blogs/blogs.html',
   bindings: {
     blogs: '<',
     onClickBlogs: '&'
   }

})

export default blogsModule;
