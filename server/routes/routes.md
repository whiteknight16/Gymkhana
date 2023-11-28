# blog.js

This JavaScript code sets up Express.js routes for blog-related operations.

It imports the Express.js library and creates a new router.
It also imports four functions from the blog controller: getAllBlogs, updateBlog, deleteBlog, and createBlog.
It then defines two routes:
The "/" route, which responds to GET requests with getAllBlogs, POST requests with createBlog, and PATCH requests with updateBlog.
The "/:id" route, which responds to DELETE requests with deleteBlog. The ":id" in the route is a placeholder for the ID of the blog post to delete.
Finally, it exports the router for use in other parts of the application.

# exerciseList.js

This JavaScript code sets up an Express.js route for exercise-related operations.

It imports the Express.js library and creates a new router.
It also imports the getAllExercise function from the exerciseList controller.
It then defines a route:
The "/" route, which responds to GET requests with getAllExercise.
Finally, it exports the router for use in other parts of the application.

# login.js

This JavaScript code sets up Express.js routes for user registration and login operations.

It imports the Express.js library and creates a new router.
It also imports two functions from the login controller: addUser and loginUser.
It then defines two routes:
The "/reg" route, which responds to POST requests with addUser for user registration.
The "/login" route, which responds to POST requests with loginUser for user login.
Finally, it exports the router for use in other parts of the application.
