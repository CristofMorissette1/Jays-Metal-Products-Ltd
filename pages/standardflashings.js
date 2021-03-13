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
    
        const {R01, R02, R03, R04, R05, R06, R07, R08, R09 } = this.state;
    
        const form = axios.post('http://localhost:3001/api/form', {
          R01,
          R02,
          R03,
          R04,
          R05,
          R06,
          R07,
          R08,
          R09
        })
        e.target.reset();
      }

      handleSideFlashingSubmit(e) {
        e.preventDefault();
    
        const {WF01, WF02, WF03, WF04, WF05, WF06, WF07, WF08, WF09, WF10, WF11, WF12, WF13, WF14, WF15, WF16, WF17, WF18, WF19, WF20 } = this.state;
    
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
            WF20
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
                            <h1 className="roofFlashingsTitle">Standard Roof Flashings</h1>
                            <FormGroup className="standardFlashingsRoofFG"> 
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR01.jpg?alt=media&token=00d07b31-23cd-451b-abd6-2477e7f64306"/>
                                <CustomInput
                                    className="flashingsRoofInput" 
                                    name="R01"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    onChange={this.handleChange}
                                    />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR02.jpg?alt=media&token=d3b437cc-67a9-4f54-a042-11941d0b720d"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R02"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR03.jpg?alt=media&token=525814df-4f4f-4b69-b01c-5c3c0186a979"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R03"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR04.jpg?alt=media&token=4b6f68d0-890b-41f9-9192-c524c10a1606"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R04"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR05.jpg?alt=media&token=69e28a4b-5a36-4812-861f-8d279abe6756"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R05"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR06.jpg?alt=media&token=b95dc21c-aa12-49af-a1e4-79a8e00241b5"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R06"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR07.jpg?alt=media&token=2408f5aa-dbe6-4377-8ee4-389cbd6c5d60"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R07"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR08.jpg?alt=media&token=f6215c3c-d839-4928-af63-76a7dc217766"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R08"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FR09.jpg?alt=media&token=6d81dd65-d5b3-4600-9fd7-ab4c884b7f40"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="R09"
                                    onChange={this.handleChange} />
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
                            <h1 className="roofFlashingsTitle">Siding & Stucco</h1>
                            <FormGroup className="standardFlashingsRoofFG"> 
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF01.jpg?alt=media&token=b67a6b22-77a7-408a-8d1d-923b5dbdf73b"/>
                                <CustomInput
                                    className="flashingsRoofInput" 
                                    name="WF01"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    onChange={this.handleChange}
                                    />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF02.jpg?alt=media&token=4afea9d5-24f7-4fe4-b125-3f052fa3033b"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF02"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF03.jpg?alt=media&token=128d9353-2f0e-4f14-91cd-b0bb385d6901"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF03"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF04.jpg?alt=media&token=573f4070-be59-43e4-bfe3-2e7099411e90"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF04"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF05.jpg?alt=media&token=1f7d75cc-f6ef-4af4-8cff-a15075cb467d"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF05"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF06.jpg?alt=media&token=a47bb54a-717b-458d-9cb6-3f525c03efc8"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF06"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF07.jpg?alt=media&token=59855c9b-1db3-4ae4-a46c-fd42fba9fc61"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF07"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF08.jpg?alt=media&token=6480d69e-9b3e-4ff5-81c0-e61b504a9378"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF08"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF09.jpg?alt=media&token=04c1dd52-e214-4313-9d7f-2553c14e9bdb"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF09"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF10.jpg?alt=media&token=c8d3484c-a17d-4e61-baf6-85825ba28860"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF10"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF11.jpg?alt=media&token=772732e6-65cd-4f6f-bd04-219de767341f"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF11"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF12.jpg?alt=media&token=ca13a29f-6dc6-4d87-90ed-9baac89498b0"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF12"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF13.jpg?alt=media&token=3b53c838-ed22-44a9-88fb-b5fc8dd77229"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF13"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF14.jpg?alt=media&token=54f7e3d1-c42c-4bb6-bb9a-52dd297cce2e"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF14"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF15.jpg?alt=media&token=d9f5690b-7da6-4bb9-9cff-d61a6442d37a"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF15"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF16.jpg?alt=media&token=debbf9fb-b6db-4d92-9d58-202aebaf6251"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF16"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF17.jpg?alt=media&token=e4de45ce-d0d3-45cf-a148-557ba0cab1ab"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF17"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF18.jpg?alt=media&token=a6b8ccc2-440e-477b-ae9d-1caf207a1eb9"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF18"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF19.jpg?alt=media&token=cae2138c-06e7-4f26-850a-47d2d9c04510"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF19"
                                    onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className="standardFlashingsRoofFG">
                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standard%20Flashings%2FWF20.jpg?alt=media&token=bd2758c2-00df-4715-bf7c-9a039777dbf1"/>
                                <CustomInput 
                                    className="flashingsRoofInput"
                                    type="text"
                                    placeholder="Color, Quantity"
                                    name="WF20"
                                    onChange={this.handleChange} />
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