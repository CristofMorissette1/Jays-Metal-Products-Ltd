import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'

class StandardFlashings extends Component {
    constructor(){
        super()
        this.state={
            showRoofFlashings: true,
            showWindowFlashings: false,
            customerName: '',
            phone: '',
            email: '',
            po: '',
            R01: '',
            R02: '',
            R03: '',
            R04: '',
            R05: '',
            R06: '',
            R07: '',
            R08: '',
            R09: '',
            WF01: '',
            WF02: '',
            WF03: '',
            WF04: '',
            WF05: '',
            WF06: '',
            WF07: '',
            WF08: '',
            WF09: '',
            WF10: '',
            WF11: '',
            WF12: '',
            WF13: '',
            WF14: '',
            WF15: '',
            WF16: '',
            WF17: '',
            WF18: '',
            WF19: '',
            WF20: ''
        }
        this.showRoofFlashings = this.showRoofFlashings.bind(this);
        this.showWindowFlashings = this.showWindowFlashings.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRoofFlashingSubmit = this.handleRoofFlashingSubmit.bind(this);
        this.handleSideFlashingSubmit = this.handleSideFlashingSubmit.bind(this);
    }
    
    showRoofFlashings(event) {
        event.preventDefault();
          if (this.state.showRoofFlashings == false) {
          this.setState({
            showRoofFlashings: true,
            showWindowFlashings: false
          });
      }
    }
    
