import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import Signinmodal from './Signinmodal';
import Signupmodal from './Signupmodal';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img className="logo" src="../img/sockorama-logo.jpg" alt="Sockorama Logo"/>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Signinmodal /> </li>
                            <li><Signupmodal /></li>
                            <li><a href="#"><span className="nav-links">About</span></a></li>
                            <li><a href="#"><span className="nav-links">Account</span></a></li>
                            <li><Link to="/cart"><span className="nav-links">Cart</span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
