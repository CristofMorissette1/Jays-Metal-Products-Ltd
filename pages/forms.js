import Head from 'next/head'
import Header from '../components/header';
import { Component } from 'react'
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'


class Forms extends Component {
  constructor(){
    super()
    this.state={
      productWarranty: true,
      installationWarranty: false,
      creditAuthorization: false,
      customerApplication: false,
      warrantyfirstname: '',
      warrantylastname: '',
      warrantyemail: '',
      warrantyaddress: '',
      warrantycity: '',
      warrantypostalcode: '',
      warrantynumber: '',
      installercompany: '',
      installercompanyaddress: '',
      installercompanycity: '',
      installercompanyphone: '',
      installercompanyemail: '',
      productname: '',
      purchasedate: '',
      creditcardauthorizationname: '',
      creditcardauthorizationaddress: '',
      creditcardauthorizationcity: '',
      creditcardauthorizationprovince: '',
      creditcardauthorizationpostalcode: '',
      creditcardauthorizationcountry: '',
      creditcardauthorizationemail: '',
      creditcardauthorizationphone: '',
      creditcardauthorizationcardnumber: '',
      creditcardauthorizationcardtype: '',
      creditcardauthorizationcardexpiration: '',
      creditcardauthorizationcardsecuritycode: '',
      creditcardauthorizationcardholdername: '',
      creditcardauthorizationsigndate: '',
      customerapplicationapprovedcredit: '',
      customerapplicationbusinessname: '',
      customerapplicationcity: '',
      customerapplicationemail: '',
      customerapplicationowner1: '',
      customerapplicationowner2: '',
      customerapplicationphone: '',
      customerapplicationpostalcode: '',
      customerapplicationprovince: '',
      customerapplicationrequestedcredit: '',
      customerapplicationstreetaddress: '',
      customerapplicationtradereference1: '',
      customerapplicationtradereference2: '',
      customerapplicationtradereference3: '',
      customerapplicationbankname: '',
      customerapplicationbusinessstart: ''
    }
    this.productWarranty = this.productWarranty.bind(this);
    this.installationWarranty = this.installationWarranty.bind(this);
    this.creditAuthorization = this.creditAuthorization.bind(this);
    this.customerApplication = this.customerApplication.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleProductWarrantySubmit = this.handleProductWarrantySubmit.bind(this);
    this.handleCreditAuthorizationSubmit = this.handleCreditAuthorizationSubmit.bind(this);
    this.handleBusinessCreditSubmit = this.handleBusinessCreditSubmit.bind(this);
  }

  productWarranty(event) {
    event.preventDefault();
      if (this.state.productWarranty == false) {
      this.setState({
        productWarranty: true,
        installationWarranty: false,
        creditAuthorization: false,
        customerApplication: false
      });
    } else {
      null;
    }
}


installationWarranty(event) {
  event.preventDefault();
    if (this.state.installationWarranty == false) {
    this.setState({
      productWarranty: false,
      installationWarranty: true,
      creditAuthorization: false,
      customerApplication: false
    });
  } else {
    null;
  }
}

creditAuthorization(event) {
  event.preventDefault();
    if (this.state.creditAuthorization == false) {
    this.setState({
      productWarranty: false,
      installationWarranty: false,
      creditAuthorization: true,
      customerApplication: false
    });
  } else {
    null;
  }
}

customerApplication(event) {
  event.preventDefault();
    if (this.state.customerApplication == false) {
    this.setState({
      productWarranty: false,
      installationWarranty: false,
      creditAuthorization: false,
      customerApplication: true
    });
  } else {
    null;
  }
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(e.target.value)
}

handleProductWarrantySubmit(e) {
  e.preventDefault();

  const {warrantyfirstname, warrantylastname, warrantyemail, warrantyaddress, warrantycity, warrantypostalcode, warrantynumber, installercompany, installercompanyaddress, installercompanycity, installercompanyemail, installercompanyphone, productname, purchasedate } = this.state;

  const form = axios.post('http://localhost:3001/api/form', {
      warrantyfirstname,
      warrantylastname,
      warrantyemail,
      warrantyaddress,
      warrantycity,
      warrantypostalcode,
      warrantynumber,
      installercompany,
      installercompanyaddress,
      installercompanycity,
      installercompanyphone,
      installercompanyemail,
      productname,
      purchasedate,
  })
  e.target.reset();
}

handleCreditAuthorizationSubmit(e) {
  e.preventDefault();

  const {creditcardauthorizationname, creditcardauthorizationaddress, creditcardauthorizationcity, creditcardauthorizationprovince, creditcardauthorizationpostalcode, creditcardauthorizationcountry, creditcardauthorizationemail, creditcardauthorizationphone, creditcardauthorizationcardnumber, creditcardauthorizationcardtype, creditcardauthorizationcardexpiration, creditcardauthorizationcardsecuritycode, creditcardauthorizationcardholdername, creditcardauthorizationsigndate} = this.state;

  const form = axios.post('http://localhost:3001/api/form', {
    creditcardauthorizationname,
    creditcardauthorizationaddress,
    creditcardauthorizationcity,
    creditcardauthorizationprovince,
    creditcardauthorizationpostalcode,
    creditcardauthorizationcountry,
    creditcardauthorizationemail,
    creditcardauthorizationphone,
    creditcardauthorizationcardnumber,
    creditcardauthorizationcardtype,
    creditcardauthorizationcardexpiration,
    creditcardauthorizationcardsecuritycode,
    creditcardauthorizationcardholdername,
    creditcardauthorizationsigndate,
  })
  e.target.reset();
}

handleBusinessCreditSubmit(e) {
  e.preventDefault();

  const {customerapplicationapprovedcredit, customerapplicationbusinessname, customerapplicationcity, customerapplicationemail, customerapplicationowner1, customerapplicationowner2, customerapplicationphone, customerapplicationpostalcode, customerapplicationprovince, customerapplicationrequestedcredit, customerapplicationstreetaddress, customerapplicationtradereference1, customerapplicationtradereference2, customerapplicationtradereference3, customerapplicationbankname,customerapplicationbusinessstart} = this.state;

  const form = axios.post('http://localhost:3001/api/form', {
    customerapplicationapprovedcredit,
    customerapplicationbusinessname,
    customerapplicationcity,
    customerapplicationemail,
    customerapplicationowner1,
    customerapplicationowner2,
    customerapplicationphone,
    customerapplicationpostalcode,
    customerapplicationprovince,
    customerapplicationrequestedcredit,
    customerapplicationstreetaddress,
    customerapplicationtradereference1,
    customerapplicationtradereference2,
    customerapplicationtradereference3,
    customerapplicationbankname,
    customerapplicationbusinessstart
  })
  e.target.reset();
}


