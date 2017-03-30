import React, { Component } from 'react';
import Moreinfo from './Moreinfo';


class Sock extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="http://placehold.it/800x500" alt="" />
                    <div className="caption">
                        <h3>Sock Label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-1">
                                <a href="#" className="btn btn-primary">Add to cart</a>                         
                            </div>
                            <div className="col-sm-3 col-sm-offset-1">
                                <Moreinfo index={this.props.index} category={this.props.category} />                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sock;




