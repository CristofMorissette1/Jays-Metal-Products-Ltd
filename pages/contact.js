import Head from 'next/head'
import React, { Component } from 'react';
import Header from '../components/header';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap'
import axios from 'axios'
import { FaRegClock } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Footer from '../components/footer';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSumbit(e) {
    e.preventDefault();

    const { firstName, lastName, phone, email, message} = this.state;

    const form = axios.post( {
      firstName,
      lastName,
      phone,
      email,
      message
    })
    e.target.reset();
  }


  render() {
    return (
      <div className="ContactMainContainer">
        <Header/>
        <img className="contactImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fcontact%20image.jpg?alt=media&token=8e7061d9-76b8-44e7-a97c-83dce3edb951"></img>
            <div className="contactPageContainer">
              <div className="contactPageSideMenu">
                <div className="sideBarEmail">
                  <FaMailBulk className="mailIcon"/>
                  <p className="contactText">Email us</p>
                  <p className="contactText">sales@ic-services.ca</p>
                </div>
                <div className="sideBarWebsite">
                  <FaHome className="houseIcon"/>
                  <p className="contactText">Visit us</p>
                  <a className="contactText" href="https://ic-services.netlify.app/">http://jaysmetal.net</a>
                </div>
                <div className="sideBarTime">
                  <FaRegClock className="clockIcon"/>
                  <p className="contactText">Monday - Friday</p>
                  <p className="contactText">9:00am - 5:00pm</p>
                </div>
              </div>
            <Form onSubmit={this.handleSumbit}>
              <p className="contactTitle">Please share your information with us for a detailed response:</p>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="firstName" 
                  placeholder="First Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="organizationName"
                  placeholder="Organization Name"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="contactForm">
                <Input 
                  type="text"
                  name="organizationWebsite"
                  placeholder="Organization Website"
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="messageGroupForm">
                <textarea 
                  type="textarea"
                  name="message"
                  placeholder="How can we help you?"
                  onChange={this.handleChange} />
              </FormGroup>
              <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
            </Form>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Contact;