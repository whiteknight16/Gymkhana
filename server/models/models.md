# blog.js

This JavaScript code defines a Mongoose schema and model for blog posts in a MongoDB database.

BlogsSchema: This is a new Mongoose schema that defines the structure of a blog post. A blog post has a title (a required string that cannot exceed 40 characters), an image (a required string), and content (a required string that cannot exceed 900 characters).

blog: This is a Mongoose model that represents the 'blogs' collection in the MongoDB database. It uses the BlogsSchema to define the structure of documents in the collection.

The blog model is then exported for use in other parts of the application

# exerciseList.js

This JavaScript code defines a Mongoose schema and model for exercise lists in a MongoDB database.

ExerciseListSchema: This is a new Mongoose schema that defines the structure of an exercise list. An exercise list has a name, level, reps, target, gif, video, and cal - all of which are strings.

ExerciseList: This is a Mongoose model that represents the 'exerciselists' collection in the MongoDB database. It uses the ExerciseListSchema to define the structure of documents in the collection.

The ExerciseList model is then exported for use in other parts of the application.

# login.js

This JavaScript code defines a Mongoose schema and model for user login in a MongoDB database.

LoginSchema: This is a new Mongoose schema that defines the structure of a user login. A user login has a username and password, both of which are required strings.

The pre middleware function is used to hash the password before saving a user. If the password is modified, it is hashed using bcrypt with a salt round of 10. The hashed password then replaces the plain text password.

login: This is a Mongoose model that represents the 'login' collection in the MongoDB database. It uses the LoginSchema to define the structure of documents in the collection.

The login model is then exported for use in other parts of the application.
