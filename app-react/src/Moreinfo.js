import React, { Component } from 'react';

class Moreinfo extends Component {
        constructor(props) {
        super(props)
        this.sendSocks = this.sendSocks.bind(this)

        // Sets state of fields, and triggers render() again
        this.setState({
            description: '',
            category: ''
        })
    }

        // send item to shopping cart
    componentWillMount() {
        this.sendSocks()
    }

    sendSocks() {
        fetch('https://enimatic-waters-89034.herokuapp.com/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sock_type: sock_type,
            color: color,
            style: style,
            price: price,
            image: image,
            description: description,
            materials: materials,
            id: id,
            size:size,
            quantity:quantity
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.cart_token) {
                sessionStorage.setItem('cart_token', response.cart_token);
                
            }
        })
    }

    function count() {
        for (i = 0; i < 10; i++) { 
            return i;
}
    }

  render() {
      const hasSocks = this.props.params.id ? 
    return (
        <div>
            <button type="button" className="btn btn-default" data-toggle="modal" data-target=".bs-example-modal-sm">More Info</button>

            <div className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="http://placehold.it/800x500" alt="" />
                            </div>
                            <div class="col-sm-4">
                                <ul>
                                    <li>
                                        (chosen sock category will go here)
                                    </li>
                                    <li>
                                        <div className="form-group">
                                            <select className="form-control" value={this.state.size} onChange={(e) => this.setState({size: e.target.value})}>
                                                <option value="">Select Size...</option>
                                                <option value="fun">Small</option>
                                                <option value="home">Medium</option>
                                                <option value="school">Large</option>
                                                <option value="work">X-Large</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="btn btn-success" onClick={() => counter()}>0</button>
                                    </li>
                                    <li>(
                                        add to bag)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
  }
}

export default Moreinfo;
