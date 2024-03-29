import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';


class Products extends Component {
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
      <div className="productsMainContainer">
        <div className="Header">
            <div className="mainHeaderHome">
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Logo.png?alt=media&token=dd1afd08-99ef-4d60-905f-474c05650cc4"></img>
                <div className="link_container">
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/"><p>Home</p></a>
                    </div>
                    <div className="linkContainerSmall">
                        <a className="linksHome" href="/products" onClick={this.showServicesMenu}><p>Products<b>↓</b></p></a>
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
                                <a className="navLinks" href="/standingseam3">Standing Seam 200</a>
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
                        <a className="linksHome" href="/contact" onClick={this.showContactMenu}><p>Contact <b>↓</b></p></a>
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
        <img className="homeImage1" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fproduct%20image.jpg?alt=media&token=f5e86bc4-b885-4bfc-a31f-6ac1ff4a58ee"></img>
        <div className="product2ndContainer">
          <h1 className="productsMainTitle">Metal Roofing and Side Panels</h1>
          <p className="productsMainText">Jays Metal Products offers a wide range of high-end affordable metal roofing and side panels. Their durability and advanced fastener systems allow for long lasting aesthetically pleasing finishes which makes them ideal for both commercial and residential projects.</p>   
          <a href="/diamondrib" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fdiamond%20rib%20630.png?alt=media&token=cc562406-f66b-4620-a0dc-62cbbfba89af"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Aluore 454 System</h3>
              <p className="individualProductsText">The Diamond Rib 630 is a strong metal panel that can be used for a variety of roofing and siding applications. Utilizing multiple strength ribs this profile offers a pleasant appearance while maintaining the strength and durability that is required on commercial applications.</p>
            </div>
          </div></a>
          <a href="/corrugated" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fcorrugated-.png?alt=media&token=45e9ac3c-48ad-414b-88ef-522e088fb96d"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Corrugated 7/8</h3>
              <p className="individualProductsText">This is a timeless panel, with a long history of proven use in the industry. We offer this panel in an assortment of color finishing’s, including galvalume. This panel is utilized for projects on schools, supermarkets and shopping malls.</p>
            </div>
          </div></a> 
          <a href="/corrugated" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fcorrugated-.png?alt=media&token=45e9ac3c-48ad-414b-88ef-522e088fb96d"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Vivo 300 System</h3>
              <p className="individualProductsText">This is a timeless panel, with a long history of proven use in the industry. We offer this panel in an assortment of color finishing’s, including galvalume. This panel is utilized for projects on schools, supermarkets and shopping malls.</p>
            </div>
          </div></a> 
          <a href="/corrugated" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fcorrugated-.png?alt=media&token=45e9ac3c-48ad-414b-88ef-522e088fb96d"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Curved Panel System</h3>
              <p className="individualProductsText">This is a timeless panel, with a long history of proven use in the industry. We offer this panel in an assortment of color finishing’s, including galvalume. This panel is utilized for projects on schools, supermarkets and shopping malls.</p>
            </div>
          </div></a> 
          <a href="standingseam" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-100.png?alt=media&token=1c7a6b67-14fe-429d-ae0e-1d63d9f65b47"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Standing Seam 100</h3>
              <p className="individualProductsText">The SS100 panel is a high end steel roofing panel; with its hidden fastener system it provides a desired aesthetic appeal. It can be manufactured in 1 inch or 1 ½ inch designs depending on the application. The specialized design clip fastening system allows for each panel to cover up the fastening of the previous panel thus providing a fantastic looking roof that provides a long lasting impression in residential and commercial environments.</p>
            </div>
          </div></a>  
          <a href="/standingseam2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Standing Seam 150</h3>
              <p className="individualProductsText">The SS150 panel is a high end steel roofing panel; with its hidden fastener system it provides a desired aesthetic appeal. It can be manufactured in 1 inch or 1 ½ inch designs depending on the application. The specialized design clip fastening system allows for each panel to cover up the fastening of the previous panel thus providing a fantastic looking roof that provides a long lasting impression in residential and commercial environments.</p>
            </div>
          </div></a>
          <a href="/standingseam2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Standing Seam 200</h3>
              <p className="individualProductsText">The SS150 panel is a high end steel roofing panel; with its hidden fastener system it provides a desired aesthetic appeal. It can be manufactured in 1 inch or 1 ½ inch designs depending on the application. The specialized design clip fastening system allows for each panel to cover up the fastening of the previous panel thus providing a fantastic looking roof that provides a long lasting impression in residential and commercial environments.</p>
            </div>
          </div></a>
          <a href="/standingseam2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">AR-24 Roof System</h3>
              <p className="individualProductsText">The SS150 panel is a high end steel roofing panel; with its hidden fastener system it provides a desired aesthetic appeal. It can be manufactured in 1 inch or 1 ½ inch designs depending on the application. The specialized design clip fastening system allows for each panel to cover up the fastening of the previous panel thus providing a fantastic looking roof that provides a long lasting impression in residential and commercial environments.</p>
            </div>
          </div></a>
          <a href="/snaplock"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fsnaplock-100.png?alt=media&token=a9892d5c-55f9-4ce4-97e2-f15c7e051d79"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Interlock 100</h3>
              <p className="individualProductsText">SL100 panels are designed with efficiency in mind. With a similar aesthetic to the Standing Seam panel, the Snap lock panel is another excellent option engineered to be installed without the specialized tight-seaming clips, which the Standing Seam panel utilizes. The Snap lock panel snaps down on one side and is screwed down through its fabricated pleated edge on the other. At Jay's Metal Products, we manufacture both a 1" as well as a 1 1/2" design.</p>
            </div>
          </div></a> 
          <a href="/snaplock2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Interlock 150</h3>
              <p className="individualProductsText">SL150 panels are designed with efficiency in mind. With a similar aesthetic to the Standing Seam panel, the Snap lock panel is another excellent option engineered to be installed without the specialized tight-seaming clips, which the Standing Seam panel utilizes. The Snap lock panel snaps down on one side and is screwed down through its fabricated pleated edge on the other. At Jay's Metal Products, we manufacture both a 1" as well as a 1 1/2" design.</p>
            </div>
          </div></a> 
          <a href="/snaplock2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">QR1200-F</h3>
              <p className="individualProductsText">SL150 panels are designed with efficiency in mind. With a similar aesthetic to the Standing Seam panel, the Snap lock panel is another excellent option engineered to be installed without the specialized tight-seaming clips, which the Standing Seam panel utilizes. The Snap lock panel snaps down on one side and is screwed down through its fabricated pleated edge on the other. At Jay's Metal Products, we manufacture both a 1" as well as a 1 1/2" design.</p>
            </div>
          </div></a>  
          <a href="/snaplock2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Q1200-R</h3>
              <p className="individualProductsText">SL150 panels are designed with efficiency in mind. With a similar aesthetic to the Standing Seam panel, the Snap lock panel is another excellent option engineered to be installed without the specialized tight-seaming clips, which the Standing Seam panel utilizes. The Snap lock panel snaps down on one side and is screwed down through its fabricated pleated edge on the other. At Jay's Metal Products, we manufacture both a 1" as well as a 1 1/2" design.</p>
            </div>
          </div></a> 
          <a href="/snaplock2"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">UCAD Panel</h3>
              <p className="individualProductsText">SL150 panels are designed with efficiency in mind. With a similar aesthetic to the Standing Seam panel, the Snap lock panel is another excellent option engineered to be installed without the specialized tight-seaming clips, which the Standing Seam panel utilizes. The Snap lock panel snaps down on one side and is screwed down through its fabricated pleated edge on the other. At Jay's Metal Products, we manufacture both a 1" as well as a 1 1/2" design.</p>
            </div>
          </div></a> 
          <a href="/master" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fmaster-1236.png?alt=media&token=e0da28d4-c405-4596-a9aa-b11a586c6aad"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Master 1236</h3>
              <p className="individualProductsText">Strength, clean design, and color diversity allows the Master 1236 profile to be the choice on new construction, renovations and in particular, pre-engineered steel buildings.</p>
            </div>
          </div></a> 
          <a href="/grand" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fgrand-1236.png?alt=media&token=be783f65-597b-4be8-af55-a636092a8d39"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Grand 1236</h3>
              <p className="individualProductsText">The Grand 1236 profile is an excellent choice for exterior walls on pre-engineered, insulated metal buildings. The unique inverted profile allows the panel to compress any pre-engineered drape insulation, while causing minimal distortion to the panel itself.</p>
            </div>
          </div></a>
          <a href="/duraclad" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fduraclad-936.png?alt=media&token=95db3cd6-9cac-49d5-81f1-3d34cac90f21"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Duraclad 936</h3>
              <p className="individualProductsText">The Duraclad 936 is well suited for wall or roof applications. This panel offers strength and an anti-syphon side-lap design, an economic solution that provides peace of mind. Available in a wide range of gauges and finishes, Duraclad is one of our most popular panels.</p>
            </div>
          </div></a> 
          <a href="/ultraclad" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fultraclad-936.png?alt=media&token=e401008c-2cff-42f6-81e0-97d5c04b76c2"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Ultraclad 936</h3>
              <p className="individualProductsText">The Ultraclad 936 Profile can be utilized the same way as the Duraclad 936 panel. The Ultraclad 936 profile provides a unique visual appeal, making it a popular choice for both roofing and siding applications.</p>
            </div>
          </div></a>
          <a href="/diamondrib" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fdiamond%20rib%20630.png?alt=media&token=cc562406-f66b-4620-a0dc-62cbbfba89af"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Diamond Rib 630</h3>
              <p className="individualProductsText">The Diamond Rib 630 is a strong metal panel that can be used for a variety of roofing and siding applications. Utilizing multiple strength ribs this profile offers a pleasant appearance while maintaining the strength and durability that is required on commercial applications.</p>
            </div>
          </div></a>
          <a href="/valurib" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fvalurib-630.png?alt=media&token=10fb7fba-fafa-4c74-bf09-6ed5104df974"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">ValuRib 630</h3>
              <p className="individualProductsText">The ValuRib 630 profile further increases our line of metal roofing and siding panels. The ValuRib 630 Panel profile is a great solution for metal roofing and siding panels as it can be secured to the building by fasteners through the panel ribs, it is an ideal application for agricultural and light commercial buildings.</p>
            </div>
          </div></a> 
          <a href="/lowrib" className="individualProductsLink"><div className="individualProducts">
            <img className="individualProductsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Flowrib.png?alt=media&token=acf1ad55-b554-4870-a481-27be1983eeeb"></img>
            <div className="individualProductsDescription">
              <h3 className="individualProductsTitle">Low Rib</h3>
              <p className="individualProductsText"></p>
            </div>
          </div></a>         
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Products;
