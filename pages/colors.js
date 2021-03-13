import Head from 'next/head'
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Colors extends Component {
    constructor(){
        super()
        this.state = {
            metalliccolors: true
        }
        this.metallicColors = this.metallicColors.bind(this);
    }

    metallicColors(event) {
        event.preventDefault();
          if (this.state.metalliccolors == false) {
          this.setState({
            metalliccolors: true,
          });
        } else {
          null;
        }
    }

    render() {
        return (
            <div className="colorsMainContainer">
                <Header/>
                <div className="productsPage4thContainerHeader">
                    <a className="headerOptions" onClick={this.metallicColors}>Metallic Colors</a>
                    <a className="headerOptions">ACM Colors</a>
                </div>
                {
                    this.state.metalliccolors ?
                    (
                        <div className="metallicColorsMainContainer">
                            <div className="metallicColors">
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Faged%20copper.jpg?alt=media&token=63d82674-48dc-4226-b5c6-7c4546a0bc10"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcopper%20penny.jpg?alt=media&token=550d6498-3c43-4502-9640-b32becf68344"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20zinc.jpg?alt=media&token=41102e24-0769-48b8-a1b6-4ff6c8ee568a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flight%20zinc.jpg?alt=media&token=b9c48f7a-430c-4237-8008-3bb7f960e44e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Frustic%20red.jpg?alt=media&token=4ca6a752-0bb5-45eb-867a-9c4b28bd87c1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsilver%20zinc.jpg?alt=media&token=625a7a8c-a86b-40b6-8769-088de1bea783"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftrail%20grey.jpg?alt=media&token=bd97af7f-4f11-47fa-8cc4-1a6c40591145"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fweathered%20zinc.jpg?alt=media&token=794f1115-97a7-4938-bffd-fea498da3fbf"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwood%20grain.jpg?alt=media&token=a93113e1-34fb-46a0-a430-7ac83eb680e4"/>
                            </div>
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

export default Colors;