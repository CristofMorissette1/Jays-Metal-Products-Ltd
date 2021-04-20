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
      panelAOrderOptions: false,
      panelASpecOptions: false,
      panelBOrderOptions: false,
      panelBSpecOptions: false,
      panelCOrderOptions: false,
      panelCSpecOptions: false,
      panelA: false,
      panelB: false,
      panelC: false,
      specOptions: false,
      orderOptions: false,
      customerName: '',
      phone: '',
      email: '',
      po: '',
      extrusions: '',
      reveals: '',
      starter: '',
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
    this.panelAOrderOptions = this.panelAOrderOptions.bind(this);
    this.panelBSpecOptions = this.panelBSpecOptions.bind(this);
    this.panelASpecOptions = this.panelASpecOptions.bind(this);
    this.panelBOrderOptions = this.panelBOrderOptions.bind(this);
    this.panelCOrderOptions = this.panelCOrderOptions.bind(this);
    this.panelCSpecOptions = this.panelCSpecOptions.bind(this);
  }

  panelASpecOptions(event) {
    event.preventDefault();
      if (this.state.panelASpecOptions == false) {
      this.setState({
        panelASpecOptions: true,
        panelAOrderOptions: false,
        panelBSpecOptions: false,
        panelBOrderOptions: false,
        panelCOrderOptions: false,
        panelCSpecOptions: false,
        panelC: false,
        panelB: false
      });
    } else {
      null;
    }
}

panelAOrderOptions(event) {
  event.preventDefault();
    if (this.state.panelAOrderOptions == false) {
    this.setState({
      panelASpecOptions: false,
      panelAOrderOptions: true,
      panelBSpecOptions: false,
      panelBOrderOptions: false,
      panelCOrderOptions: false,
      panelCSpecOptions: false,
      panelC: false,
      panelB: false
    });
  } else {
    null;
  }
}

panelBSpecOptions(event) {
  event.preventDefault();
    if (this.state.panelBSpecOptions == false) {
    this.setState({
      panelBSpecOptions: true,
      panelBOrderOptions: false,
      panelASpecOptions: false,
      panelAOrderOptions: false,
      panelCOrderOptions: false,
      panelCSpecOptions: false,
      panelC: false,
      panelA: false
    });
  } else {
    null;
  }
}

panelBOrderOptions(event) {
event.preventDefault();
  if (this.state.panelBOrderOptions == false) {
  this.setState({
    panelBSpecOptions: false,
    panelBOrderOptions: true,
    panelASpecOptions: false,
    panelAOrderOptions: false,
    panelCOrderOptions: false,
    panelCSpecOptions: false,
    panelC: false,
    panelA: false
  });
} else {
  null;
}
}

panelCSpecOptions(event) {
  event.preventDefault();
    if (this.state.panelCSpecOptions == false) {
    this.setState({
      panelCSpecOptions: true,
      panelCOrderOptions: false,
      panelBSpecOptions: false,
      panelBOrderOptions: false,
      panelASpecOptions: false,
      panelAOrderOptions: false,
      panelB: false,
      panelA: false
    });
  } else {
    null;
  }
}

