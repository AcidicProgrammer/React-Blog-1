import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from './config/supabaseClient';
import useFetchBlogs from './useFetchBlogs';
import CreateBlog from './CreateBlog';

export default function EditBlog() {
  const { id } = useParams();
  const { fetchError, data, blogData } = useFetchBlogs(id);
  
  return (
    <div>
      <CreateBlog blg_title = {data && blogData.title} blg_author = {data && blogData.author} blg_id = {data && blogData.id} desc = {data && blogData.description} content = {data && blogData.body} page_title = "EDIT BLOG" button_text = "APPLY CHANGES" blog_url_title = {data && blogData.url_title}/>
    </div>
  );
}