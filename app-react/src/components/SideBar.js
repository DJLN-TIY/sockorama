import React, { Component } from 'react';

class SideBar extends Component {

    render() {
        return (
                <div className="left-panel">
                    <span className="filter-header">Sock Type</span>
                    <div><a href="#">Llama</a></div>
                    <div><a href="#">Alpaca</a></div>
                    <div><a href="#">Wool</a></div>
                    <div><a href="#">Blended</a></div>
                    <br />
                    <span className="filter-header">Style</span>
                    <div><a href="#">Crew</a></div>
                    <div><a href="#">Dress</a></div>
                    <div><a href="#">Knee</a></div>
                    <div><a href="#"></a></div>
                </div>
        )
    }
}

export default SideBar;