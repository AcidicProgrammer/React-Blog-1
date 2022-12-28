import { useState, useEffect } from 'react';
import supabase from './config/supabaseClient';
import { useParams } from 'react-router-dom';

const useFetchBlogs = (id) => {

  /* 
    Custom React hook that takes in an ID (parameter) which will be used to determine whether or not a route parameter exists (more on this later).

    This hook's main purpose is to essentially retrieve all the blogs from the database, filter them so there's no dupliates, append them all to an array object which will then be set into state called blogData.

    With the id that's being passed in, the code will check whether or not the id parameter is defined or not. By default, if it's not, then that means the route is the home page. In that case, the blogs will be sent into another state called data. That's what will be accessed to display all the blogs data on the home page.

    If the id that's being passed in is not undefined, this is assuming that the user clicked on a blog and is being redirected to a blog page to display that particular blog's data. This is being done by checking what object inside the array contains an id that matches the id being passed inside the hook. When it finds the identical id, it'll set the blogData's state to the object containing all the blog's data for that particular blog ID.
  
  */
  
  const blogList = [];
  const [fetchError, setFetchError] = useState(null);
  const [blogData, setblogData] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const getBlogs = async () => {
    const { data, error } = await supabase.from('Blogs').select();

    if (error) {
      setFetchError("Error retrieving blogs");
      setblogData(null);
      setData(null);
    }

    if (data) {

      data.map(blog => {
        let date = blog.date_published;
        let full_date = date.split(date[10]).splice(0, 1)[0];
        let the_date = new Date(full_date); 
        let reformatted_date = (the_date.getMonth() + 1) + '/' + (the_date.getDate() + 1) + '/' + the_date.getFullYear();
    
        blogList.push({
          title: blog.title,
          id: blog.id,
          url_title: blog.url_title,
          author: blog.author,
          description: blog.description,
          body: blog.body,
          date_published: reformatted_date
        });
      });

        const ids = blogList.map(o => o.id);
        const filteredBlogList = blogList.filter(({id}, index) => !ids.includes(id, index + 1));
        
        if(id == undefined) {
          setData(filteredBlogList);  
          setFetchError(null);          
        }        
      
        if(id) {
          const filterBlog = filteredBlogList.find(element => element.id == id);
          setData(filteredBlogList);  
          setFetchError(null);
          setblogData(filterBlog);      
          setFetchError(null);          
        }
      }      
    }
      
    getBlogs();
  }, []);

  return { fetchError, blogData, data, id };
}

export default useFetchBlogs;