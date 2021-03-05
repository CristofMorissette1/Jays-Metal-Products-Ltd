import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';


class Products extends Component {
  constructor(){
    super()
    this.state={
        showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
}

showMenu(event) {
    event.preventDefault();
      if (this.state.showMenu == false) {
      this.setState({
        showMenu: true,
      });
    } else {
      this.setState({
        showMenu: false,
      });
    }
  }

  render() {
    return (
      <div className="homeMainContainer">
        <div className="Header">
            <div className="mainHeaderHome">
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Logo.png?alt=media&token=dd1afd08-99ef-4d60-905f-474c05650cc4"></img>
                <div className="link_container">
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/"><p>Home</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/products"><p>Products</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/amc"><p>AMC Panels</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/contact" onClick={this.showMenu}><p>Contact <b>↓</b></p></a>
                        {
                            this.state.showMenu
                        ? (
                        <div className="navMenu">
                            <div className="navMenuLinks">
                                <a className="navLinks" href="/forms">Forms & Resources</a>
                                <a className="navLinks" href="/warranty">Warranty Registration</a>
                                <a className="navLinks" href="/contact">Contact</a>
                            </div>
                        </div>
                        )
                        : (
                        null
                        )
                    }
                    </div>
                </div>
            </div>
          </div>
        <img className="homeImage1" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fproduct%20image.jpg?alt=media&token=f5e86bc4-b885-4bfc-a31f-6ac1ff4a58ee"></img>
        <Footer/>
      </div>
    )
  }
}

export default Products;