panelCOrderOptions(event) {
event.preventDefault();
  if (this.state.panelCOrderOptions == false) {
  this.setState({
    panelBSpecOptions: false,
    panelCOrderOptions: true,
    panelCSpecOptions: false,
    panelBOrderOptions: false,
    panelASpecOptions: false,
    panelAOrderOptions: false,
    panelB: false,
    panelA: false
  });
} else {
  null;
}
}

  panelA(event) {
    event.preventDefault();
      if (this.state.panelA == false) {
      this.setState({
        panelA: true,
        panelB: false,
        panelC: false,
        panelBSpecOptions: false,
        panelBOrderOptions: false,
        panelASpecOptions: false,
        panelAOrderOptions: true,
        panelCOrderOptions: false,
        panelCSpecOptions: false
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
      panelC: false,
      panelBSpecOptions: false,
      panelBOrderOptions: true,
      panelASpecOptions: false,
      panelAOrderOptions: false,
      panelCOrderOptions: false,
      panelCSpecOptions: false
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
      panelC: true,
      panelBSpecOptions: false,
      panelBOrderOptions: false,
      panelASpecOptions: false,
      panelAOrderOptions: false,
      panelCOrderOptions: true,
      panelCSpecOptions: false
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

  const { extrusions, reveals, starter, panelname, acmpanels, acmaccessories, acmpaneloption1, acmpaneloption2, parapetcapflashing, acmparapetcap, acmpaneljoints, acminsidecorner, acmoutsidecorner, acmupperwindowdrip, acmsidewindow, acmlowerwindowdrip, acmpanelendwall, customerName, phone, email, po,} = this.state;

  const form = axios.post('http://localhost:3001/api/form', {
    extrusions,
    reveals,
    starter,
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
    po,
  })
  e.target.reset();
}

  render() {
    return (
      <div className="amcMainContainer">
          <Header/>
          <img className="acmLandingImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/productsPages%2Facm%20landing.jpg?alt=media&token=2fb558d6-7abb-450e-b1b1-88dddbd3961b"/>
        <div className="acmMenuOptions">         
          <a className="acmHeaderOptions" onClick={this.panelA}>Panel A<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2FPanel%20A.jpg?alt=media&token=16bdb42a-9efc-48dd-9020-2ea97de7b96c"/></a>
          <a className="acmHeaderOptions" onClick={this.panelB}>Panel B<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Fpanel%20b.jpg?alt=media&token=04156903-4fa3-4997-9ee4-8995dfb12d35"/></a>
          <a className="acmHeaderOptions" onClick={this.panelC}>Panel C<img className="acmMenuImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Fpanel%20c.jpg?alt=media&token=e8b8db88-40bc-47d2-bf68-79ef24d86367"/></a>
        </div>
        <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit}>
        {
          this.state.panelA ? (
            <div className="acmPage4thContainerHeader">
              <a className="headerOptions" onClick={this.panelAOrderOptions}>Order Now</a>
              <a className="headerOptions" onClick={this.panelASpecOptions}>Specs</a>
            </div>
          ) :
          (
            null
          )
        }
        {
          this.state.panelASpecOptions ? (
            <div>
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel A SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                </FormGroup>
            </div>
        </div>
        </div>
          ) : (
            null
          )
          
        }
        {
          this.state.panelAOrderOptions ? (
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
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Panel Name</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
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
                </div>
                <div className="acmInfoSmall">
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Ex 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="extrusions" required />
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 3'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="reveals" required />
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>End Clip 3'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>Rivet 250 Bag'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Tek Screws</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Wood Grip</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                </div>
                <div className="acmInfoSmall">
                  <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/16' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/8' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/4' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                  </div>
            </div>
          ) : (
            null
          )
        }
        {
          this.state.panelB ? (
            <div className="acmPage4thContainerHeader">
              <a className="headerOptions" onClick={this.panelBOrderOptions}>Order Now</a>
              <a className="headerOptions" onClick={this.panelBSpecOptions}>Specs</a>
            </div>
          ) :
          (
            null
          )
        }
        {
          this.state.panelBSpecOptions ? (
            <div>
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel B SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                </FormGroup>
            </div>
        </div>
        </div>
          ) : (
            null
          )
          
        }
        {
          this.state.panelBOrderOptions ? (
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
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Panel Name</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
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
                </div>
                <div className="acmInfoSmall">
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Ex 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="extrusions" required />
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 3'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="reveals" required />
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>End Clip 3'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>Rivet 250 Bag'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Tek Screws</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Wood Grip</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                </div>
                <div className="acmInfoSmall">
                  <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/16' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/8' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/4' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                  </div>
            </div>
          ) : (
            null
          )
        }
        {
          this.state.panelC ? (
            <div className="acmPage4thContainerHeader">
              <a className="headerOptions" onClick={this.panelCOrderOptions}>Order Now</a>
              <a className="headerOptions" onClick={this.panelCSpecOptions}>Specs</a>
            </div>
          ) :
          (
            null
          )
        }
        {
          this.state.panelCSpecOptions ? (
            <div>
            <div className="orderOptionsFlashingsMainContainer">
            <h2 className="orderOptionsTitle">Panel C SPECS:</h2>
            <div className="acmFlashingsContainerSmall">
                <FormGroup className="acmOrderOptionsFG"> 
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel1.jpg?alt=media&token=d111811e-f11d-408a-a3d5-490b6648e33c"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel2.jpg?alt=media&token=9387f4b3-cef9-411b-9da7-36e840fb0902"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel3.jpg?alt=media&token=24d9b08e-7d87-44dc-a683-638d86f6c680"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel4.jpg?alt=media&token=d951eb90-c075-4462-bf1b-d05477150ba9"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel5.jpg?alt=media&token=fa2c18f3-dc66-423d-827d-cd00bf90d91b"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel6.jpg?alt=media&token=16e30d19-e0f1-4d26-9c20-227456b6accb"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel7.jpg?alt=media&token=93d1f1ff-c460-48d1-a423-c4f4d3c0f021"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel8.jpg?alt=media&token=915f6c8d-7a4d-4730-b451-42ec2c1ce413"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel9.jpg?alt=media&token=9b7c0069-0e74-47b4-8afd-6ae77ec917b0"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel10.jpg?alt=media&token=90250ea3-7ffc-40c2-bac7-119e0b6c5306"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel11.jpg?alt=media&token=6d1a7d02-fc51-4cbf-998c-602f539d100f"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel12.jpg?alt=media&token=c12c5dfb-4b3a-4ccb-949a-0c992be5b78a"/>
                </FormGroup>
                <FormGroup className="acmOrderOptionsFG">
                    <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/acm%2Facm%20panel13.jpg?alt=media&token=1726c905-1221-47a2-b91e-eccb1cbe21bf"/>
                </FormGroup>
            </div>
        </div>
        </div>
          ) : (
            null
          )
          
        }
        {
          this.state.panelCOrderOptions ? (
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
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Panel Name</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
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
                </div>
                <div className="acmInfoSmall">
            <FormGroup className="orderOptionsSpecsFG">
                      <label>Ex 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="panelname" onChange={this.handleChange} required/>
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 20'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="extrusions" required />
                  </FormGroup>
              <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                      <label>Starter 3'</label>
                      <Input type="text" className="orderOptionsSpecsInput" name="reveals" required />
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>End Clip 3'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>Rivet 250 Bag'</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Tek Screws</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                  <FormGroup className="orderOptionsSpecsFG">
                      <Label>#10 - Wood Grip</Label>
                      <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                  </FormGroup>
                </div>
                <div className="acmInfoSmall">
                  <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/16' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/8' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup className="orderOptionsSpecsFG">
                        <Label>1/4' - Horse Shoe Shims 100pc</Label>
                        <Input type="text" className="orderOptionsSpecsInput" name="starter" onChange={this.handleChange} required/>
                    </FormGroup>
                  </div>
            </div>
          ) : (
            null
          )
        }
        <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
        </Form>
        <Footer/>
      </div>
    )
  }
}

export default Amc;