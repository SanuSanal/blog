import author from '../images/about/author.png';
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
                            <img src={author} alt="image" />
                            <h3>Hi I Sanal Machingal</h3>
                            <p>I’m a software engineer specializing in Java backend development. Coding is more than just a profession for me—it’s a passion that drives me to constantly explore new programming languages and frameworks. Over the years, I’ve created apps in Flutter, built POCs using Spring Boot, Spring Integration, and Spring Security, and even dabbled in Python scripts, like automating WhatsApp message sending. Beyond the world of code, I’m an avid reader and sports enthusiast who enjoys playing football and cricket in my free time.</p>
                            <p>This blog is my space to document my findings—from programming tips to technical experiments. It’s not just a personal journal for future reference but also a way to help others who might face similar challenges in their tech journey. </p>
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
                            <p>Welcome to my little corner of the internet! I believe that learning is a journey best enjoyed together. Whether you’re a seasoned developer or just starting out, I’d love to collaborate, discuss ideas, and exchange knowledge. Technology evolves rapidly, and there’s always something new to explore—why not do it together?</p>
                            <p>Feel free to share your thoughts, ask questions, or even challenge me with your unique perspectives. Let’s create a space where we can learn, grow, and inspire each other.</p>
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
