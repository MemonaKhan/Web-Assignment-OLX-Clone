import React from 'react';
import '../App.css';
import LOGO from '../img/olx_logo.png';
import { BsSearch, BsPlus, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Select from '@material-ui/core/Select';


class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header container-fluid">
                    <div className="logo">
                        <img src={LOGO} />
                    </div>
                    <div className="location">
                        <button><BsSearch className="icon-search" /></button>
                        <Select label="Pakistan" className="label" native>
                            <option>Pakistan</option>
                            <optgroup label="Popular Locations">
                            <option>Panjab</option>
                            <option>Karachi</option>
                            <option>Islamabad</option>
                            <option>Sindh</option>
                            </optgroup>
                        </Select>
                    </div>
                    <div className="search">
                        <input className="to-search" type="text" placeholder="Find cars, Mobile Phones and more..." />
                        <button><BsSearch className="icon-search" /></button>

                    </div>
                    <div className="login">
                        <Link to="/account/login" className="login-link">Login</Link>
                        <button className="sell"><BsPlus />SELL</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;