import Head from 'next/head'
import { Component } from 'react';
import Header from '../components/header';

class DeliveryServices extends Component {
    render(){
        return (
            <div className="deliveryMainContainer">
                <Header/>
                <img className="deliveryMainImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Delivery%20Services%2Fdelivery%20services%20landing%20image.png?alt=media&token=aaf8d979-efb7-488e-841c-4b4c171ed799"></img>
                <div className="deliveryContainer">
                    <div className="supplierContainer">
                        <img className="supplierLogo" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Delivery%20Services%2Froofmart.png?alt=media&token=d2ba9e3d-42d1-4455-a5b6-762d2dfd4d33"></img>
                        <h1 className="supplierTitle">Roofmart Alberta Inc. (North Calgary)</h1>
                        <p className="supplierText">4080, 6A Street N.E., Calgary, AB T2G 4B1</p>
                        <p className="supplierText">403-277-9641</p>
                        <a className="supplierText" href="/www.roofmart.ca">www.roofmart.ca</a>
                    </div>
                    <div className="supplierContainer">
                        <img className="supplierLogo" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Delivery%20Services%2Froofmart.png?alt=media&token=d2ba9e3d-42d1-4455-a5b6-762d2dfd4d33"></img>
                        <h1 className="supplierTitle">Roofmart Alberta Inc. (South Calgary)</h1>
                        <p className="supplierText">7127 Fairmont Drive S.E., Calgary, AB T2H 0X6</p>
                        <p className="supplierText">403-253-7553</p>
                        <a className="supplierText" href="/www.roofmart.ca">www.roofmart.ca</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeliveryServices;