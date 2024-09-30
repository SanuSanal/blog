import image1 from '../images/banner/java.png';
import image2 from '../images/banner/spring.png';
import image3 from '../images/banner/react.png';
import image4 from '../images/banner/flutter.png';
import image5 from '../images/banner/python.png';
import image6 from '../images/banner/aws.png';

function FooterBanner() {
    return (
        <section className="instagram">
            <a href="https://github.com/sanusanal" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true"></i>
                <span>@sanusanal</span>
            </a>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="instagram-item">

                            <div className="instagram-item-thum">
                                <img src={image1} alt="image" />
                            </div>
                            <div className="instagram-item-thum">
                                <img src={image2} alt="image" />
                            </div>
                            <div className="instagram-item-thum">
                                <img src={image3} alt="image" />
                            </div>
                            <div className="instagram-item-thum">
                                <img src={image4} alt="image" />
                            </div>
                            <div className="instagram-item-thum">
                                <img src={image5} alt="image" />
                            </div>
                            <div className="instagram-item-thum">
                                <img src={image6} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterBanner;