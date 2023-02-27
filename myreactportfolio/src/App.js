import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'; 
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
