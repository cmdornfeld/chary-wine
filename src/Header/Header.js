import React, {Component} from 'react';
import logo from '../logo.jpg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <img src={logo} alt="wine glass filled with corks" width="200px" />
                <h1>Chary Wine Rating</h1>
            </header>
        )
    }
}

export default Header;