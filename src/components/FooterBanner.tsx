import image1 from '../images/blog/case-studies-1.png';
import image2 from '../images/blog/case-studies-2.png';
import image3 from '../images/blog/case-studies-3.png';
import image4 from '../images/blog/case-studies-4.png';
import image5 from '../images/blog/case-studies-5.png';
import image6 from '../images/blog/case-studies-6.png';

function FooterBanner() {
    return (
        <section className="instagram">
            <a href="https://www.instagram.com/a_bad_code" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span>@a_bad_code</span>
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