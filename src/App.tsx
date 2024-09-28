import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FooterBanner from './components/FooterBanner';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/article' Component={BlogPage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/contact' Component={ContactPage} />
      </Routes>

      <FooterBanner />
      <Footer />
    </Router>
  );
}

export default App;
