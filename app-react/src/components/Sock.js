import React, { Component } from 'react';


class Sock extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img className="sock-image" src={this.props.image} alt="Sock image" />
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <p>{this.props.price}</p>
                        <p>
                            <a href="#" className="btn btn-primary">Add to cart</a> <a href="#" className="btn btn-default">More info</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sock;




