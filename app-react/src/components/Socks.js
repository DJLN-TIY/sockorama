import React, { Component } from 'react';
import Sock from './Sock';

class Socks extends Component {

    render() {

        let socks = this.props.socks.map((sock, key) => <Sock key={key} {...sock} />);

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="all-socks-header">All Socks</h3>
                    </div>
                </div>
                <div className="row text-center all-socks-row">
                    {socks}
                </div>
            </div>
        )
    }
}

export default Socks;