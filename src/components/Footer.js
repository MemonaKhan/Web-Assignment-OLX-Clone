import React from 'react';
import {
    Link
} from "react-router-dom";

import GooglePlay from "../img/playstore_2x.png";
import AppStore from "../img/appstore_2x.png";

import { RiFacebookCircleLine, RiYoutubeLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row footer">
                        <div className="col-md-2 links">
                            <h6>POPULAR CATEGORIES</h6>
                            <Link className="link">Cars</Link>
                            <Link className="link">Flats for Rent</Link>
                            <Link className="link">Jobs</Link>
                            <Link className="link">Mobile Phones</Link>
                        </div>
                        <div className="col-md-2 links">
                            <h6>TRENDING SEARCHES</h6>
                            <Link className="link">Bikes</Link>
                            <Link className="link">Watches for Rent</Link>
                            <Link className="link">Books</Link>
                            <Link className="link">Dogs</Link>
                        </div>
                        <div className="col-md-2 links">
                            <h6>ABOUT US</h6>
                            <Link className="link">About OLX Group</Link>
                            <Link className="link">OLX Blog</Link>
                            <Link className="link">Contact Us</Link>
                            <Link className="link">OLX for Businesses</Link>
                        </div>
                        <div className="col-md-2 links">
                            <h6>OLX</h6>
                            <Link className="link">Help</Link>
                            <Link className="link">SiteMap</Link>
                            <Link className="link">Legal & Privacy Inforation</Link>
                        </div>
                        <div className="apps col-md-4">
                            <p>FOLLOW US</p>
                            <div className="icons">
                                <RiFacebookCircleLine />
                                <TiSocialTwitterCircular />
                                <RiYoutubeLine />
                                <RiInstagramLine />
                            </div>

                            <div className="app-links">
                                <img src={GooglePlay} />
                                <img src={AppStore} />
                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-6">
                            Other Countries India - South Africa - Indonesia
                        </div>
                        <div className="col-md-6">
                            Free Classifieds in Pakistan. © 2006-2020 OLX
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Footer;