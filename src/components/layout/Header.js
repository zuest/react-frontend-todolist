import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header style={HeaderStyle}>
                <h1>TodoList</h1>
                <Link style={linkStyle} to="/">Home </Link> |
                <Link style={linkStyle} to="/about"> About </Link>
            </header>
        )
    }
}

const HeaderStyle = {
    background: '#783030',
    color:'white',
    textAlign:'center',
    padding:'10px'
};

const linkStyle = {
    textDecoration:'none',
    color:'white',
    fontWeight:'bold'


};

export default Header;