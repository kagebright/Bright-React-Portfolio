import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/Resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
