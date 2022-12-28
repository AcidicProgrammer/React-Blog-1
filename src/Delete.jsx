import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "react-quill/dist/quill.core.css";

export default function CreateBlog() {

  const [value, setValue] = useState('');
  
  return (
    <div>
        <ReactQuill theme = "snow" value = { value } onchange = { () => setValue }/>
    </div>
  );
}
