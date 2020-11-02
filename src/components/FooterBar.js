import React from 'react';
import FooterImage from "../img/footerImage.png";
import GooglePlay from "../img/playstore_2x.png";
import AppStore from "../img/appstore_2x.png";
class FooterBar extends React.Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row footer-bar">
                    <div className="footer-image col-lg-4 col-md-4 col-sm-12">
                        <img src={FooterImage} />
                    </div>
                    <div className="advert col-lg-4 col-md-5 col-sm-12">
                        <h2>TRY THE OLX APP</h2>
                        <p>Buy, sell and find just about anything using the app on your mobile.</p>
                    </div>
                    <div className="apps col-lg-3 col-md-3 col-sm-12">
                        <p>GET YOUR APP TODAY</p>
                        <div className="app-links">
                            <img src={GooglePlay} />
                            <img src={AppStore} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterBar;