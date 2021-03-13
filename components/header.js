import React, { Component } from 'react';

class Header extends Component {
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

      showServicesMenu(e) {
          e.preventDefault();
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
    
    render(){
        return (
            <div className="Header">
                <div className="mainHeader">
                    <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Logo.png?alt=media&token=dd1afd08-99ef-4d60-905f-474c05650cc4"></img>
                    <div className="link_container">
                        <div className="linkContainerSmall">
                            <a className="links" href="/"><p>Home</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/products" onClick={this.showServicesMenu}><p>Products<b>↓</b></p></a>
                            {
                                this.state.showServicesMenu ?
                                (
                                    <div className="navMenu">
                                        <div className="navMenuLinks">
                                            <a className="navLinks" href="/products">Products</a>
                                            <a className="navLinks" href="/diamondrib">Diamond Rib 630</a>
                                            <a className="navLinks" href="/valurib">ValuRib 630</a>
                                            <a className="navLinks" href="/duraclad">Duraclad 936</a>
                                            <a className="navLinks" href="/ultraclad">Ultraclad 936</a>
                                            <a className="navLinks" href="/master">Master 1236</a>
                                            <a className="navLinks" href="/grand">Grand 1236</a>
                                            <a className="navLinks" href="/corrugated">Corrugated 7/8</a>
                                            <a className="navLinks" href="/lowrib">Low Rib</a>
                                            <a className="navLinks" href="/standingseam">Standing Seam 100</a>
                                            <a className="navLinks" href="/standingseam2">Standing Seam 150</a>
                                            <a className="navLinks" href="/snaplock">Snap Lock 100</a>
                                            <a className="navLinks" href="/snaplock">Snap Lock 150</a>
                                        </div>
                                    </div>
                                ) :
                                (
                                    null
                                )
                            }
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/standardflashings"><p>Standard Flashings</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/amc"><p>ACM Panels</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/deliveryservices"><p>Delivery Services</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/colors"><p>Colors</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/accessories"><p>Accessories</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" onClick={this.showContactMenu}><p>Contact <b>↓</b></p></a>
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
        ); 
    }  
}

  export default Header;