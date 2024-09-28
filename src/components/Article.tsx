import { Link } from 'react-router-dom';
import articleImage from '../images/blog/blog-thum-1.png';

function Article() {
    return (
        <article className="blog-post">
          <div className="blog-post-thumb">
            <img src={articleImage} alt="blog-thumbnail" />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-tag">
              <Link to="/category">Travel</Link>
            </div>
            <div className="blog-post-title">
              <Link to="/blog">Five Things You Need to Know to Start Your Day</Link>
            </div>
            <div className="blog-post-meta">
              <ul>
                <li>By <Link to="/about">Mary Astor</Link></li>
                <li>
                  <i className="fa fa-clock-o"></i>&nbsp;
                  October 19, 2020 - 2 min
                </li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
            <Link to="/blog" className="blog-post-action">read more <i className="fa fa-angle-right"></i></Link>
          </div>
        </article>
    );
}

export default Article;