import React from "react";
import Navbar_mod from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className={Navbar_mod.title}>
        REACT<span className={Navbar_mod.spanTitle}> BLOGS</span>
      </h1>
      <div className={Navbar_mod.links}>
        <a href="/" className={Navbar_mod.links.a}>
          HOME
        </a>
        <a href="/create-blog" className={Navbar_mod.links.a}>
          CREATE BLOG
        </a>
      </div>
    </div>
  );
}
