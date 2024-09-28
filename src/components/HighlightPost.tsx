import { Link } from 'react-router-dom';
import author from '../images/author.png';
import featuredPic from '../images/featured-post.jpg';

function HighlightPost() {
    return (
        <section className="featured">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <article className="featured-post">
                            <div className="featured-post-content">
                                <div className="featured-post-author">
                                    <img src={author} alt="author" />
                                    <p>By <span>Mary Astor</span></p>
                                </div>
                                <Link to="blog" className="featured-post-title">
                                    Every Next Level of Your Life Will Demand
                                </Link>
                                <ul className="featured-post-meta">
                                    <li>
                                        <i className="fa fa-clock-o"></i>&nbsp;
                                        October 19, 2020 - 3 min read
                                    </li>
                                </ul>
                            </div>
                            <div className="featured-post-thumb">
                                <img src={featuredPic} alt="feature-post-thumb" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HighlightPost;