import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

class Diamondrib extends Component{
    render(){
        return (
            <div className="diamondMainContainer">
                <Header/>
                <p>diamond page</p>
                <Footer/>
            </div>
        )
    }
}

export default Diamondrib;