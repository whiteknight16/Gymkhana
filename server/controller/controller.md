# blog.js

This JavaScript code defines three functions that interact with a MongoDB database using the Mongoose library. These functions are likely used as middleware in an Express.js application.

getAllBlogs: This function retrieves all blog posts from the database and sends them back in the response. If an error occurs, it logs the error to the console.

updateBlog: This function updates a specific blog post in the database. It takes the id, title, image, and content from the request body, finds the blog post with the matching id, and updates its title, image, and content. If the blog post doesn't exist, it sends a response with the message "No blog with that id". If an error occurs, it logs the error to the console.

deleteBlog: This function is not fully shown, but it likely deletes a specific blog post from the database.

# exerciseList.js

This JavaScript code defines a function getAllExercise that interacts with a MongoDB database using the Mongoose library. This function is likely used as middleware in an Express.js application.

getAllExercise: This function retrieves all exercises from the database and sends them back in the response. If an error occurs, it logs the error to the console.
The function is then exported for use in other parts of the application.

# login.js

This JavaScript code defines two functions, addUser and loginUser, that interact with a MongoDB database using the Mongoose library. These functions are likely used as middleware in an Express.js application.

addUser: This function creates a new user with a username and password taken from the request body. It saves the new user to the database and sends a response with the message "User registered successfully". If an error occurs, it logs the error to the console and sends a response with the message "Internal Server Error".

loginUser: This function authenticates a user. It takes a username and password from the request body, finds the user with the matching username in the database, and compares the provided password with the stored password using bcrypt. If the user doesn't exist or the password doesn't match, it sends a response with the message "Invalid credentials". If the credentials are valid, it creates a JSON Web Token (JWT) that includes the user's ID and sends it in the response. The token expires in 10 minutes. If an error occurs, it's not shown how it's handled in the provided code.
