import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmareks] = useState([]);
  const handleAddToBookmark = (blog) => {
    console.log("bookmark adding soon");
  };
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
