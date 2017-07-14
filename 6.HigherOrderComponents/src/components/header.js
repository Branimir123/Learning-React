import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component{
    authButton(){
        return <button>Sign In</button>;
    }

    render(){
        return(
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-right">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}