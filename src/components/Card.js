import React from 'react';
import '../App.css';
import { BsSearch, BsPlus, BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';


class Card extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <div className="image">
                        <img src={this.props.image} width="100%" height="80%" />
                    </div>
                    <h4>Rs {this.props.price}</h4>
                    <p>Lorem Ipsum Lorem Ipsum</p>
                    <p className="date">{this.props.date}</p>
                </div>
            </div>
        )
    }
}
export default Card;