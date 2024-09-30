import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <div className="footer-logo">
              <span className='logo'>DEVLOG</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="footer-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="sociale-icon">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/sanalmachingal/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="https://github.com/SanuSanal" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/a_bad_code" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copy-right">
              <p>© Copyright <span id="copyrightYear"></span> - All Rights Reserved by <a href="https://staticmania.com/" target="_blank">StaticMania</a> Distributed By <a href="https://themewagon.com/" target="blank">ThemeWagon</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;