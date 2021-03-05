import Head from 'next/head'
import { Component } from 'react'
import Footer from '../components/footer';


class Home extends Component {
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
                        <a className="linksHome" onClick={this.showMenu}><p>Contact <b>↓</b></p></a>
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
        <img className="homeImage1" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fhome%20image1.png?alt=media&token=5023b190-2479-4de8-8d66-9c02fe005c19"></img>
        <div className="home2ndContainer">
          <h1 className="homeMainTitle">We Manufacture Precision-Made Metal Components</h1>
          <p className="homeFirstText">Jays Metal Products custom manufactures quality, precision-made metal components. We have earned a solid reputation for providing top-of-the-line products to our customers.</p>
        </div>
        <div className="home3rdContainer">
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2FResidential.jpg?alt=media&token=c447a217-c7f1-4f47-afef-c13f254e5288"></img></a>
            <h3 className="servicesHomeTitle">Residential</h3>
            <p className="servicesHomeText">Jays Metal Products has the equipment to accommodate demanding production requirements. The heart of our plant is our robotic Flexible Manufacturing Cell. We complete each job with accuracy and precision.</p>
          </div>
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fagricultural.jpg?alt=media&token=263e4f33-9a0f-4300-a733-4354e5d38b0b"></img></a>
            <h3 className="servicesHomeTitle">Agricultural</h3>
            <p className="servicesHomeText">Jays Metal Products is "custom" focused. We meet unique manufacturing requirements without compromising product integrity or consistency. We listen to customers and then develop a program to meet their needs.</p>
          </div>
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fcommercial.jpg?alt=media&token=42a49fd0-9c14-4825-9592-0a572187dc0a"></img></a>
            <h3 className="servicesHomeTitle">Commercial</h3>
            <p className="servicesHomeText">Our head office is located in Calgary, Alberta.</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
