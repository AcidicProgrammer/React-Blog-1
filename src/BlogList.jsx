import React from "react";
import Home from "./Home.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from './config/supabaseClient';

export default function BlogList({ blogs }) {
    let message = "NO BLOGS AT THIS TIME :(";
  
    const [all_blogs, setBlogs] = useState(blogs);
  
    const handleDelete = async (id) => {
  
    let confirmation = confirm("Are you sure you would like to delete this blog?");
  
    if(!confirmation) return;

    const { data, error } = await supabase.from("Blogs").delete().eq('id', id);
    const newBlogs = all_blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  }

  const navigate = useNavigate();

  all_blogs.length == 0 ? message : (message = "");

  const goToBlog = (id, urlPath) => {
    navigate(`blog/${id}/${urlPath}`);
  }

  return ( 
    <div>
      <h3 className = {Home.message}>{message}</h3>
      {all_blogs.map((blog) => (
        <div className={Home.blog} key={blog.id}>
          <h2 className={Home.title}>{blog.title}</h2>
          <h4 className={Home.date_published}>Published on: {blog.date_published}</h4>
          <h4>Written By: {blog.author}</h4>
          <button className={Home.deleteBtn} onClick={() => handleDelete(blog.id)}>DELETE</button>
          <button className={Home.readBtn} onClick = {() => goToBlog(blog.id, blog.url_title)}>READ</button>
        </div>
      ))}
    </div>
  );
}