    showWindowFlashings(event) {
        event.preventDefault();
          if (this.state.showWindowFlashings == false) {
          this.setState({
            showWindowFlashings: true,
            showRoofFlashings: false,     
        });
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleRoofFlashingSubmit(e) {
        e.preventDefault();
    
        const {R01, R02, R03, R04, R05, R06, R07, R08, R09, customerName, phone, email, po, } = this.state;
    
        const form = axios.post('http://localhost:3001/api/form', {
            R01,
            R02,
            R03,
            R04,
            R05,
            R06,
            R07,
            R08,
            R09,
            customerName,
            phone,
            email,
            po,
        })
        e.target.reset();
      }

      handleSideFlashingSubmit(e) {
        e.preventDefault();
    
        const {WF01, WF02, WF03, WF04, WF05, WF06, WF07, WF08, WF09, WF10, WF11, WF12, WF13, WF14, WF15, WF16, WF17, WF18, WF19, WF20, customerName, phone, email, po } = this.state;
    
        const form = axios.post('http://localhost:3001/api/form', {
            WF01,
            WF02,
            WF03,
            WF04,
            WF05,
            WF06,
            WF07,
            WF08,
            WF09,
            WF10,
            WF11,
            WF12,
            WF13,
            WF14,
            WF15,
            WF16,
            WF17,
            WF18,
            WF19,
            WF20,
            customerName,
            phone,
            email,
            po,
        })
        e.target.reset();
      }

    render() {
        return (
            <div className="standardFlashingsMainContainer">
                <Header/>
                <div className="standardFlashingsHeaderMain">
                    <a className="headerOptions" onClick={this.showRoofFlashings}>Roof Flashings</a>
                    <a className="headerOptions" onClick={this.showWindowFlashings}>Side Flashings</a>
                </div>
                {
                    this.state.showRoofFlashings ?
                    (
                        <Form onSubmit={this.handleRoofFlashingSubmit} className="flashingsContainerRoof">
                            <div className="orderOptionsTextForm">
                            <h2 className="orderOptionsTextFormTitle">Standard Roof Flashings</h2>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="text"
                                        className="orderOptionsTextInput"
                                        name="customerName" 
                                        placeholder="Customer Name"
                                        onChange={this.handleChange}
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="phone"
                                        className="orderOptionsTextInput"
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={this.handleChange} 
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="text"
                                        className="orderOptionsTextInput"
                                        name="po"
                                        placeholder="PO"
                                        onChange={this.handleChange} 
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="email"
                                        className="orderOptionsTextInput"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={this.handleChange}
                                        required />
                                </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products1" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color1" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size1" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity1" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products2" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color2" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size2" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity2" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products3" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color3" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size3" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity3" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products4" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color4" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size4" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity4" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products5" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color5" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size5" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity5" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products6" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color6" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size6" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity6" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products7" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color7" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size7" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity7" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products8" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color8" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size8" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity8" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products9" required>
                                        <option>-</option>
                                            <option>R01</option>
                                            <option>R02</option>
                                            <option>R03</option>
                                            <option>R04</option>
                                            <option>R05</option>
                                            <option>R06</option>
                                            <option>R07</option>
                                            <option>R08</option>
                                            <option>R09</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color9" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>Brown</option>
                                        <option>Charcoal</option>
                                        <option>Stone Grey</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size9" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>8'</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity9" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <FormGroup className="standardFlashingsRoofFG"> 
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR01.jpg?alt=media&token=00d07b31-23cd-451b-abd6-2477e7f64306"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR02.jpg?alt=media&token=d3b437cc-67a9-4f54-a042-11941d0b720d"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR03.jpg?alt=media&token=525814df-4f4f-4b69-b01c-5c3c0186a979"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR04.jpg?alt=media&token=4b6f68d0-890b-41f9-9192-c524c10a1606"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR05.jpg?alt=media&token=69e28a4b-5a36-4812-861f-8d279abe6756"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR06.jpg?alt=media&token=b95dc21c-aa12-49af-a1e4-79a8e00241b5"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR07.jpg?alt=media&token=2408f5aa-dbe6-4377-8ee4-389cbd6c5d60"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR08.jpg?alt=media&token=f6215c3c-d839-4928-af63-76a7dc217766"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR09.jpg?alt=media&token=6d81dd65-d5b3-4600-9fd7-ab4c884b7f40"/>
                            </FormGroup>
                            <FormGroup className="productDisclaimerFG">
                                <p className="disclaimerTitle">Please note by placing an order with Jay’s Metal Products Ltd. you (THE CUSTOMER) are agreeing to the following terms and conditions:</p>
                                    <ul>
                                        <li>Jay’s Metal Products Ltd. recommends that prior to the installation of panels, the protective film is removed from the panel to prevent any accidents.</li>
                                        <li>ALL orders are custom therefore are considered final sale.</li>
                                        <li>Please refer to our delivery page for partnered delivery services.</li>
                                        <li>If special crating is required, it may be subject to additional costs.</li>
                                        <li>Customers are responsible for ensuring that products are deemed acceptable to their standards before removing the product from the facility. Upon removal from Jay’s Metal Products facility, damages incurred to the product are not covered by Jay’s Metal Products Ltd.</li>
                                        <li>Jay’s Metal Products Ltd. is not responsible for defects to the product during installation.</li>
                                    </ul>
                                    <CustomInput type="checkbox" className="productDisclaimer"/>
                                    <Label>I accept terms and services</Label>
                            </FormGroup>
                            <Button className="roofFlashingsButton"><p className="contactButtonText">Submit</p></Button>
                        </Form>
                    )
                    :
                    (
                        null
                    )
                }
                {
                    this.state.showWindowFlashings ?
                    (
                        <Form onSubmit={this.handleSideFlashingSubmit} className="flashingsContainerRoof">
                            <div className="orderOptionsTextForm">
                            <h2 className="orderOptionsTextFormTitle">Siding & Stucco Flashings</h2>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="text"
                                        className="orderOptionsTextInput"
                                        name="customerName" 
                                        placeholder="Customer Name"
                                        onChange={this.handleChange}
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="phone"
                                        className="orderOptionsTextInput"
                                        name="phone"
                                        placeholder="Phone Number"
                                        onChange={this.handleChange} 
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="text"
                                        className="orderOptionsTextInput"
                                        name="po"
                                        placeholder="PO"
                                        onChange={this.handleChange} 
                                        required />
                                </FormGroup>
                                <FormGroup className="orderOptionsTextFormSmall">
                                    <Input 
                                        type="email"
                                        className="orderOptionsTextInput"
                                        name="email"
                                        placeholder="Email Address"
                                        onChange={this.handleChange}
                                        required />
                                </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products1" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color1" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size1" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity1" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products2" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color2" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size2" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity2" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products3" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color3" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size3" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity3" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products4" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color4" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size4" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity4" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products5" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color5" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size5" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity5" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products6" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color6" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size6" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity6" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products7" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color7" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size7" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity7" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products8" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color8" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size8" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity8" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products9" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color9" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size9" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity9" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products10" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color10" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size10" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity10" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products11" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color11" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size11" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity11" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products12" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color12" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size12" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity12" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products13" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color13" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size13" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity13" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products14" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color14" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size14" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity14" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products15" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color15" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size15" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity15" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products16" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color16" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size16" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity16" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products17" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color17" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size17" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity17" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products18" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color18" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size18" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity18" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products19" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color19" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size19" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity19" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <div className="acmInfoSmall">
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Products</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="products20" required>
                                            <option>-</option>
                                            <option>WF01</option>
                                            <option>WF02</option>
                                            <option>WF03</option>
                                            <option>WF04</option>
                                            <option>WF05</option>
                                            <option>WF06</option>
                                            <option>WF07</option>
                                            <option>WF08</option>
                                            <option>WF09</option>
                                            <option>WF10</option>
                                            <option>WF11</option>
                                            <option>WF12</option>
                                            <option>WF13</option>
                                            <option>WF14</option>
                                            <option>WF15</option>
                                            <option>WF16</option>
                                            <option>WF17</option>
                                            <option>WF18</option>
                                            <option>WF19</option>
                                            <option>WF20</option>
                                        </Input>
                                    </FormGroup>
                                <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                        <label>Color</label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="color20" required>
                                        <option>-</option>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Galvanized</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <Label>Size</Label>
                                        <Input type="select" className="orderOptionsSpecsInput" name="size20" onChange={this.handleChange} required>
                                        <option>-</option>
                                        <option>10'</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup className="orderOptionsSpecsFG">
                                        <label>Quantity</label>
                                        <Input type="text" className="orderOptionsSpecsInput" name="quantity20" onChange={this.handleChange} required/>
                                    </FormGroup>
                            </div>
                            <FormGroup className="standardFlashingsRoofFG"> 
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF01.jpg?alt=media&token=b67a6b22-77a7-408a-8d1d-923b5dbdf73b"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF02.jpg?alt=media&token=4afea9d5-24f7-4fe4-b125-3f052fa3033b"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF03.jpg?alt=media&token=128d9353-2f0e-4f14-91cd-b0bb385d6901"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF04.jpg?alt=media&token=573f4070-be59-43e4-bfe3-2e7099411e90"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF05.jpg?alt=media&token=1f7d75cc-f6ef-4af4-8cff-a15075cb467d"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF06.jpg?alt=media&token=a47bb54a-717b-458d-9cb6-3f525c03efc8"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF07.jpg?alt=media&token=59855c9b-1db3-4ae4-a46c-fd42fba9fc61"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF08.jpg?alt=media&token=6480d69e-9b3e-4ff5-81c0-e61b504a9378"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF09.jpg?alt=media&token=04c1dd52-e214-4313-9d7f-2553c14e9bdb"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF10.jpg?alt=media&token=c8d3484c-a17d-4e61-baf6-85825ba28860"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF11.jpg?alt=media&token=772732e6-65cd-4f6f-bd04-219de767341f"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF12.jpg?alt=media&token=ca13a29f-6dc6-4d87-90ed-9baac89498b0"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF13.jpg?alt=media&token=3b53c838-ed22-44a9-88fb-b5fc8dd77229"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF14.jpg?alt=media&token=54f7e3d1-c42c-4bb6-bb9a-52dd297cce2e"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF15.jpg?alt=media&token=d9f5690b-7da6-4bb9-9cff-d61a6442d37a"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF16.jpg?alt=media&token=debbf9fb-b6db-4d92-9d58-202aebaf6251"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF17.jpg?alt=media&token=e4de45ce-d0d3-45cf-a148-557ba0cab1ab"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF18.jpg?alt=media&token=a6b8ccc2-440e-477b-ae9d-1caf207a1eb9"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF19.jpg?alt=media&token=cae2138c-06e7-4f26-850a-47d2d9c04510"/>
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF20.jpg?alt=media&token=bd2758c2-00df-4715-bf7c-9a039777dbf1"/>
                            </FormGroup>
                            <FormGroup className="productDisclaimerFG">
                                <p className="disclaimerTitle">Please note by placing an order with Jay’s Metal Products Ltd. you (THE CUSTOMER) are agreeing to the following terms and conditions:</p>
                                    <ul>
                                        <li>Jay’s Metal Products Ltd. recommends that prior to the installation of panels, the protective film is removed from the panel to prevent any accidents.</li>
                                        <li>ALL orders are custom therefore are considered final sale.</li>
                                        <li>Please refer to our delivery page for partnered delivery services.</li>
                                        <li>If special crating is required, it may be subject to additional costs.</li>
                                        <li>Customers are responsible for ensuring that products are deemed acceptable to their standards before removing the product from the facility. Upon removal from Jay’s Metal Products facility, damages incurred to the product are not covered by Jay’s Metal Products Ltd.</li>
                                        <li>Jay’s Metal Products Ltd. is not responsible for defects to the product during installation.</li>
                                    </ul>
                                    <CustomInput type="checkbox" className="productDisclaimer"/>
                                    <Label>I accept terms and services</Label>
                            </FormGroup>
                            <Button className="roofFlashingsButton"><p className="contactButtonText">Submit</p></Button>
                        </Form>
                    )
                    :
                    (
                        null
                    )
                }
                <Footer/>
            </div>
        )
    }
}

export default StandardFlashings;