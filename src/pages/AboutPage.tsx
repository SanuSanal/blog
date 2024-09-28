import actior from '../images/about/actior.png';
import blob1 from '../images/about/blob1.svg';
import blob2 from '../images/about/blob2.svg';
import banner from '../images/about/banner.png';

function AboutPage() {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-me">
                            <img src={actior} alt="image" />
                            <h3>Hi I Am Mary Astor</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet.
                                , consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo </p>
                            <div className="banner">
                                <div className="about-shape-right-top">
                                    <img src={blob1} alt="svg" />
                                </div>
                                <div className="about-shape-left-bottom">
                                    <img src={blob2} alt="svg" />
                                </div>
                                <img src={banner} alt="banner" />
                            </div>
                            <h3>Hey there, what’s up?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                amet.
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                sea takimata sanctus est Lorem ipsum dolor sit amet. <br /> <br />Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                                consetetur sadipscing elitr, sed diam nonumy.
                            </p>
                            <h3>I am a social person</h3>
                            <ul className="soicel-icon">
                                <li> <a href="https://github.com/SanuSanal" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                                <li> <a href="https://www.instagram.com/a_bad_code" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/sanalmachingal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li> <a><i className="fab fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;