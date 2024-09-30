import { Link } from 'react-router-dom';
import BlogPost from '../data/BlogPost';

function Article({ article }: { article: BlogPost }) {
  return (
    <article className="blog-post">
      <div className="blog-post-thumb">
        <img src={`${window.location.origin}/blog${article.articlePostImg}`} alt="blog-thumbnail" />
      </div>
      <div className="blog-post-content">
        <div className="blog-post-tag">
          <Link to="/category">{article.tags}</Link>
        </div>
        <div className="blog-post-title">
          <Link to={`/article/${article.key}`}>{article.title}</Link>
        </div>
        <div className="blog-post-meta">
          <ul>
            <li>By <Link to="/about">Sanal Machingal</Link></li>
            <li>
              <i className="fa fa-clock-o"></i>&nbsp;
              {article.date} - {article.timeToRead}
            </li>
          </ul>
        </div>
        <p>
          { article.description.length < 200 ? article.description : `${article.description.substring(0, 200)}...` }
        </p>
        <Link to={`/article/${article.key}`} className="blog-post-action">read more <i className="fa fa-angle-right"></i></Link>
      </div>
    </article>
  );
}

export default Article;