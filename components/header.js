import React, { Component } from 'react';

class Header extends Component {
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
                            <a className="links" href="/products"><p>Products</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" href="/amc"><p>AMC Panels</p></a>
                        </div>
                        <div className="linkContainerSmall">
                            <a className="links" onClick={this.showMenu}><p>Contact <b>↓</b></p></a>
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
        ); 
    }  
}

  export default Header;