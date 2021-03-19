import Head from 'next/head'
import { Component } from 'react';
import Header from '../components/header';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import Footer from '../components/footer';
import axios from 'axios'

class Amc extends Component {
  constructor(){
    super()
    this.state={
      panelA: true,
      panelB: false,
      panelC: false,
      customerName: '',
      phone: '',
      email: '',
      address: '',
      extrusions: '',
      reveals: '',
      starter: '',
      linears: '',
      panelname: '',
      acmpanels: '',
      acmaccessories: '',
      acmpaneloption1: '',
      acmpaneloption2: '',
      parapetcapflashing: '',
      acmparapetcap: '',
      acmpaneljoints: '',
      acminsidecorner: '',
      acmoutsidecorner: '',
      acmupperwindowdrip: '',
      acmsidewindow: '',
      acmlowerwindowdrip: '',
      acmpanelendwall: ''
    }
    this.panelA = this.panelA.bind(this);
    this.panelB = this.panelB.bind(this);
    this.panelC = this.panelC.bind(this);
    this.printPage = this.printPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  panelA(event) {
    event.preventDefault();
      if (this.state.panelA == false) {
      this.setState({
        panelA: true,
        panelB: false,
        panelC: false
      });
    } else {
      null;
    }
}


panelB(event) {
  event.preventDefault();
    if (this.state.panelB == false) {
    this.setState({
      panelA: false,
      panelB: true,
      panelC: false
    });
  } else {
    null;
  }
}

panelC(event) {
  event.preventDefault();
    if (this.state.panelC == false) {
    this.setState({
      panelA: false,
      panelB: false,
      panelC: true
    });
  } else {
    null;
  }
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

printPage = e => {
  e.preventDefault();
  window.print();
}

handleSumbit(e) {
  e.preventDefault();

  const { extrusions, reveals, starter, linears, panelname, acmpanels, acmaccessories, acmpaneloption1, acmpaneloption2, parapetcapflashing, acmparapetcap, acmpaneljoints, acminsidecorner, acmoutsidecorner, acmupperwindowdrip, acmsidewindow, acmlowerwindowdrip, acmpanelendwall, customerName, phone, email, address,} = this.state;

  const form = axios.post('http://localhost:3001/api/form', {
    extrusions,
    reveals,
    starter,
    linears,
    panelname,
    acmpanels,
    acmaccessories,
    acmpaneloption1,
    acmpaneloption2,
    parapetcapflashing,
    acmparapetcap,
    acmpaneljoints,
    acminsidecorner,
    acmoutsidecorner,
    acmupperwindowdrip,
    acmsidewindow,
    acmlowerwindowdrip,
    acmpanelendwall,
    customerName,
    phone,
    email,
    address,
  })
  e.target.reset();
}

  render() {
    return (
      <div className="amcMainContainer">
          <Header/>
          <img className="acmLandingImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/productsPages%2Facm%20landing.jpg?alt=media&token=2fb558d6-7abb-450e-b1b1-88dddbd3961b"/>
        <div className="acmMenuOptions">         
          <a className="acmHeaderOptions" onClick={this.panelA}>Panel A<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Flowrib.png?alt=media&token=acf1ad55-b554-4870-a481-27be1983eeeb"/></a>
          <a className="acmHeaderOptions" onClick={this.panelB}>Panel B<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Flowrib.png?alt=media&token=acf1ad55-b554-4870-a481-27be1983eeeb"/></a>
          <a className="acmHeaderOptions" onClick={this.panelC}>Panel C<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Flowrib.png?alt=media&token=acf1ad55-b554-4870-a481-27be1983eeeb"/></a>
        </div>
        <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit}>
          <div className="acmOptionsSpecsSmall">
            <div className="orderOptionsTextForm">
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
                      type="email"
                      className="orderOptionsTextInput"
                      name="email"
                      placeholder="Email Address"
                      onChange={this.handleChange}
                      required />
              </FormGroup>
              <FormGroup className="orderOptionsTextFormSmall">
                  <Input 
                      type="text"
                      className="orderOptionsTextInput"
                      name="address"
                      placeholder="Customer Address"
                      onChange={this.handleChange} 
                      required />
              </FormGroup>
            </div>
            <div className="acmInfoSmall">
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Extrusions</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="extrusions" required />
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Reveals</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="reveals" required />
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>Starter</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <label>Linears</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="linears" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <label>Panel Name</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
                </div>
            </div>
        {
          this.state.panelA ? (
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel A SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                    <CustomInput
                        className="orderOptionsFlashingsInput" 
                        name="acmpanels"
                        type="text"
                        placeholder="QTY"
                        onChange={this.handleChange}
                        />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmaccessories"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption1"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption2"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="parapetcapflashing"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmparapetcap"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneljoints"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acminsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmoutsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmupperwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmsidewindow"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmlowerwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpanelendwall"
                        onChange={this.handleChange} />
                </FormGroup>
            </div>
        </div>
          ) :
          (
            null
          )
        }
        {
          this.state.panelB ? (
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel B SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                    <CustomInput
                        className="orderOptionsFlashingsInput" 
                        name="acmpanels"
                        type="text"
                        placeholder="QTY"
                        onChange={this.handleChange}
                        />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmaccessories"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption1"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption2"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="Parapet Cap Flashing"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmparapetcap"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneljoints"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acminsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmoutsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmupperwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmsidewindow"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmlowerwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpanelendwall"
                        onChange={this.handleChange} />
                </FormGroup>
            </div>
        </div>
          ) :
          (
            null
          )
        }
        {
          this.state.panelC ? (
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel C SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                    <CustomInput
                        className="orderOptionsFlashingsInput" 
                        name="acmpanels"
                        type="text"
                        placeholder="QTY"
                        onChange={this.handleChange}
                        />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmaccessories"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption1"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneloption2"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="Parapet Cap Flashing"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmparapetcap"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpaneljoints"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acminsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmoutsidecorner"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmupperwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmsidewindow"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmlowerwindowdrip"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                    <CustomInput 
                        className="orderOptionsFlashingsInput"
                        type="text"
                        placeholder="QTY"
                        name="acmpanelendwall"
                        onChange={this.handleChange} />
                </FormGroup>
            </div>
        </div>
          ) :
          (
            null
          )
        }
        <Button className="contactButton" onClick={this.printPage}><p className="contactButtonText">Print Page</p></Button>
        <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
        </Form>
        <Footer/>
      </div>
    )
  }
}

export default Amc;