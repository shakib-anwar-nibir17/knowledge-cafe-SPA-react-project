import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {/* <h3>console.log(blogs)</h3> */}
      <h3>Blog Number: {blogs.length}</h3>
    </div>
  );
};

export default Blogs;
