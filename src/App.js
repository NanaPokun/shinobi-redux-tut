import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import Post from './components/Post';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        {/* new Nav Bar */}
          <nav className="nav-wrapper yellow darken-3">
              <div className="container">
                  <Link to="/gallery" className="brand-logo" >Shinobi</Link>
                  <ul className="right">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                      <li><Link to="/gallery">Gallery</Link></li>
                  </ul>
              </div>
          </nav>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/post/:id" element={<Post />} />
                {/* redirect to about page */}
                {/* <Route path='/:post_id' element={<Navigate to="/about"  />} />  */}
          </Routes>
      </Router>
      </div>
    );
  }
}

export default App;