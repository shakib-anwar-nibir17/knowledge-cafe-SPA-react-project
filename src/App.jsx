import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };
  const handleReadingSetting = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmark);
  };
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex gap-5">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingSetting={handleReadingSetting}
        ></Blogs>
        <div className="w-1/3 border-2 border-red-200 ">
          <Bookmark bookmarks={bookmarks} readingTime={readingTime}></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
