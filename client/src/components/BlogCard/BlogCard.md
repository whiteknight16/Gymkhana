This is used to render blog component in discover section

This code consists of two React components: EachBlog and BlogCard.

EachBlog: This is a functional component that takes three props: title, image, and content. It renders a div that contains an image and a div with the class eachBlogData. Inside eachBlogData, it displays the title and a shortened version of the content (the first 50 characters), followed by "....READ MORE".

BlogCard: This is a functional component that fetches blog data from an API using axios and stores it in the data state. It uses the useEffect hook to fetch the data when the component mounts. The BlogCard component renders a div that maps over the data array and creates a Link for each blog. Each Link wraps an EachBlog component and sets its title, image, and content props to the corresponding properties of the current blog. The to prop of the Link is set to /discover/${ele.\_id}, which means clicking the link will navigate to the discover page for the current blog.
