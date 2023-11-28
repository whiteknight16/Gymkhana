#Structure
Consists of two folder client and server client for frontend and server for backend

<h1>How to start</h1>
<ul>
<li>To start the frontend cd into client directory and enter the command `npm run dev</li>
<li>To start the backend  cd into server directory and enter the command `npm run dev`</li>
<li>Usually you have to configure .env file but here giving it for easy testing</li>
<li>For the first time you also need to go to client and server folder and run `npm i` to install npm modules </li>

</ul>

<h1>Fronted(Client)</h1>

## It consists of:

<li>node_modules folder: This contain all the library being used in program and appears after running npm install</li>
<li>public folder: This contains some of the images that are being used in the program</li>
<li>src folder: This contains the major chunk of program with subfolders it is talked about in further reading</li>
<li>.env file: Contains the enviorenment variables</li>
<li>.eslintrc.cjs file: esLint configuration file</li>
<li>.gitignore file</li>
<li>index.html file: The only html file in program required for React</li>
<li>package-lock.json</li>
<li>package.json</li>
<li>vite.config.js: Configuration file for vite</li>

##Details of src folder

<li>components folder:It contains various components used in program the detail for each component is listed with it</li>
<li>conf folder: It contains conf.js and is used to access env variables</li>
<li>pages folder: It is used to finally load each page </li>
<li>main.jsx: It is the head jsx file </li>

###Various Components:

<li>AddComponent:This is used to add the blog</li>
<li>BlogCard:Used to render blogs in discover section</li>
<li>BlogCardLoged:Blog card when user is logged in provides with options like edit,delete etc...</li>
<li>Card:Used to render exercise challenge card at training page</li>
<li>CustomExerciseComponent:Display custom exercises</li>
<li>CustomRoutine:Component to add new custom exercise</li>
<li>DetailBlogContent:USed to render blog details</li>
<li>EditBlog:Used to render edit blog form page</li>
<li>ExerciseCard:Loads the exercise like abs begineer, abs intermediate etc... in training page</li>
<li>ExerciseComponent:Used to display correct exercise when a exercise type is elected</li>
<li>ExerciseEle:Used to load exercise Element</li>
<li>Footer:Used for footer component</li>
<li>Graph:Used for graph component of report page</li>
<li>Header:Used to render header</li>
<li>LoginComponent:Use to render the login component</li>
<li>RegisterComponent:For registration form</li>
<li>StartAndEndExercise:Starts and Ends the timer</li>
<li>Stats:Used to display various stats</li>

###Various Pages

<li>Add</li>
<li>Custom</li>
<li>CustomExercises</li>
<li>DetailBlog</li>
<li>Discover</li>
<li>Edit</li>
<li>Exercise</li>
<li>Login</li>
<li>Register</li>
<li>Report</li>
<li>Training</li>

## main.jsx

This code is part of a React application that uses a router to define the application's routes.

It imports several components, each representing a different page in the application.
It uses the createBrowserRouter function to create a router.
Inside the router, it uses the createRoutesFromElements function to create routes from a list of Route components.
Each Route component has a path prop that specifies the URL path for the route, and an element prop that specifies the component to render when the route is matched.
For example, when the URL path is '/absbeginner', the Exercise component is rendered. When the URL path is '/auth/login', the Login component is rendered, and so on.

# Backend(Server)

## It consists of

<li>node_modules: This contain all the library being used in program and appears after running npm install</li>
<li>controller: This contain several js files which contain several functions giving functionality to APIs.More detail in folder itself</li>
<li>db: Have connect.js file which is used to connect db</li>
<li>models: Contains schema of various models</li>
<li>routes: Contain various routes</li>
<li>.env: Contains the environment variables</li>
<li>package-lock.json</li>
<li>package.json</li>
<li>server.js</li>

# server.js

This JavaScript code sets up an Express.js server and connects it to a MongoDB database.

It imports several modules, including Express, CORS, and routes for exercise lists, login, and blogs.
It creates an Express app and sets the port to 3000.
It uses CORS middleware to enable Cross-Origin Resource Sharing and express.json() middleware to parse JSON request bodies.
It sets up routes for exercise lists, login, and blogs under "/api/v1/exerciselist", "/api/v1/auth", and "/api/v1/blog" respectively.
It defines an asynchronous function start that connects to the MongoDB database using the connection string from the environment variables and starts the server.
It then calls the start function to start the server. If there's an error during the database connection or server startup, it logs the error to the console.
