import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-5">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  );
}

export default App;
