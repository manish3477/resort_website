import React, { Component } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"><div class="text_logo">Seven's Resort</div></Link>
                        <button type="button" className="nav-btn"><FaAlignRight className="nav-icon" onClick={this.handleToggle} /></button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/rooms">Rooms</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>

                    </ul>
                </div>
            </nav>
        )
    }
}
