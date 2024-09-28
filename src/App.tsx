import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FileNotFoundPage from './pages/FileNotFoundPage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/article' Component={BlogPage} />
        <Route path='/about' Component={AboutPage} />
        <Route path='/contact' Component={ContactPage} />
        <Route path='*' Component={FileNotFoundPage} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
