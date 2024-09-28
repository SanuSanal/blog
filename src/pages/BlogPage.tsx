import { Link } from 'react-router-dom';
import blogSingle from '../images/blog/blog-single.png';
import blogSingle2 from '../images/blog/single-blog-2.png';

function BlogPage() {
    return (
        <section className="blog-single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 order-2 order-lg-1">
                        <div className="share-now">
                            <a className="scrol">Share</a>
                            <div className="sociel-icon">
                                <ul>
                                    <li> <a href="https://github.com/SanuSanal" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                    <li> <a href="https://www.instagram.com/a_bad_code" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/sanalmachingal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                    <li> <a><i className="fab fa-facebook"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 order-1 order-lg-2">
                        <article className="single-blog">
                            <a href="#" className="tag">Travel</a>
                            <p className="title">Five Things You Need to Know
                                to Start Your Day</p>
                            <ul className="meta">
                                <li>By <a href="about.html">Mary Astor</a></li>
                                <li>
                                    <i className="fa fa-clock-o"></i>&nbsp;
                                    October 19, 2020 - 2 min
                                </li>
                            </ul>
                            <img src={blogSingle} alt="banner" />

                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                <br />
                                <br />

                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet. <br /> <br />

                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                <br />
                                <br />

                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <h3>Make better business</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                <br /> <br />

                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <blockquote>
                                <p>"You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction."
                                </p>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                <br /> <br />
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <div className="single-blog-banner">
                                <div className="banner"> <img src={blogSingle} alt="banner" />
                                </div>
                                <div className="banner"> <img src={blogSingle2} alt="banner" />
                                </div>
                            </div>
                            <h3>The Dreamy Factors</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum. Stet
                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                <br /> <br />
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </article>
                        <div className="blog-single-presentation">
                            <ul>
                                <li> <Link to="/blog" className="tag">PREVIOUS</Link>
                                    <Link to="/blog" className="title">I Moved Across the Country
                                        and Never Looked Back</Link>
                                    <i className="fa fa-clock-o"></i>&nbsp;
                                    October 19, 2020 - 2 min
                                </li>
                                <li> <Link to="/blog" className="tag">Next</Link><Link to="/blog" className="title">Every Next Level of Your Life
                                    Will Demand Link Different</Link><i className="fa fa-clock-o"></i>&nbsp;
                                    October 19, 2020 - 2 min</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPage;