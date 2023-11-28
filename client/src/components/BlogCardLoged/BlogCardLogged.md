This loads when you are logged in and provides you with the options to add edit or delete blogs

This code is part of a React component that checks if a user is authenticated and then renders a blog card.

The useEffect hook is used to check the authentication token when the component mounts. If the token is still being checked (isCheckingToken is true), it renders a div with the text "Checking token...".

Once the token check is complete, it checks if the user is authenticated (isAuthenticated is true). If the user is authenticated, it renders a blog card with an image, title, and a short excerpt of the content. There are also two icons for editing and deleting the blog post, which are wrapped in a Link component that navigates to the edit page for the blog post when clicked.

If the user is not authenticated, it redirects the user to the login page using the Navigate component from react-router-dom.

The BlogCardLoged function is a component that fetches blog data from an API using axios and stores it in the data state. The useEffect hook is used to fetch the data when the component mounts.
