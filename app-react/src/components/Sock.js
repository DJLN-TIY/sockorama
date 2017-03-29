import React, { Component } from 'react';


class Footer extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="http://placehold.it/800x500" alt="" />
                    <div className="caption">
                        <h3>Sock Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>
                            <a href="#" className="btn btn-primary">Add to cart</a> <a href="#" className="btn btn-default">More info</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;




