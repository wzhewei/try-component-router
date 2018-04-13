export const GET_BLOG_POSTS = 'GET_BLOG_POSTS';

export const initialBlogPosts = [
  {"id": "default blog post 1"},
  {"id": "default blog post 2"}
];

export const blogPosts = (state = initialBlogPosts, {type, payload}) => {
  switch (type) {
    case GET_BLOG_POSTS:
      return payload || state;
    default:
      return state;
  }
};
