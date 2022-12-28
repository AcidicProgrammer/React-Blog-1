import React, { useState, useEffect } from "react";
import CreateBlog_mod from './CreateBlog.module.css'
import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from './ToolBar';
import './quill.css';
import supabase from './config/supabaseClient';
import { useParams, useNavigate } from "react-router-dom";
import Form from './Form';

export default function CreateBlog({ blg_title, blg_author, desc, content, page_title, button_text, blg_id, blog_url_title }) {

  const [blogTitle, setBlogTitle] = useState();
  const [blogAuthor, setBlogAuthor] = useState();
  const [blogDesc, setBlogDesc] = useState();
  const [state, setState] = React.useState({ value: null });
  const [blogURL, setBlogURL] = useState();
  const [formError, setFormError] = useState(null);
  const [pageTitle, setPageTitle] = useState("PUBLISH A BLOG");
  const [buttonText, setButtonText] = useState("PUBLISH BLOG");
  const { id:routeID } = useParams();

  useEffect(() => {

    setBlogTitle(blg_title);
    setBlogAuthor(blg_author);
    setBlogDesc(desc);
    setState({ value: content });
    setBlogURL(blog_url_title);

    if (page_title !== undefined && button_text !== undefined) {
      setPageTitle(page_title);
      setButtonText(button_text);
    }

  }, [blg_title, blg_author, desc, content, pageTitle, buttonText, blog_url_title]);

  const handleChange = value => {
    setState({ value });
  }

  function handleBlogs(e) {
    e.preventDefault();

    if (!blogTitle || !blogAuthor || !blogDesc || !state) {
      setFormError("Please make sure to fill in all the inputs");
      console.log(formError);
      return;
    }

    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();

    today = month + '/' + day + '/' + year;

    const author = blogAuthor;
    const blog_desc = blogDesc;
    let blog_title = blogTitle.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    const blog_content = state.value;
    const date_published = today;
    const id = (Math.random() + 1).toString(36).substring(2);  
    const blog_url_title = blogURL;

    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    const url_title = blog_title.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text

    const edit_route = `/blog/${routeID}/edit`;
    const post_route = `/blog/create-blog`;

    if(routeID != undefined) {
        return updateData();
    }
    
    if(post_route) {
      return sendData(author, blog_desc, blog_title, blog_content, date_published, id, url_title);
    }
    
  }

  const navigate = useNavigate();

  async function sendData(author, blog_desc, blog_title, blog_content, date_published, id, url_title) {

    const { data, error } = await supabase.from("Blogs").insert([{
      id,
      title: blog_title,
      author,
      description: blog_desc,
      body: blog_content,
      date_published: date_published,
      url_title
    }]);

    navigate('/');
  }

   async function updateData() {

     const title_cased_title = blogTitle.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

     let new_url_title;
     if(blg_title !== blogTitle) {
       const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')
      new_url_title = blogTitle.toString().toLowerCase()
      .replace(/\s+/g, '-') 
      .replace(p, c => b.charAt(a.indexOf(c))) 
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '') 
      .replace(/-+$/, '');
     } 
     else {
          const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')
      new_url_title = blogTitle.toString().toLowerCase()
      .replace(/\s+/g, '-') 
      .replace(p, c => b.charAt(a.indexOf(c))) 
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '') 
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '') 
      .replace(/-+$/, '');
     }
      const { data, error } = await supabase.from('Blogs').update({
        title: title_cased_title, 
        author: blogAuthor, 
        description: blogDesc, 
        body: state.value,
        url_title: new_url_title
      }).eq('id', blg_id).single();

      navigate(`/blog/${blg_id}/${new_url_title}`);
    }

  // Maybe turn the code below into an object
  return (
    <Form pageTitle={pageTitle} buttonText={buttonText} blogTitle={blogTitle} blogAuthor={blogAuthor} blogDesc={blogDesc} state={state} handleChange={handleChange} handleBlogFunc={handleBlogs} setBlogTitle={setBlogTitle} setBlogAuthor={setBlogAuthor} setBlogDesc={setBlogDesc} setState={setState} formError={formError} />
  );
}
