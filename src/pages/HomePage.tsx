import Article from "../components/Article";
import FooterBanner from "../components/FooterBanner";
import HighlightPost from "../components/HighlightPost";
import TrendingPost from "../components/TrendingPost";

function HomePage() {
    return (
        <>
            <HighlightPost />

            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-section-title">
                                <h2>Articles</h2>
                                <p>View the latest news on Blogger</p>
                            </div>

                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                            <Article />

                            <div className="blog-post-pagination">
                                <nav aria-label="Page navigation example" className="nav-bg">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link active" href="#">1</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fa fa-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="blog-post-widget">
                                <div className="latest-widget-title">
                                    <h2>Trending post</h2>
                                </div>

                                <TrendingPost />
                                <TrendingPost />
                                <TrendingPost />
                                <TrendingPost />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterBanner />
        </>
    );
}

export default HomePage;