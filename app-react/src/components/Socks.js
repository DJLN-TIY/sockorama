import React, { Component } from 'react';
import Sock from './Sock';
import SideBar from'./SideBar';

class Socks extends Component {

    render() {

        let socks = this.props.socks.map((sock, key) => <Sock key={key} {...sock} />);

        return (
            <div>
                <div className="row">
                    <div className="col-md-2 filters">
                    <div className="col-md-12 col-md-offset-3">
                        <SideBar />
                        </div>
                    </div>
                    <div className="col-md-10">
                        
                        <div className="row text-center all-socks-row">
                    {socks}
                </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Socks;