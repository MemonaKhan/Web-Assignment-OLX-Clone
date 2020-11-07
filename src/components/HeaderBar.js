import React from 'react';
import '../App.css';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import CategoriesPopup from './CategoriesPopup'


class HeaderBar extends React.Component {
    constructor() {
        super()
        this.state = {
            showMe: false,
            showing: false
        }
    }
    toShow = () => {
        this.setState({
            showMe: true,
            showing:true
        })
    }
    toHide = () => {
        this.setState({
            showMe: false,
            showing:false
        })
    }
    render() {
        return (
            <div >
                <div className="headerbar">
                    <div className="categories">
                        <h5>
                        <Link className="links" to="/category">ALL CATEGORIES</Link>
                        </h5>
                        {
                            this.state.showing ?
                                <button onClick={() => this.toHide()}><BsChevronUp /></button>
                                :
                                <button onClick={() => this.toShow()}><BsChevronDown /></button>
                        }
                    </div>
                    <Link className="links" to="/category/mobiles">Mobile Phones</Link>
                    <Link className="links" to="/category/cars ">Cars</Link>
                    <Link className="links" to="/category/motorcycles">MotorCycles</Link>
                    <Link className="links" to="/category/houses">Houses</Link>
                    <Link className="links" to="/category/tv">TV-Video-Audio</Link>
                    <Link className="links" to="/category/tablets">Tablets</Link>
                    <Link className="links" to="/category/land">Land & Plots</Link>
                </div>
                {
                    this.state.showMe ?
                        <CategoriesPopup className="categories-popup" />
                        : null
                }
                
            </div>
        )
    }
}
export default HeaderBar;