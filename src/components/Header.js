import React from 'react';
import '../App.css';
import LOGO from '../img/olx_logo.png';
import { BsSearch, BsPlus, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {set_data,facebook_login} from '../store/action';

import Select from '@material-ui/core/Select';

import LoginPopup from '../containers/LoginPopup';


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
                        {/* <LoginPopup /> */}
                        {/* <Link to="/login" className="login-link">Login</Link> */}
                        <Link onClick={()=>this.props.facebook_login()} className="login-link">Login</Link>
                        <button className="sell"><BsPlus />SELL</button>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => (
    {
      username: state.username
    }
  )
  const mapDispatchToProps = (dispatch)=>({
    set_data:()=>dispatch(set_data()),
    facebook_login:()=>dispatch(facebook_login())
  }
  )
  
  export default connect(mapStateToProps,mapDispatchToProps)(Header);