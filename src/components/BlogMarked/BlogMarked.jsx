import PropTypes from "prop-types";
const BlogMarked = ({ blog }) => {
  const { title } = blog;
  return (
    <div className="mx-4  bg-white my-3 rounded-2xl mb-8">
      <h3 className="text-xl font-bold px-8 py-4">{title}</h3>
    </div>
  );
};
BlogMarked.propTypes = {
  blog: PropTypes.object,
};
export default BlogMarked;
