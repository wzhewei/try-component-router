'use restrict'
import {GET_BLOG_POSTS, initialBlogPosts, blogPosts} from "./blogs/blogs.state";
import {postsServiceModule} from './blogs/posts/posts.service';
import {blogsServiceModule} from './blogs/blogs.service';
import postsModule from './blogs/posts/posts.component';
import blogsModule from './blogs/blogs.component';
import Store from './main.store';
require("file-loader?name=index.html!./index.html");
require("file-loader?name=main.html!./main.html");
require("file-loader?name=./blogs/blogs.html!./blogs/blogs.html");
require("file-loader?name=./blogs/posts/posts.html!./blogs/posts/posts.html");

const store = new Store(blogPosts, initialBlogPosts);

angular.module('mainApp',[
  postsServiceModule.name,
  blogsServiceModule.name,
  postsModule.name,
  blogsModule.name
])
.value('store', store)
.component('mainAppComponent',{

  templateUrl: './main.html',

   controller: function(myPostsService,myBlogsService){
     var self = this;
     this.store = store;
     this.blogs = [];
     this.showPosts = false;

     self.$onInit = () => {
       this.store.dispatch({ type: GET_BLOG_POSTS });
       this.posts = this.store.getState();

       /*TODO Get list of Blogs,this request requires authorization with at least one of the following scopes
       https://www.googleapis.com/auth/blogger
       https://www.googleapis.com/auth/blogger.readonly*/

       //Get first blog
       myBlogsService.getBlogs("2467941757588655044").then(function(blogs){
         self.blogs.push(blogs);
       });
       //Get second blog
       myBlogsService.getBlogs("4370885617187498747").then(function(blogs){
         self.blogs.push(blogs);
       });
     }

     self.onClickBlogs = (blogId) => {
       myPostsService.getPosts(blogId).then(function(payload){
         self.store.dispatch({ type: GET_BLOG_POSTS, payload });
         self.posts = self.store.getState();
         self.showPosts = !self.showPosts;
       });
     }

     self.onClickGoBack = () => {
       self.showPosts = !self.showPosts;
     }
   }
})
