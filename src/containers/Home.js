import React from 'react';
import '../App.css';
import {
  Link
} from "react-router-dom";
import Header from '../components/Header';
import HeaderBar from '../components/HeaderBar';
import Card from '../components/Card';
import CardCarousel from '../components/CardCarousel';

import Footer from '../components/Footer';
import FooterBar from '../components/FooterBar';
// import ScrollToTop from '../components/ScrollToTop';
import {BsChevronUp} from 'react-icons/bs';

import Bike1 from '../img/bike1.jpg';

class HomePage extends React.Component {
  constructor() {
    super()

    this.state = {
      product: [{ image: Bike1, price: 42000, text: "kdmckdm kdmcdm", date: "Oct 14" }, { image: Bike1, price: 34200, text: "kdmckdm kdmcdm" }]
    }
  }
  render() {
    return (
      <div>
        <Header />
        <br />
        <HeaderBar />
        
        <CardCarousel />

        <div className="cards">
          <h3> Fresh recommendations </h3>
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
        </div>

        <div className="load"><button className="load-more">Load More</button></div>

        <FooterBar />
        <Footer />
        <div class="scrolltop">
          <Link class="scrollToTop " onClick={()=>window.scrollTo(0, 0)}><BsChevronUp className="icon-up"/></Link>

        </div>

      </div>
    )
  }
}

export default HomePage;