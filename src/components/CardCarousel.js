import React from 'react';
import '../App.css';
import {
    Link
} from "react-router-dom";
import Card from '../components/Card';

import Bike1 from '../img/bike1.jpg';


// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-elastic-carousel';

class CardCarousel extends React.Component {
    constructor() {
        super()

        this.state = {
            product: [{ image: Bike1, price: 42000, text: "kdmckdm kdmcdm", date: "Oct 14" }, { image: Bike1, price: 34200, text: "kdmckdm kdmcdm" }],
            breakpoints : [{
                width:1, itemsToShow:1,
                width:550, itemsToShow:2,
                width:768, itemsToShow:3,
                width:1200, itemsToShow:4,

            }]
        }
    }
    render() {
        return (
            <div>
                    <div className="upper-cards">
                        <h3>  More on Motorcycles </h3>
                        <Carousel breakpoints={this.state.breakpoints}>
                        <div className="row container-fluid">
                                <div className=" col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                        </div>
                        <div className="row container-fluid">
                                <div className=" col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-1">
                                    <Card image={this.state.product[0].image} price={this.state.product[0].price} date={this.state.product[0].date} />
                                </div>
                        </div>
                        </Carousel>
                    </div>
            </div >
        )
    }
}

export default CardCarousel;