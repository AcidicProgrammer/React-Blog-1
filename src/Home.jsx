import React from "react";
import Home_mod from "./Home.module.css";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import supabase from './config/supabaseClient';
import { useParams } from 'react-router-dom';
import useFetchBlogs from './useFetchBlogs';
import Navbar_mod from "./Navbar.module.css";

export default function Home() {

  const { id } = useParams();
  const { fetchError, data, blogData } = useFetchBlogs(id);

  if(data == null) return;
  
  return ( 
    <div className="home">
       <button className={Navbar_mod.searchBtn}>SEARCH</button>
      <input        
        type="text"
        className={Navbar_mod.searchInput}
        placeholder="Search for a blog"
      />
    <h2 className={Home_mod.headerTitle}>ALL BLOGS</h2>
      <BlogList blogs = { data } />
    </div>
  );
}

