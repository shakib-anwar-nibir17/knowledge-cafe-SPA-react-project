import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_time,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="border-b-2 mb-16">
      <img
        className="w-full"
        src={cover}
        alt={`this is the cover picture of the title ${title} `}
      />
      <div className="flex text-justify justify-between px-4 mt-4">
        <div className="flex">
          <img className="w-[60px]" src={author_img} alt="" />
          <div className="ml-5">
            <h3 className="font-bold">{author}</h3>
            <p>{posted_time}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>
            <span>{reading_time} min read</span>
          </p>
          <button
            onClick={handleAddToBookmark}
            className="text-red-500 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <div className="px-4 mt-4">
        <h3 className="text-4xl font-bold w-3/4">{title}</h3>
        <p className=" mb-3">
          {hashtags.map((hashtag, idx) => (
            <span className="text-blue-400" key={idx}>
              <a className="text-xl px-3" href="">
                #{hashtag}
              </a>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
