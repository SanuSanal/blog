import { Link } from 'react-router-dom';
import trendingPostThumb from '../images/blog/blog-thum-1.png';
import icon from '../images/blog/icon.svg';

function TrendingPost() {
    return (
        <div className="latest-widget">
            <div className="latest-widget-thum">
              <Link to='/article'>
                <img src={trendingPostThumb} alt="blog-thum" /></Link>
              <div className="icon">
                <Link to='/article'>
                  <img src={icon} alt="icon" /></Link>
              </div>
            </div>
            <div className="latest-widget-content">
              <div className="content-title">
                <Link to='/article'>Five Things You Need to Know to Start Your Day</Link>
              </div>
              <div className="content-meta">
                <ul>
                  <li>
                    <i className="fa fa-clock-o"></i>&nbsp;
                    October 19, 2020 - 2 min
                  </li>
                </ul>
              </div>
            </div>
        </div>
    );
}

export default TrendingPost;