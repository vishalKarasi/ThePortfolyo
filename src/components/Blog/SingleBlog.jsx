import { Link } from "react-router-dom";
import "./Blog.scss";
import PropTypes from "prop-types";

const SingleBlog = ({ element }) => {
  const { image, name, position } = element;

  return (
    <div className={`st-post-single st-style1`}>
      <Link to="/blog/blog-details" className="st-post-thumb st-zoom">
        <img src={image.url} className="st-zoom-in" alt="blog1" />
      </Link>
      <div className="st-post-info">
        <div className="st-post-date">
          By:&nbsp;
          <Link to="/blog/blog-details" className="st-post-author">
            {position}
          </Link>
          <span className="st-post-date-divider">|</span>
          <span className="st-post-publish-date">12/7/2020</span>
        </div>
        <h4 className="st-post-title">
          <Link to="/blog/blog-details">{name}</Link>
        </h4>
      </div>
    </div>
  );
};

SingleBlog.propTypes = {
  element: PropTypes.object,
};

export default SingleBlog;
