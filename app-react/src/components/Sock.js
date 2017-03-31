import React, { Component } from 'react';
import Moreinfo from './Moreinfo';


class Sock extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img className="sock-image" src={this.props.image} alt="Sock image" />
                    <div className="caption">
                        <h3>{this.props.name}</h3>
                        <h3>${this.props.price}.00</h3>
                        <p>{this.props.description}</p>
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-3">
                                <Moreinfo index={this.props.index} category={this.props.category} size={this.props.size} color={this.props.color} image={this.props.image}/>                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sock;




