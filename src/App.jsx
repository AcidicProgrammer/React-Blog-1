import React from "react";
import "./App.module.css";
import Navbar from "./Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from './BlogPage';
import EditBlog from './EditBlog';
import Error404 from './Error404';

export default function App() {

  return (
    <Router>
      <div className = {App.mainContent}>
          <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/create-blog" element={< CreateBlog />} />
            <Route path="/blog/:id/:name" element={< BlogPage />} />
            <Route path="/blog/:id/edit" element={< EditBlog />} />
            <Route path="*" element={< Error404 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
