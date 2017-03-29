import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Socks from './Socks';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Socks />
        <Footer />
      </div>
    );
  }
}

export default App;
