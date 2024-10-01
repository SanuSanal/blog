import { Link } from 'react-router-dom';

function Header() {
    return (
      <nav className="main-nav navbar navbar-expand-lg">
        <div className="container">
  
          <Link className="navbar-brand" to="/">
            <span className='logo'>DevLogs</span>
          </Link>
  
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse nav-list" id="mainNav">
  
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
            </ul>
  
            <ul className="main-nav-social">
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
      </nav>
    );
  }
  
  export default Header;
  