import PropTypes from "prop-types";
import BlogMarked from "../BlogMarked/BlogMarked";
const Bookmark = ({ bookmarks, readingTime }) => {
  return (
    <div>
      <div>
        <h3>Time spent on reading:{readingTime} min</h3>
      </div>
      <div className=" mt-4 pb-8 bg-slate-200">
        <h3 className="text-2xl font-bold p-10">
          BookMark Section: {bookmarks.length}
        </h3>
        {bookmarks.map((blog, idx) => (
          <BlogMarked key={idx} blog={blog}></BlogMarked>
        ))}
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmark;