  render(){
    return (
      <div className="formMainContainer">
        <Header/>
        <h1 className="formsTitle">Forms & Resources</h1>
        <div className="formsMenu">
          <a className="formsMenuOptions" onClick={this.productWarranty}>Product Warranty</a>
          <a className="formsMenuOptions" onClick={this.installationWarranty}>Installation Warranty</a>
          <a className="formsMenuOptions" onClick={this.creditAuthorization}>Credit Authorization Form</a>
          <a className="formsMenuOptions" onClick={this.customerApplication}>Customer Application Form</a>
        </div>
        {
          this.state.productWarranty
          ? (
        <div className="productWarrantyContainer">
          <h2 className="productWarrantyTitle">Jay's Metal Products Warranty Registration</h2>
          <p className="productWarrantyText">Register your Jay's Metal Products warranty by filling out the form below. All fields marked with a * are required.</p>
          <Form onSubmit={this.handleProductWarrantySubmit} className="productWarrantyMainForm">
            <h2 className="productWarrantyTitleSmall">1. Homeowner/ Property Owner Information:</h2>
            <FormGroup className="productWarrantyFG">
              <label>*First Name</label>
              <Input className="productWarrantyInput" type="text" name="warrantyfirstname" placeholder="First Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Last Name</label>
              <Input className="productWarrantyInput" type="text" name="warrantylastname" placeholder="Last Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Email</label>
              <Input className="productWarrantyInput" type="email" name="warrantyemail" placeholder="Email" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Address</label>
              <Input className="productWarrantyInput" type="text" name="warrantyaddress" placeholder="Address" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*City</label>
              <Input className="productWarrantyInput" type="text" name="warrantycity" placeholder="City" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Postal Code</label>
              <Input className="productWarrantyInput" type="text" name="warrantypostalcode" placeholder="Postal Code" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Phone Number</label>
              <Input className="productWarrantyInput" type="text" name="warrantynumber" placeholder="Phone Number" onChange={this.handleChange} required/>
            </FormGroup>
            <h2 className="productWarrantyTitleSmall">2. Installer Information</h2>
            <p className="productWarrantyText">If you installed your Jay's Metal Products yourself, please fill out your name and address below instead of the company name and address of an installation company.</p>
            <FormGroup className="productWarrantyFG">
              <label>*Installer Company Name</label>
              <Input className="productWarrantyInput" type="text" name="installercompany" placeholder="Company Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Street Address</label>
              <Input className="productWarrantyInput" type="text" name="installercompanyaddress" placeholder="Address" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*City</label>
              <Input className="productWarrantyInput" type="text" name="installercompanycity" placeholder="City" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Phone Number</label>
              <Input className="productWarrantyInput" type="text" name="installercompanyphone" placeholder="Phone Number" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Email</label>
              <Input className="productWarrantyInput" type="text" name="installercompanyemail" placeholder="Email Address" onChange={this.handleChange} required/>
            </FormGroup>
            <h2 className="productWarrantyTitleSmall">3. Product/Purchase Information:</h2>
            <FormGroup className="productWarrantyFG">
              <label>*Date Product Was Purchased</label>
              <Input className="productWarrantyInput" type="text" name="purchasedate" placeholder="Purchase Date" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Product Name, Color and Gauge</label>
              <Input className="productWarrantyInput" type="text" name="productname" placeholder="Product Name" onChange={this.handleChange} required/>
            </FormGroup>
            <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
          </Form>
        </div>
          ):(
          null
          )
        }
        <div className="installationWarrantyContainer">

        </div>
        {
          this.state.creditAuthorization
          ? (
        <div className="productWarrantyContainer">
          <Form className="productWarrantyMainForm" onSubmit={this.handleCreditAuthorizationSubmit}>
            <h2 className="productWarrantyTitle">Cardholder Information</h2>
            <FormGroup className="productWarrantyFG">
              <label>*Name</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationname" placeholder="Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Billing Address</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationaddress" placeholder="Address" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*City</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcity" placeholder="City" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Province</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationprovince" placeholder="Province" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Postal Code</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationpostalcode" placeholder="Postal Code" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Country</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcountry" placeholder="Country" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Email</label>
              <Input className="productWarrantyInput" type="email" name="creditcardauthorizationemail" placeholder="Email" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Phone Number</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationphone" placeholder="Phone Number" onChange={this.handleChange} required/>
            </FormGroup>
            <h2 className="productWarrantyTitle">Cardholder Information</h2>
            <FormGroup className="productWarrantyFG">
              <label>*Credit Card Type</label>
              <Input className="productWarrantyInput" type="select" name="creditcardauthorizationcardtype" onChange={this.handleChange}  required>
                <option>-</option>
                <option>Mastercard</option>
                <option>Visa</option>
                <option>American Express</option>
                <option>Discovery Card</option>
              </Input>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Card Number</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcardnumber" placeholder="Credit Card Number" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Expiration Date</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcardexpiration" placeholder="mm/yr" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Security Code</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcardsecuritycode" placeholder="0000" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Cardholder Name</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationcardholdername" placeholder="Full Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Date</label>
              <Input className="productWarrantyInput" type="text" name="creditcardauthorizationsigndate" placeholder="mm/day/year" onChange={this.handleChange} required/>
            </FormGroup>
            <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
          </Form>
        </div>
          ):(
            null
          )
        }
        {
          this.state.customerApplication ?
          (
          <div className="customerApplicationContainer">
            <h1 className="customerApplicationTitle">Business Credit Application</h1>
            <Form className="customerApplicationForm" onSubmit={this.handleBusinessCreditSubmit}>
              <h2 className="productWarrantyTitle">Company Information</h2>
              <FormGroup className="productWarrantyFG">
              <label>*Requested Credit</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationrequestedcredit" placeholder="Requested credit" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Approved Credit</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationapprovedcredit" placeholder="Approved credit" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Business Name</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationbusinessname" placeholder="Business name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Street</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationstreetaddress" placeholder="Street address" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*City</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationcity" placeholder="City" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Province</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationprovince" placeholder="Province" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Postal</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationpostalcode" placeholder="Postal" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Email</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationemail" placeholder="Email" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Phone</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationphone" placeholder="Phone" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Owner</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationowner1" placeholder="Owner Name" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>Co Owner</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationowner2" placeholder="Co Owner Name" onChange={this.handleChange}/>
            </FormGroup>
            <h2 className="productWarrantyTitle">Banking Information</h2>
            <FormGroup className="productWarrantyFG">
              <label>*Business Started</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationbusinessstart" placeholder="Start Date" onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <label>*Bank Name and Address</label>
              <Input className="productWarrantyInput" type="text" name="customerapplicationbankname" placeholder="Name and Address" onChange={this.handleChange} required/>
            </FormGroup>
            <h2 className="productWarrantyTitle">Trade References</h2>
            <FormGroup className="productWarrantyFG">
              <Input className="productWarrantyInput" type="text" name="customerapplicationtradereference1" placeholder="Name, Phone, Fax number and Email" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <Input className="productWarrantyInput" type="text" name="customerapplicationtradereference2" placeholder="Name, Phone, Fax number and Email" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup className="productWarrantyFG">
              <Input className="productWarrantyInput" type="text" name="customerapplicationtradereference3" placeholder="Name, Phone, Fax number and Email" onChange={this.handleChange}/>
            </FormGroup>
              <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
            </Form>
          </div>
          ) : (
            null
          )
        }
        <Footer/>
      </div>
    )
  }
}

export default Forms;