import React, { Component } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Socks from './Socks';
import Footer from './Footer';
// import SideBar from './SideBar';

class App extends Component {

   // Setup
    constructor(props) {
        // Call the React.Component constructor() method
        // Pass the props onto the constructor
        super(props)

        // Bind custom methods to this object context
        this.getSocks = this.getProducts.bind(this)
        // this.filterProducts = this.filterProducts.bind(this)

        // Initial state
        this.state = {
            products: [],
            filters: []
        }
    }

    // filterProducts(filters) {
    //     // this.setState({filters: filters})
    //     alert('Hello')
    // }

    // React lifecycle methods
    componentWillMount() {
        // Before we mount the component onto the page, initiate API call
        this.getProducts()
    }

    // API methods
    getProducts() {
        fetch(window.apiHost + '/api/products')
        // .then(window.internetConnectionCheck)
        .then(response => response.json())
        // .then(response => console.log(response))

        // Local state object
        .then(response => this.setState({products: response}));
        
    }

  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        {/* <SideBar filterProducts={this.filterProducts} /> */}
        <Socks />
        <Footer />
      </div>
    );
  }
}

export default App;
