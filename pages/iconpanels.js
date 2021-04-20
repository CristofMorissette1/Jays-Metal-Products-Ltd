import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'

class Iconpanels extends Component{
    constructor(){
        super()
        this.state = {
            colorOptions: false,
            orderOptions: false,
            customerName: '',
            productname: '',
            phone: '',
            po: '',
            email: '',
            address: '',
            ga: '',
            color: '',
            protectivefilm: '',
            finish: '',
            totallinearfeet: '',
            totalsquarefeet: '',
            qty: '',
            inch: '',
            mm: '',
            specialcrating: '',
            tag: '',
            linearfeet: '',
            sqft: '',
            qty2: '',
            inch2: '',
            mm2: '',
            tag2: '',
            linearfeet2: '',
            squarefeet2: '',
            qty3: '',
            inch3: '',
            mm3: '',
            tag3: '',
            linearfeet3: '',
            squarefeet3: '',
            qty4: '',
            inch4: '',
            mm4: '',
            tag4: '',
            linearfeet4: '',
            squarefeet4: '',
            qty5: '',
            inch5: '',
            mm5: '',
            tag5: '',
            linearfeet5: '',
            squarefeet5: '',
            qty6: '',
            inch6: '',
            mm6: '',
            tag6: '',
            linearfeet6: '',
            squarefeet6: '',
            qty7: '',
            inch7: '',
            mm7: '',
            tag7: '',
            linearfeet7: '',
            squarefeet7: '',
            qty8: '',
            inch8: '',
            mm8: '',
            tag8: '',
            linearfeet8: '',
            squarefeet8: '',
            qty9: '',
            inch9: '',
            mm9: '',
            tag9: '',
            linearfeet9: '',
            squarefeet9: '',
            qty10: '',
            inch10: '',
            mm10: '',
            tag10: '',
            linearfeet10: '',
            squarefeet10: '',
            i101: '',
            i102: '',
            i103: '',
            i104: '',
            i106: '',
            i107: '',
            i108: '',
            i111: '',
            i113: '',
            i112: '',
            i116: '',
            i117: '',
            i118: '',
            i119: '',
            i114: '',
            i115: '',
            i120: '',
            i121: '',
            i122: '',
            i123: '',
            i128: '',
            i129: '',
            i130: '',
            i131: '',
            vvalley1: '',
            snowstop1: '',
            cleat: '',
            junderbarrel: '',
            zbaroverbarrel: '',
            perforatedjoverbarrel: '',
            perforatedzbaroverbarrel: '',
            backpan5: '',
            backpan10: '',
            base1: '',
            base2: '',
            base3: '',
            windowheader: '',
            windowreverse: '',
            walltransition: '',
            jtrim1: '',
            jtrim2: '',
            jtrim3: '',
            transition: '',
            outsidecorner1: '',
            insidecorner1: '',
            outsidecorner2: '',
            insidecorner2: '',
            outsidecorner3: '',
            insidecorner3: '',
            outsidecorner4: '',
            insidecorner4: '',
            standing290: '',
            standing291: '',
            standing292: '',
            standing293: '',
            standing294: '',
            standing295: ''
        }
        this.colorOptions = this.colorOptions.bind(this);
        this.orderOptions = this.orderOptions.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
        this.printPage = this.printPage.bind(this);
    }

    colorOptions(event) {
        event.preventDefault();
          if (this.state.colorOptions == false) {
          this.setState({
            colorOptions: true,
            orderOptions: false
          });
        } else {
          null;
        }
    }


    orderOptions(event) {
        event.preventDefault();
          if (this.state.orderOptions == false) {
          this.setState({
            colorOptions: false,
            orderOptions: true
          });
        } else {
          null;
        }
    }

