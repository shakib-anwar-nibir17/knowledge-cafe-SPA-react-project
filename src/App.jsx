import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto md:flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  );
}

export default App;
