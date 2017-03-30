import React, { Component } from 'react';
import Sock from './Sock';

class Socks extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="all-socks-header">All Socks</h3>
                    </div>
                </div>
                <div className="row text-center all-socks-row">
                    <Sock index={key} />
                </div>
            </div>
        )
    }
}

export default Socks;