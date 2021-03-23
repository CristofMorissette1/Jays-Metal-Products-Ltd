import Head from 'next/head'
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class DeliveryServices extends Component {
    render(){
        return (
            <div className="deliveryMainContainer">
                <Header/>
                <img className="deliveryMainImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fhome%20image1.png?alt=media&token=5023b190-2479-4de8-8d66-9c02fe005c19"></img>
                <h1 className="deliveryServicesTitle">Please refer to our partnered delivery services below:</h1>
                <div className="deliveryContainer">
                    <div className="supplierContainer">
                        <h1 className="supplierTitle">Dan Huynh</h1>
                        <p className="supplierText">(403)-815-7630</p>
                        <p className="supplierText">ND XPRESS</p>
                        <p className="supplierText">Bed Size: Accommodates 10’ wide and 33’ long</p>
                        <p className="supplierText">Maximum Weight Capacity: 15,000lb </p>
                    </div>
                    <div className="supplierContainer">
                        <h1 className="supplierTitle">Chico’s Transport</h1>
                        <p className="supplierText">(403)-888-7630</p>
                        <p className="supplierText">Bed Size: Accommodates up to 24’</p>
                        <p className="supplierText">Maximum Weight Capacity: 30,000lb</p>
                        <p className="supplierText">Crane Reach: Up to 60’ </p>
                        <p className="supplierText">Crane Capacity: 1900-8000lb</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DeliveryServices;