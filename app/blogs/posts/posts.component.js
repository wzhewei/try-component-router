
const postsModule = angular.module('postsComponent',[])
.component('postsComponent',{

   templateUrl: './blogs/posts/posts.html',
   bindings: {
     posts: '<',
     onClickGoBack: '&'
   }

})

export default postsModule;
