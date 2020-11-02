import React from 'react';
import '../App.css';
import { BsSearch, BsPlus, BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';


class CategoriesPopup extends React.Component {


    render() {
        return (
            <div className="row categories-popup">
                <div className="col-md-3">
                    <Link className="link"><h6>Vehicles</h6></Link>
                    <Link className="link"><p>Tractors & Trailers</p></Link>
                    <Link className="link"><p>Rikshaws</p></Link>
                    <Link className="link"><p>Spare Parts</p></Link>
                    <Link className="link"><p>Cars on Installments</p></Link>
                    <Link className="link"><p>Boats</p></Link>
                </div>
                <div className="col-md-3">
                    <Link className="link"><h6>Animals</h6></Link>
                    <Link className="link"><p>Pet Food</p></Link>
                    <Link className="link"><p>Horses</p></Link>
                    <Link className="link"><p>Dogs</p></Link>
                    <Link className="link"><p>Cats</p></Link>
                    <Link className="link"><p>Hens & Aseel</p></Link>
                </div>
                <div className="col-md-3">
                    <Link className="link"><h6>Fashion & Beauty</h6></Link>
                    <Link className="link"><p>Couture</p></Link>
                    <Link className="link"><p>Wedding</p></Link>
                    <Link className="link"><p>Watches</p></Link>
                    <Link className="link"><p>Make Up</p></Link>
                    <Link className="link"><p>Jewellery</p></Link>
                </div>
                <div className="col-md-3">
                    <Link className="link"><h6>Services</h6></Link>
                    <Link className="link"><p>Fresh Food</p></Link>
                    <Link className="link"><p>Computer Repair</p></Link>
                    <Link className="link"><p>Drivers & Taxi</p></Link>
                    <Link className="link"><p>Health & Beauty</p></Link>
                    <Link className="link"><p>Education & Classes</p></Link>
                </div>
            </div>
        )
    }
}
export default CategoriesPopup;