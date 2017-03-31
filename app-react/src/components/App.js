import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Socks from './Socks';
import Footer from './Footer';

class App extends Component {
   // Setup
    constructor(props) {
        // Call the React.Component constructor() method
        // Pass the props onto the constructor
        super(props)

        // Bind custom methods to this object context
        this.getSocks = this.getSocks.bind(this);
        this.getSock = this.getSock.bind(this);
        // this.getLlama = this.getLlama.bind(this);

        // Initial state
        this.state = {
            originalSocks: [],
            socks: [],
            sock: {},
            llamas: [],
            llama: {},
        }
    }

    // React lifecycle methods
    componentWillMount() {
        // Before we mount the component onto the page, initiate API call
        this.getSocks()
    }

    //Event listener methods

    // API methods
    getSocks() {
        fetch(window.apiHost + '/api/products')
        // .then(window.internetConnectionCheck)
        .then(response => response.json())
        .then(response => this.setState({socks: response, originalSocks: response}))
        // .then(response => console.log(response))
    }

    getSock(index) {
      this.setState({sock: this.state.socks[index]})
    }

    // getLlama() {
    //     fetch(window.apiHost + 'api/products/?sock_type=llama')
    //     .then (response => response.json())
    //     .then(response => this.setState({llama: response, originalLlama: response}))
    // }

  render() {
      return (
        <div>
          <Navbar />
          <Hero />
          <Socks socks={this.state.socks} llama={this.state.llama}/>
          <Footer />
        </div>
      );
    }
}

export default App;
