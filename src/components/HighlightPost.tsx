import { Link } from 'react-router-dom';
import author from '../images/about/author.png';
import BlogPost from '../data/BlogPost';

function HighlightPost({highlightedArticle}: {highlightedArticle: BlogPost}) {
    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <article className="featured-post">
                            <div className="featured-post-content">
                                <div className="featured-post-author">
                                    <img src={author} alt="author" />
                                    <p>By <span>Sanal Machingal</span></p>
                                </div>
                                <Link to={`/article/${highlightedArticle.key}`} className="featured-post-title">
                                    {highlightedArticle.title}
                                </Link>
                                <ul className="featured-post-meta">
                                    <li>
                                        <i className="fa fa-clock-o"></i>&nbsp;
                                        {highlightedArticle.date} - {highlightedArticle.timeToRead} read
                                    </li>
                                </ul>
                            </div>
                            <div className="featured-post-thumb">
                                <img src={`${window.location.origin}/blog${highlightedArticle.highlightedPostImg}`} className='feature-post-thumb-max-size' alt="feature-post-thumb" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HighlightPost;