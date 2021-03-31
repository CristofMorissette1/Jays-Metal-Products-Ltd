import Head from 'next/head'
import { Component } from 'react'
import Footer from '../components/footer';


class Home extends Component {
  constructor(){
    super()
    this.state={
        showContactMenu: false,
        showServicesMenu: false
    }
    this.showContactMenu = this.showContactMenu.bind(this);
    this.showServicesMenu = this.showServicesMenu.bind(this);
}

showContactMenu(event) {
    event.preventDefault();
      if (this.state.showContactMenu == false) {
      this.setState({
        showContactMenu: true,
      });
    } else {
      this.setState({
        showContactMenu: false,
      });
    }
  }

  showServicesMenu(event) {
    event.preventDefault();
      if (this.state.showServicesMenu == false) {
      this.setState({
        showServicesMenu: true,
      });
    } else {
      this.setState({
        showServicesMenu: false,
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
                        <a className="linksHome" onClick={this.showServicesMenu}><p>Products<b>↓</b></p></a>
                        {
                          this.state.showServicesMenu ?
                          (
                            <div className="navMenu">
                            <div className="navMenuLinks">
                                <a className="navLinks" href="/products">Products</a>
                                <a className="navLinks" href="/amc">Aluore 454 System (ACM)</a>
                                <a className="navLinks" href="/iconpanels">Icon Panel</a>
                                <a className="navLinks" href="/corrugated">Corrugated 7/8</a>
                                <a className="navLinks" href="/corrugated">Vivo 300 System</a>
                                <a className="navLinks" href="/curvedpanelsystem">Curved Panel System</a>
                                <a className="navLinks" href="/standingseam">Standing Seam 100</a>
                                <a className="navLinks" href="/standingseam2">Standing Seam 150</a>
                                <a className="navLinks" href="/standingseam2">Standing Seam 200</a>
                                <a className="navLinks" href="/standingseam2">AR-24 Roof System</a>
                                <a className="navLinks" href="/snaplock">Interlock 100</a>
                                <a className="navLinks" href="/snaplock2">Interlock 150</a>
                                <a className="navLinks" href="/snaplock">QR1200-F</a>
                                <a className="navLinks" href="/snaplock">QR1200-R</a>
                                <a className="navLinks" href="/snaplock">UCAD Panel</a>
                                <a className="navLinks" href="/master">Master 1236</a>
                                <a className="navLinks" href="/grand">Grand 1236</a>
                                <a className="navLinks" href="/duraclad">Duraclad 936</a>
                                <a className="navLinks" href="/ultraclad">Ultraclad 936</a>
                                <a className="navLinks" href="/diamondrib">Diamond Rib 630</a>
                                <a className="navLinks" href="/valurib">ValuRib 630</a>
                            </div>
                        </div>
                          ) :
                          (
                            null
                          )
                        }
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/standardflashings"><p>Standard Flashings</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/amc"><p>ACM Panels</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/deliveryservices"><p>Delivery Services</p></a>
                    </div>
                      <div className="linkContainerSmall">
                        <a className="linksHome" href="/colors"><p>Colors</p></a>
                      </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/accessories"><p>Accessories</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" onClick={this.showContactMenu}><p>Contact <b>↓</b></p></a>
                        {
                            this.state.showContactMenu
                        ? (
                        <div className="navMenu">
                            <div className="navMenuLinks">
                                <a className="navLinks" href="/forms">Forms & Resources</a>
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
          <p className="homeFirstText">Jay’s Metal Products Ltd. is a Canadian owned and operated metal fabrication manufacturer located in Calgary, Alberta. Our key focus is providing custom metal work service, specializing in exterior and interior roof and wall systems. The main focus at Jay’s Metal is delivering the highest quality products in the construction industry; we endeavor to provide our customers with the best standards. We work with our clients from start to finish, bringing their vision to life.</p>
        </div>
        <div className="home3rdContainer">
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2FResidential.jpg?alt=media&token=c447a217-c7f1-4f47-afef-c13f254e5288"></img></a>
            <div className="servicesHomeTextContainer">
              <h3 className="servicesHomeTitle">Residential</h3>
              <p className="servicesHomeText">We believe that home truly is where the heart is. At Jay’s Metal Products, we want to help you build your custom project in an economic and affordable way. We have a range of products, from accent pieces to bold luxury design. We are custom focused and meet unique manufacturing requirements without compromising product integrity or consistency.</p>
          </div>
          </div>
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fagricultural.jpg?alt=media&token=263e4f33-9a0f-4300-a733-4354e5d38b0b"></img></a>
            <div className="servicesHomeTextContainer">
              <h3 className="servicesHomeTitle">Agricultural</h3>
              <p className="servicesHomeText">With durability and versatility in mind, we aim to create the longest lasting products possible for your agricultural projects. Check out our products for your future projects.</p>
            </div>
          </div>
          <div className="servicesHomeContainer">
            <a href="/products"><img className="servicesHomeImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fcommercial.jpg?alt=media&token=42a49fd0-9c14-4825-9592-0a572187dc0a"></img></a>
            <div className="servicesHomeTextContainer">
              <h3 className="servicesHomeTitle">Commercial</h3>
              <p className="servicesHomeText">Jay’s Metal Products works with many builders, architects and contractors to bring their commercial projects to life. Ranging from dental centres to large scale apartment complexes we have done it all. Our plant has a variety of equipment to accommodate production requirements, the heart of our plan is our robotic flexible manufacturing cell. We are committed to completing each project with accuracy and precision.</p>
            </div>
          </div>
          <div className="home4thContainer">
          <h1 className="homeMainTitle">Why choose Steel for your next Project</h1>
          <p className="homeFirstText">Steel is innovative and used in a vast majority of engineering and construction projects. When used in construction, it has many quality features, such as it is completely recyclable, it is durable, cost effective, longevity and low maintenance.</p>
        </div>
        <div className="servicesFeatureContainer">
            <h2 className="homeFeaturesTitle">Low Maintenance</h2>
            <div className="servicesHomeTextContainer">
              <p className="servicesHomeFeaturesText">Once installed, metal roofing and cladding has relatively no maintenance. Our products are pre-painted with SMP standard and PVDF premium paints, this superior coating allows for fade resistance of colour and dirt resistance. Unlike traditional wood-framed buildings, steel will resist environmental factors such as rust and mold, allowing for minimal replacements needed.</p>
            </div>
          </div>
        <div className="servicesFeatureContainer">
            <h2 className="homeFeaturesTitle">Durable</h2>
            <div className="servicesHomeTextContainer">
              <p className="servicesHomeFeaturesText">Metal roofing and cladding is durable, it is designed to withstand environment and man-made conditions. Steel is incredibly durable, it resists fire, rust and rot. Compared to wood-framed buildings, steel is resistant to rot due to it being inorganic.</p>
            </div>
          </div>
          <div className="servicesFeatureContainer">
            <h2 className="homeFeaturesTitle">Cost Effective</h2>
            <div className="servicesHomeTextContainer">
              <p className="servicesHomeFeaturesText">With durability and versatility in mind, we aim to create the longest lasting products possible for your agricultural projects. Check out our products for your future projects.</p>
            </div>
          </div>
          <div className="servicesFeatureContainer">
            <h2 className="homeFeaturesTitle">Versatile</h2>
            <div className="servicesHomeTextContainer">
              <p className="servicesHomeFeaturesText">Steel is very versatile. It is able to be roll-formed into any shape, the strength and durability allows it to be used in a variety of projects, ranging from indoor arenas to exteriors of warehouses. We provide 18 products that are able to be combined with one another to create the most complex appearances.</p>
            </div>
          </div>
          <div className="aaraLogoContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/aara%20logo.png?alt=media&token=7e1b46f6-a698-461b-8084-ed8bfd541fde" className="aaraLogo"/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;
