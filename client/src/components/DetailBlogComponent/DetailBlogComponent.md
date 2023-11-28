This code defines two React components: BlogContent and DetailBlogContent.

BlogContent is a simple component that receives title, image, and content as props and displays them in a div.

DetailBlogContent is a more complex component that fetches blog data from an API when it's first rendered, using the useEffect hook. The fetched data is stored in the data state variable.

It then maps over the data array to render a BlogContent for each blog post. It only renders the BlogContent if the current path matches the path for the specific blog post.

Finally, it includes a Footer component at the end.