    printPage = e => {
        e.preventDefault();
        window.print();
    }


    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
        let linearFeet1 = (this.state.qty * this.state.inch) / 12;
        let mmSize1 = this.state.inch * 25.4;
        let sqft1 = (this.state.mm / 12) * this.state.linearfeet;
        let linearFeet2 = (this.state.qty2 * this.state.inch2) / 12;
        let mmSize2 = this.state.inch2 * 25.4;
        let sqft2 = (this.state.mm2 / 12) * this.state.linearfeet2;
        let linearFeet3 = (this.state.qty3 * this.state.inch3) / 12;
        let mmSize3 = this.state.inch3 * 25.4;
        let sqft3 = (this.state.mm3 / 12) * this.state.linearfeet3;
        let linearFeet4 = (this.state.qty4 * this.state.inch4) / 12;
        let mmSize4 = this.state.inch4 * 25.4;
        let sqft4 = (this.state.mm4 / 12) * this.state.linearfeet4;
        let linearFeet5 = (this.state.qty5 * this.state.inch5) / 12;
        let mmSize5 = this.state.inch5 * 25.4;
        let sqft5 = (this.state.mm5 / 12) * this.state.linearfeet5;
        let linearFeet6 = (this.state.qty6 * this.state.inch6) / 12;
        let mmSize6 = this.state.inch6 * 25.4;
        let sqft6 = (this.state.mm6 / 12) * this.state.linearfeet6;
        let linearFeet7 = (this.state.qty7 * this.state.inch7) / 12;
        let mmSize7= this.state.inch7 * 25.4;
        let sqft7 = (this.state.mm7 / 12) * this.state.linearfeet7;
        let linearFeet8 = (this.state.qty8 * this.state.inch8) / 12;
        let mmSize8 = this.state.inch8 * 25.4;
        let sqft8 = (this.state.mm8 / 12) * this.state.linearfeet8;
        let linearFeet9 = (this.state.qty9 * this.state.inch9) / 12;
        let mmSize9 = this.state.inch9 * 25.4;
        let sqft9 = (this.state.mm9 / 12) * this.state.linearfeet9;
        let linearFeet10 = (this.state.qty10 * this.state.inch10) / 12;
        let mmSize10 = this.state.inch10 * 25.4;
        let sqft10 = (this.state.mm10 / 12) * this.state.linearfeet10;
        let sqft = sqft1 + sqft2 + sqft3 + sqft4 + sqft5 + sqft6 + sqft7 + sqft8 + sqft9 + sqft10;
        let totalLinear = linearFeet1 + linearFeet2 + linearFeet3 + linearFeet4 + linearFeet5 + linearFeet6 + linearFeet7 + linearFeet8 + linearFeet9 + linearFeet10;
        this.setState({
            linearfeet: linearFeet1.toFixed(2),
            mm: mmSize1.toFixed(2),
            squarefeet: sqft1.toFixed(2),
            linearfeet2: linearFeet2.toFixed(2),
            mm2: mmSize2.toFixed(2),
            squarefeet2: sqft2.toFixed(2),
            linearfeet3: linearFeet3.toFixed(2),
            mm3: mmSize3.toFixed(2),
            squarefeet3: sqft3.toFixed(2),
            linearfeet4: linearFeet4.toFixed(2),
            mm4: mmSize4.toFixed(2),
            squarefeet4: sqft4.toFixed(2),
            linearfeet5: linearFeet5.toFixed(2),
            mm5: mmSize5.toFixed(2),
            squarefeet5: sqft5.toFixed(2),
            linearfeet6: linearFeet6.toFixed(2),
            mm6: mmSize6.toFixed(2),
            squarefeet6: sqft6.toFixed(2),
            linearfeet7: linearFeet7.toFixed(2),
            mm7: mmSize7.toFixed(2),
            squarefeet7: sqft7.toFixed(2),
            linearfeet8: linearFeet8.toFixed(2),
            mm8: mmSize8.toFixed(2),
            squarefeet8: sqft8.toFixed(2),
            linearfeet9: linearFeet9.toFixed(2),
            mm9: mmSize9.toFixed(2),
            squarefeet9: sqft9.toFixed(2),
            linearfeet10: linearFeet10.toFixed(2),
            mm10: mmSize10.toFixed(2),
            squarefeet10: sqft10.toFixed(2),
            totallinearfeet: totalLinear.toFixed(2),
            totalsquarefeet: sqft.toFixed(2)
        })
    }
    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, sqft, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, i101, i102, i103, i104, i106, i107, i108, i111, i113, i112, i116, i117, i118, i119, i114, i115, i120, i121, i122, i123, i128, i129, i130, i131, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
    
        const form = axios.post('http://localhost:3001/api/form', {
            customerName,
            productname,
            phone,
            po,
            email,
            address,
            ga,
            color,
            protectivefilm,
            finish,
            totallinearfeet,
            totalsquarefeet,
            qty,
            inch,
            mm,
            specialcrating,
            tag,
            linearfeet,
            sqft,
            qty2,
            inch2,
            mm2,
            tag2,
            linearfeet2,
            squarefeet2,
            qty3,
            inch3,
            mm3,
            tag3,
            linearfeet3,
            squarefeet3,
            qty4,
            inch4,
            mm4,
            tag4,
            linearfeet4,
            squarefeet4,
            qty5,
            inch5,
            mm5,
            tag5,
            linearfeet5,
            squarefeet5,
            qty6,
            inch6,
            mm6,
            tag6,
            linearfeet6,
            squarefeet6,
            qty7,
            inch7,
            mm7,
            tag7,
            linearfeet7,
            squarefeet7,
            qty8,
            inch8,
            mm8,
            tag8,
            linearfeet8,
            squarefeet8,
            qty9,
            inch9,
            mm9,
            tag9,
            linearfeet9,
            squarefeet9,
            qty10,
            inch10,
            mm10,
            tag10,
            linearfeet10,
            squarefeet10,
            i101,
            i102,
            i103,
            i104,
            i106,
            i107,
            i108,
            i111,
            i113,
            i112,
            i116,
            i117,
            i118,
            i119,
            i114,
            i115,
            i120,
            i121,
            i122,
            i123,
            i128,
            i129,
            i130,
            i131,
            vvalley1,
            snowstop1,
            cleat,
            junderbarrel,
            zbaroverbarrel,
            perforatedjoverbarrel,
            perforatedzbaroverbarrel,
            backpan5,
            backpan10,
            base1,
            base2,
            base3,
            windowheader,
            windowreverse,
            walltransition,
            jtrim1,
            jtrim2,
            jtrim3,
            transition,
            outsidecorner1,
            insidecorner1,
            outsidecorner2,
            insidecorner2,
            outsidecorner3,
            insidecorner3,
            outsidecorner4,
            insidecorner4,
            standing290,
            standing291,
            standing292,
            standing293,
            standing294,
            standing295
        })
        e.target.reset();
      }

    render(){
        return (
            <div className="diamondMainContainer">
                <Header/>
                <div className="productPageLandingContainer">
                    <img className="productPageLandingImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fhome%20image1.png?alt=media&token=5023b190-2479-4de8-8d66-9c02fe005c19"></img>
                    <div className="productPage2ndContainer">
                    <h1 className="productPageMainTitle">Icon Panels</h1>
                    <p className="productPageMainText">Our signature Icon Panel comes in 4” and 6” widths that can be finished in smooth or perforated profiles. The panel is locally manufactured in our facility, it is roll-formed, allowing unlimited shapes and sizes to come to life. The Icon Panel is mechanically attached with hidden fasteners to a continuous solid substrate with an underlayment. This is a beautiful finish to any exterior building; with the clean lines and hidden fasteners it provides high performance in combination with visual appeal.<br/>
                    <ul>
                        <li>Cut to length, up to 40’</li>
                        <li>No exposed fasteners</li>
                        <li>Covered under a 40 year paint warranty</li>
                        <li>Free of yearly maintenance or replacements</li>
                        <li>Paint covered up to 40 years under warranty</li>
                    </ul>
                    </p>
                    </div>
                </div>
                <div className="productPage3rdContainer">
                    <img className="productPageImage2" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2Ficon.jpg?alt=media&token=3f523f76-d0d2-4a10-9972-b6af61348fca"></img>
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/productsPages%2Fss150specs.png?alt=media&token=81fdb78d-1915-4964-8337-0566669eb4cb"></img>
                </div>
                <div className="productsPage4thContainer">
                    <div className="productsPage4thContainerHeader">
                        <a className="headerOptions" onClick={this.orderOptions}>Order Now</a>
                        <a className="headerOptions" onClick={this.colorOptions}>Color Options</a>
                    </div>
                    {
                        this.state.colorOptions
                        ? (
                            <div className="colorOptionsContent">
                                <div className="colorOptionsContainer1">
                                    <h1 className="colorOptionsTitle1">WOODGRAIN</h1>
                                    <p className="colorOptionsText1">22ga, 24ga, 26ga and 29ga</p>
                                </div>
                                <div className="colorOptionsContainer2">
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Facorn.jpg?alt=media&token=4ee2b858-64be-4a2a-bf06-0cfc808bfedf"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fautumn.jpg?alt=media&token=84a81638-d19f-4602-88c8-12f39b892590"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fespresso.jpg?alt=media&token=d4200505-f315-48bd-893a-416f13f6f7a2"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2FFrontier.jpg?alt=media&token=0b63d35f-2a87-4a58-a713-5de563627168"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2FGunstock.jpg?alt=media&token=2b089097-15f1-4735-852b-543850bbdd4b"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsaddle.jpg?alt=media&token=6fb3f596-42cd-44d0-89fb-98131ac8f1c9"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fheritage.jpg?alt=media&token=39338630-d3a5-4218-ab94-d18d7a31e340"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbarnboard.jpg?alt=media&token=7141af69-f07c-472e-8f47-2baf27cabaef"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwagonwood.jpg?alt=media&token=0272051f-b6fe-4150-ad42-235a954fa0c7"/>
                                </div>
                                <div className="colorOptionsContainer1">
                                    <h1 className="colorOptionsTitle1">METALLIC</h1>
                                    <p className="colorOptionsText1">22ga, 24ga, 26ga and 29ga</p>
                                </div>
                                <div className="colorOptionsContainer2">
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Faged%20copper.jpg?alt=media&token=63d82674-48dc-4226-b5c6-7c4546a0bc10"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcopper%20penny.jpg?alt=media&token=550d6498-3c43-4502-9640-b32becf68344"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20zinc.jpg?alt=media&token=41102e24-0769-48b8-a1b6-4ff6c8ee568a"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flight%20zinc.jpg?alt=media&token=b9c48f7a-430c-4237-8008-3bb7f960e44e"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Frustic%20red.jpg?alt=media&token=4ca6a752-0bb5-45eb-867a-9c4b28bd87c1"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsilver%20zinc.jpg?alt=media&token=625a7a8c-a86b-40b6-8769-088de1bea783"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftrail%20grey.jpg?alt=media&token=bd97af7f-4f11-47fa-8cc4-1a6c40591145"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fweathered%20zinc.jpg?alt=media&token=794f1115-97a7-4938-bffd-fea498da3fbf"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwood%20grain.jpg?alt=media&token=a93113e1-34fb-46a0-a430-7ac83eb680e4"/>
                                </div>
                                <div className="colorOptionsContainer1">
                                    <h1 className="colorOptionsTitle1">Textured</h1>
                                    <p className="colorOptionsText1">22ga, 24ga, 26ga and 29ga</p>
                                </div>
                                <div className="colorOptionsContainer2">
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fburnished%20slate.jpg?alt=media&token=9a5dc857-61f6-40bd-bb3a-a7a769fafae0"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fgraphite.jpg?alt=media&token=f30467a8-837a-4a9c-a98e-8880ad17ee74"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fkona%20brown.jpg?alt=media&token=b6822ec1-f5b7-4887-9abf-385357870bca"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fonyx%20black.jpg?alt=media&token=c4b883ce-f893-4199-8281-2a6c5108563c"/>
                                </div>
                                <div className="colorOptionsContainer1">
                                    <h1 className="colorOptionsTitle1">Premium</h1>
                                    <p className="colorOptionsText1">22ga, 24ga, 26ga and 29ga</p>
                                </div>
                                <div className="colorOptionsContainer2">
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbronze.jpg?alt=media&token=13785f71-6c24-48ac-9f6d-13aba42a6c95"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fchampagne%20metallic.jpg?alt=media&token=4ff33ca3-bfe9-4577-83b7-b53c82faf33e"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcolonial%20red.jpg?alt=media&token=12f4a821-1c2e-47e4-85c6-efca80447796"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20bronze.jpg?alt=media&token=957a038a-589c-48dd-96fd-8029918c4b54"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fforrest%20green.jpg?alt=media&token=182bdfcf-ab77-47b2-9ae4-6f64b32c2581"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fhartford%20green.jpg?alt=media&token=499a8623-950d-4ef1-9363-bc94fb76f878"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fhemlock%20green.jpg?alt=media&token=6591da94-962f-4f25-8d5c-403e51c09bc8"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmocha.jpg?alt=media&token=2ce2e967-a146-4e2f-8303-e1c753f0f434"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fold%20town%20gray.jpg?alt=media&token=373428ea-96e7-46af-abbc-bd26b0a68b9d"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fold%20zinc%20gray.jpg?alt=media&token=d4df7bd8-0988-4371-9652-4de282987e5a"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fparchment.jpg?alt=media&token=526620d6-0e07-469d-9c20-ddd95aa4e3cb"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregal%20blue.jpg?alt=media&token=58f2b0f7-90b3-4be4-b770-f84651daea1a"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregal%20white.jpg?alt=media&token=09cba1fe-f3a9-4cd0-9cc2-b5588b9ab960"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fretro%20red.jpg?alt=media&token=30e3fe2f-5301-4ecf-b9f4-fa8892e2a115"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsierra%20tan.jpg?alt=media&token=60d4e8f1-c436-4c75-80b7-c40bfeb58c28"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsilver%20metallic.jpg?alt=media&token=29a90a5b-7866-4b96-9699-a2314aa7aabc"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fslate%20gray.jpg?alt=media&token=98f9f94f-aef4-4b43-9d32-648e46efc906"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fterra%20cotta.jpg?alt=media&token=c2b831d6-878c-4230-819d-db4ea7a29d90"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftwilight%20blue.jpg?alt=media&token=8230c69a-5077-480a-934b-8b0596c49e5d"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fweathered%20copper.jpg?alt=media&token=d2521052-b63e-4c0c-b2d9-47add00fb2b6"/>
                                </div>
                                <div className="colorOptionsContainer1">
                                    <h1 className="colorOptionsTitle1">SMP Prepainted Steel</h1>
                                    <p className="colorOptionsText1">22ga, 24ga, 26ga and 29ga</p>
                                </div>
                                <div className="colorOptionsContainer2">
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbright%20side.jpg?alt=media&token=597936ed-2fd1-43ae-8166-03cf493cc1dd"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcambridge%20white.jpg?alt=media&token=f8bf5044-26b5-49ec-aef0-b0b035881c24"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwhite%20white.jpg?alt=media&token=9340c2b7-4f4a-4f4e-85f7-971d7d3a0f5c"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbone%20white.jpg?alt=media&token=f5b191f3-9d36-4744-9098-05b1dfa324e3"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsurf%20white.jpg?alt=media&token=538fcc42-149c-4835-a1ab-c289e302c93e"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fstone%20grey.jpg?alt=media&token=73eba8fc-1a24-4cc6-a65a-b37303803238"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregent%20grey.jpg?alt=media&token=5b4438cd-150b-43d7-9d30-dd6ab6b4f013"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fpebblestone.jpg?alt=media&token=96601aa0-58fb-4eb0-bd1f-22144c22afe8"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcharcoal.jpg?alt=media&token=be19a08e-a0e8-40cb-85f1-c747f5836dc0"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fblack.jpg?alt=media&token=04df6593-0cd3-4fb2-b677-4b300e4e90af"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetro%20brown.jpg?alt=media&token=cb1c4bc3-46bb-440d-bde7-e34f0b3598b8"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcoffee%20brown.jpg?alt=media&token=15b53de3-4bbc-429b-ba4f-e231dbcd83f9"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20brown.jpg?alt=media&token=63f90fe5-cdf0-4d74-93cf-24658d718d01"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcashmere.jpg?alt=media&token=cda4da4f-278a-40f7-93ca-db434742f648"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fantique%20linen.jpg?alt=media&token=e7c7fc8c-3854-451e-a0ca-ab495a3fd3fd"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwicker.jpg?alt=media&token=e4f31c1b-8c4e-47fa-9195-baeb314e3329"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbriarwood%20tan.jpg?alt=media&token=cf8e1917-ad23-4bb9-95be-da558a0359f6"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftan.jpg?alt=media&token=7e9e1f2a-5a97-4431-947c-65f2ec168b1b"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftile%20red.jpg?alt=media&token=a1970dd4-af3a-408a-8d9c-3ae3cbf74750"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20red.jpg?alt=media&token=05273146-b3a8-4a2b-892c-8e9a2c33216a"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbright%20red.jpg?alt=media&token=1cb44897-592e-4e55-bb55-7711e54e3c24"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flabrador%20blue.jpg?alt=media&token=ef902c7d-2a1f-4065-9694-e22f2ea21a41"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fheron%20blue.jpg?alt=media&token=1018cde3-1d2a-4c5a-804d-0cac96a013f5"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Froyal%20blue.jpg?alt=media&token=cebc19b2-8061-4515-b9ce-8c71d52d2ddd"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fslate%20blue.jpg?alt=media&token=0c1b5597-7df4-4b8b-973c-22e96abdaa21"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsapphire%20blue.jpg?alt=media&token=39256ff9-2478-406e-aa6c-686825f298c2"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdeep%20water%20green.jpg?alt=media&token=cd7ebdef-8d52-4486-99c2-fc17556ec300"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fspruce%20green.jpg?alt=media&token=ece1c69d-af30-41eb-aa8e-706638f75b43"/>
                                    <img className="colorOptionsContainerImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmelchers%20green.jpg?alt=media&token=5d183161-a22a-4198-9de1-b8e2779ab16e"/>
                                </div>
                            </div>
                        ) : (
                            null
                        )
                    }
                    {
                        this.state.orderOptions
                        ? (
                            <div className="orderOptionsContent">
                                <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit}>
                                    <div className="orderOptionsTextForm">
                                        <h2 className="orderOptionsTextFormTitle">Icon Panels</h2>
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
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="address"
                                                placeholder="Customer Address"
                                                onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                placeholder="Product Name"
                                                onChange={this.handleChange} 
                                                required />
                                        </FormGroup>
                                    </div>
                                    <div className="orderOptionsSpecsForm">
                                        <div className="orderOptionsSpecsFormTitle">
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>GA</label>
                                                <Input type="select" className="orderOptionsSpecsInput" name="ga" onChange={this.handleChange} required>
                                                    <option>-</option>
                                                    <option>29</option>
                                                    <option>26</option>
                                                    <option>24</option>
                                                    <option>22</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Color</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="color" onChange={this.handleChange} required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total Linear Feet</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="totallinearfeet" placeholder={this.state.totallinearfeet} readOnly />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Special Crating</label>
                                                <Input type="select" className="orderOptionsSpecsInput" name="specialcrating" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">At extra cost</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>Protective film</Label>
                                                <Input type="select" className="orderOptionsSpecsInput" name="protectivefilm" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">10cents extra per sq/ft</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Finish</label>
                                                <Input type="select" className="orderOptionsSpecsInput" name="finish" onChange={this.handleChange} required >
                                                    <option>-</option>
                                                    <option>30</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="totalsquarefeet" placeholder={this.state.totalsquarefeet} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm" placeholder={this.state.mm} readOnly />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet" placeholder={this.state.linearfeet}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet" placeholder={this.state.squarefeet} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty2" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch2" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm2" placeholder={this.state.mm2} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag2" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet2" placeholder={this.state.linearfeet2}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet2" placeholder={this.state.squarefeet2} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty3" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch3" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm3" placeholder={this.state.mm3} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag3" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet3" placeholder={this.state.linearfeet3}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet3" placeholder={this.state.squarefeet3} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty4" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch4" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm4" placeholder={this.state.mm4} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag4" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet4" placeholder={this.state.linearfeet4}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet4" placeholder={this.state.squarefeet4} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty5" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch5" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm5" placeholder={this.state.mm5} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag5" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet5" placeholder={this.state.linearfeet5}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet5" placeholder={this.state.squarefeet5} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty6" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch6" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm6" placeholder={this.state.mm6} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag6" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet6" placeholder={this.state.linearfeet6}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet6" placeholder={this.state.squarefeet6} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty7" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch7" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm7" placeholder={this.state.mm7} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag7" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet7" placeholder={this.state.linearfeet7}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet7" placeholder={this.state.squarefeet7} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty8" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch8" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm8" placeholder={this.state.mm8} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag8" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet8" placeholder={this.state.linearfeet8}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet8" placeholder={this.state.squarefeet8} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty9" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch9" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm9" placeholder={this.state.mm9} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag9" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet9" placeholder={this.state.linearfeet9}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet9" placeholder={this.state.squarefeet9} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="qty10" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="inch10" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm10" placeholder={this.state.mm10} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="tag10" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" name="linearfeet10" placeholder={this.state.linearfeet10}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="squarefeet10" placeholder={this.state.squarefeet10} readOnly />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="orderOptionsFlashingsMainContainer">
                                        <h2 className="orderOptionsTitle">FLASHINGS:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                            <FormGroup className="orderOptionsFlashingsContainer2"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F101.jpg?alt=media&token=8bffe047-361f-467d-b54d-79873721fb7b"/>
                                                <CustomInput
                                                    className="orderOptionsFlashingsInput2" 
                                                    name="i101"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F102.jpg?alt=media&token=1a1089f9-b2cc-476d-9405-cf79fda0ceee"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i102"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F103.jpg?alt=media&token=9e17a1c1-a515-49fd-92e3-9c1a5de10a4e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i103"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F104.jpg?alt=media&token=1621b1c6-2da6-4b81-873c-573ac49527da"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i104"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F106.jpg?alt=media&token=b8ef318d-25c3-47c8-b904-7fa377656077"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i106"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F107.jpg?alt=media&token=86f2835b-ce37-46ac-b2c4-6f0c18d8a7cb"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i107"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F108.jpg?alt=media&token=9f8d26df-edfe-4578-b22d-027c316abf0a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i108"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F111.jpg?alt=media&token=f6f40da4-59e1-44fa-a58e-56e1ffb04ac1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i111"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F112.jpg?alt=media&token=8addf58e-a0a3-4fa1-99ae-b5c827d91d22"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i112"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F113.jpg?alt=media&token=86b9bc9d-fdc5-43a5-9797-06ff8d54054b"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i113"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F114.jpg?alt=media&token=6c8b8c8d-38ca-48b1-a325-33d0aec83a7d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i114"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F115.jpg?alt=media&token=9252d05c-2720-4416-abaf-4eae552de636"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i115"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F116.jpg?alt=media&token=1f93d521-2daf-4f39-88da-f41b475f45b1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i116"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F117.jpg?alt=media&token=62be0f92-9e90-43e9-8189-abeacd259fa2"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i117"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F118.jpg?alt=media&token=3dd781c8-5993-484f-83a9-f4f77eac3fa4"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i118"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F119.jpg?alt=media&token=20914689-0cdd-4203-831c-7d376503deb9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i119"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F120.jpg?alt=media&token=8cfd4fe2-a94b-445a-8aa9-0906b9e2147e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i120"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F121.jpg?alt=media&token=cecf7570-2e4e-4501-83e3-2eb7f6434602"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i121"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F122.jpg?alt=media&token=91e8e0a4-a547-4009-8c48-78f1e95f94c5"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i122"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F123.jpg?alt=media&token=25fb14b8-6894-46c4-88e6-79eb361dd401"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i123"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F128.jpg?alt=media&token=8a8eaa5a-2546-48c0-b241-ed18ba350b38"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i128"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F129.jpg?alt=media&token=09641c07-fe20-42a6-991e-cbf36d5eead2"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i129"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F130.jpg?alt=media&token=20d182b1-8002-4be7-bf95-4bcf54e30955"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i130"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F131.jpg?alt=media&token=e71f40d0-29c7-4c16-8e62-5eaccaa884cd"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="i131"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <h2 className="orderOptionsTitle">ACCESSORIES:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                            <FormGroup className="orderOptionsFlashingsContainer"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetal%20drill%20screws.png?alt=media&token=def7c31f-bab7-430a-aac1-c6686b9eb621"/>
                                                <CustomInput
                                                    className="orderOptionsAccessoriesInput" 
                                                    name="metalDrillScrews"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwoodgrip%20screws.png?alt=media&token=bedb64c8-3ace-4697-8bd6-10e6b6ee4db2"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="woodGripScrews"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsynthetic%20high%20temp%20cover.png?alt=media&token=175a4dbb-40b2-43b5-92f2-eb31cb839e7c"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="syntheticHighTempCover"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fpeel%20%26%20stick%20high%20temp%20cover.png?alt=media&token=7bfec47d-cb9b-40c3-b843-b93811e530f2"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="peel&StickHighTempCover"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftube%20sealant.png?alt=media&token=bf1baf8a-beac-461e-af91-7fa9c12695e6"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="tubeSealant"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbutyl%20tape.png?alt=media&token=24398d7f-af89-4872-82fd-d9286875a3cb"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="butylTape"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fplumbing%20boots.png?alt=media&token=1db3c74a-c476-4596-b4b6-0c286a1cc006"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="plumbingBoots"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fflex-o-vent.png?alt=media&token=c1e81e0f-c6a2-48fd-84be-6952ba69aadf"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="flexOVent"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20outer%20closure.png?alt=media&token=836d6b46-1e94-45a5-aea2-6ce4c69d37a3"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="profileOuterClosure"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20inner%20closure.png?alt=media&token=a799aa5a-55a3-41d9-9a47-a4565e06e6c5"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="profileInnerClosure"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flow%20profile%20ridge%20vent.png?alt=media&token=18d4aaaf-d88f-4cda-96ee-1addef31a649"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="lowProfileRidgeVent"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                        </div>
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
                                    <Button className="contactButton" onClick={this.printPage}><p className="contactButtonText">Print Page</p></Button>
                                    <Button className="contactButton"><p className="contactButtonText">Submit</p></Button>
                                </Form>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Iconpanels;