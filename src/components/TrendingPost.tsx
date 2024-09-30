import { Link } from 'react-router-dom';
import icon from '../images/icon.svg';
import BlogPost from '../data/BlogPost';

function TrendingPost({article}: {article: BlogPost}) {
    return (
        <div className="latest-widget">
            <div className="latest-widget-thum">
              <Link to={`/article/${article.key}`}>
                <img src={`${window.location.origin}/blog${article.articlePostImg}`} alt="blog-thum" /></Link>
              <div className="icon">
                <Link to={`/article/${article.key}`}>
                  <img src={icon} alt="icon" /></Link>
              </div>
            </div>
            <div className="latest-widget-content">
              <div className="content-title">
                <Link to={`/article/${article.key}`}>{article.title}</Link>
              </div>
              <div className="content-meta">
                <ul>
                  <li>
                    <i className="fa fa-clock-o"></i>&nbsp;
                    {article.date} - {article.timeToRead}
                  </li>
                </ul>
              </div>
            </div>
        </div>
    );
}

export default TrendingPost;