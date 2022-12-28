# TO-DO:
-----------

- [] Create pagination for uploaded blogs
- [x] ~~Create blog publishing functionality~~
- [x] ~~Implement the Quill text editor~~
- [] Implement edit blog feature
- [x] ~~Make it so that the blog data page has the edit button which will redirect the user to a page where they'll edit the contents of the blog.~~
- [x] ~~Create route that displays blog data~~
- [x] ~~Make it so that the styling for the quotation appears since it doesn't by default on the blog data page~~
- [x] ~~Make sure to style the blog data page~~
- [x] ~~Make it so that once you publish the blog, it'll redirect you to the home page~~
- [] Make it so that the "search blog" input field is only available on the homepage--may need to make that a separate component
   - [] => Or maybe make it so that if the user types in the search bar, they'll be taken to a page that displays the blog based on the pagination number that blog is located on?
- [x] ~~Make it so that once you delete a blog, it'll be deleted from the database too.~~
- [x] ~~Make sure to review your code and convert parts of it into reusable components.~~
- [] Reduce blog title font size
- [] Add a loading feature for when it displays the blogs on the appropriate blog data page.
- [x] ~~Make it so that the strings in the URL are URL friendly~~

## HOME Component:
- [] Implement search blog feature
- [] Reduce blog title font size

## BLOG PAGE (that displays the data) Component:
- [x] ~~Make it so that the blog data page has the edit button which will redirect the user to a page where they'll edit the contents of the blog.~~
- [x] ~~Make it so that the styling for the quotation appears since it doesn't by default on the blog data page~~
- [x] ~~Make sure to style the blog data page~~
- [] Make it so that the "search blog" input field is only available on the homepage--may need to make that a separate component
   - [] => Or maybe make it so that if the user types in the search bar, they'll be taken to a page that displays the blog based on the pagination number that blog is located
- [] Add a loading feature for when it displays the blogs on the appropriate blog data page.

# IMPORTANT NOTE:
---------------------
Inside the BlogList component, the code is changing the content of the prop being passed into it by the Home file. It's not a good idea to change the value of a prop inside a component, so maybe in the future fix it so that it instead changes the value inside the Home component file.

Originally experimented with attempting to change the value inside the Home component file but did not work out successfully.

