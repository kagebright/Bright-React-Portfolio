import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'; 
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Link>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Link>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
