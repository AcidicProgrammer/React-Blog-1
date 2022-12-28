import React from "react";
import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from './ToolBar';
import './quill.css';
import CreateBlog_mod from './CreateBlog.module.css'
import { useState } from 'react';

export default function Form({ pageTitle, buttonText, blogTitle, blogAuthor, blogDesc, state, handleChange, handleBlogFunc, setBlogTitle, setBlogAuthor, setBlogDesc, setState, formError }) {    

  return (
       <div className = {CreateBlog_mod.FormContainer}>
      <h3 className={CreateBlog_mod.headerTitle}>{pageTitle}</h3>
          <div className={CreateBlog_mod.alert_message} style={{display: formError ? 'block' : 'none' }}>
            <p>{formError}</p>
         </div>
      <div className = {CreateBlog_mod.inputContainer}>
        <form>
          <input type = "text" value = {blogTitle} onChange = {(e) => setBlogTitle(e.target.value)} name = "blog_title" className = {CreateBlog_mod.inputFields} placeholder = "Blog Title" />
          <input type = "text" value = {blogAuthor} onChange = {(e) => setBlogAuthor(e.target.value)} name = "blog_author" className = {CreateBlog_mod.inputFields} placeholder = "Blog Author" />
          <textarea value = {blogDesc} onChange = {(e) => setBlogDesc(e.target.value)} name = "blog_description" className = {CreateBlog_mod.textareaField} placeholder = "Blog Description"></textarea>
              <EditorToolbar/>
              <ReactQuill
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Write something..."}
                modules={modules}
                formats={formats}
                className = {CreateBlog_mod.qlEditor}
              />
            <button onClick = {handleBlogFunc} className = {CreateBlog_mod.publishBtn}>{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

