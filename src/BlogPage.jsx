import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import useFetchBlogs from './useFetchBlogs';
import BlogPage_mod from './BlogPage.module.css';
import './quill.css';

export default function BlogPage() {
  const { id } = useParams();
  const { fetchError, blogDatadata, blogData } = useFetchBlogs(id);
  const navigate = useNavigate();
  
  const editPage = (id) => {

    navigate(`/blog/${id}/edit`);
    
  }
  
  return (
      <div className = {BlogPage_mod.blog_container}>
        <button className={BlogPage_mod.editBtn} onClick = {() => editPage(id)}>EDIT BLOG</button>
        <h1 className = {BlogPage_mod.articleTitle}>{blogData && blogData.title}</h1>
        <h3 className = {BlogPage_mod.articleSubtitle}>Written By: {blogData && blogData.author} </h3>
        <h3 className = {BlogPage_mod.articleSummaryTitle}><u>QUICK READ:</u></h3>
        <p className = {BlogPage_mod.display_linebreak}>{blogData && blogData.description}</p>
          <hr />
        <div dangerouslySetInnerHTML={{__html: blogData && blogData.body.replaceAll("<p><br></p>", "").replaceAll("&#xFEFF", "")}}></div>
      </div>
  );
}
