import PropTypes from "prop-types";
import BlogMarked from "../BlogMarked/BlogMarked";
const Bookmark = ({ bookmarks }) => {
  return (
    <div className="w-1/3 border-2 border-red-200 bg-slate-200">
      <h3 className="text-2xl font-bold p-10">
        BookMark Section: {bookmarks.length}
      </h3>
      {bookmarks.map((blog) => (
        <BlogMarked key={blog.id} blog={blog}></BlogMarked>
      ))}
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmark;
