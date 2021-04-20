import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'

class StandingSeam3 extends Component{
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
            weight: '',
            qty: '',
            inch: '',
            mm: '',
            specialcrating: '',
            tag: '',
            linearfeet: '',
            squarefeet: '',
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
            hookdrip1: '',
            hookdripsteppitch: '',
            gabbleRake1: '',
            gabbleRake2: '',
            gablerake3: '',
            sidewall1: '',
            sidewall2: '',
            endwall1: '',
            endwall3: '',
            endWall2: '',
            transition3: '',
            peakcap1: '',
            peakcap2: '',
            peakcap3: '',
            transition1: '',
            transition2: '',
            hip1: '',
            hip2: '',
            hip3: '',
            ridge1: '',
            ridge2: '',
            ridge3: '',
            ridge4: '',
            wvalley1: '',
            wvalley2: '',
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
        if (this.state.ga == 29 && this.state.finish == 12) {
            let weightCal = this.state.totalsquarefeet * 0.688;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 29 && this.state.finish == 16) {
            let weightCal = this.state.totalsquarefeet * 0.86;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 29 && this.state.finish == 20) {
            let weightCal = this.state.totalsquarefeet * 1.032;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 26 && this.state.finish == 12) {
            let weightCal = this.state.totalsquarefeet * 1.008;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 26 && this.state.finish == 16) {
            let weightCal = this.state.totalsquarefeet * 1.26;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 26 && this.state.finish == 20) {
            let weightCal = this.state.totalsquarefeet * 1.512;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 24 && this.state.finish == 12) {
            let weightCal = this.state.totalsquarefeet * 1.28;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 24 && this.state.finish == 16) {
            let weightCal = this.state.totalsquarefeet * 1.6;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 24 && this.state.finish == 20) {
            let weightCal = this.state.totalsquarefeet * 1.92;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 22 && this.state.finish == 12) {
            let weightCal = this.state.totalsquarefeet * 1.6;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 22 && this.state.finish == 16) {
            let weightCal = this.state.totalsquarefeet * 1.98;
            this.setState({
                weight: weightCal
            })
        } else if(this.state.ga == 22 && this.state.finish == 20) {
            let weightCal = this.state.totalsquarefeet * 2.376;
            this.setState({
                weight: weightCal
            })
        }
      }
    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, squarefeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, hookdrip1, hookdripsteppitch, gabbleRake1, gabbleRake2, gablerake3, sidewall1, sidewall2, endwall1, endwall3, endWall2, transition3, peakcap1, peakcap2, peakcap3, transition1, transition2, hip1, hip2, hip3, ridge1, ridge2, ridge3, ridge4, wvalley1, wvalley2, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
    
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
            squarefeet,
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
            hookdrip1,
            hookdripsteppitch,
            gabbleRake1,
            gabbleRake2,
            gablerake3,
            sidewall1,
            sidewall2,
            endwall1,
            endwall3,
            endWall2,
            transition3,
            peakcap1,
            peakcap2,
            peakcap3,
            transition1,
            transition2,
            hip1,
            hip2,
            hip3,
            ridge1,
            ridge2,
            ridge3,
            ridge4,
            wvalley1,
            wvalley2,
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
                    <h1 className="productPageMainTitle">SS 200</h1>
                    <p className="productPageMainText">SS 150 provides a clean visual appearance due to the hidden fastener system. With characteristics like the SS 100 panel, the SS 150 panel is ideal for commercial roofs when combined with a slope of ½ :12. This will allow for lower costs due to a low sloping roof needing fewer materials. The panels are available in the SMP pre-painted steel along with PVDF premium.<br/>
                    <ul>
                        <li>Single-lock</li>
                        <li>Cooling and energy reduction due to reflective steel reflective properties</li>
                        <li>Low maintenance</li>
                        <li>Varying seam heights</li>
                        <li>Paint covered up to 40 years under warranty</li>
                    </ul>
                    </p>
                    </div>
                </div>
                <div className="productPage3rdContainer">
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2FStanding%20seam%20200.png?alt=media&token=4be38546-d3e3-43f2-a3ef-89bfba23a44d"></img>
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
                                        <h2 className="orderOptionsTextFormTitle">SS 200</h2>
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
                                                    <option>12</option>
                                                    <option>16</option>
                                                    <option>20</option>
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
                                                <Input type="text" className="orderOptionsSpecsInput" name="mm" placeholder={this.state.mm} readOnly/>
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
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fhook%20drip.jpg?alt=media&token=70711190-0093-4dd7-a85e-fb153bb13267"/>
                                                <CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="hookdrip1"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fhook%20drip%20for%20step%20pitch.jpg?alt=media&token=4890e24f-0247-4ec7-99e2-a0594496f8d3"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="hookdripsteppitch"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fgabble%20rake1.jpg?alt=media&token=123239cc-4cd5-44b3-8575-a275b34b5db9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="gabbleRake1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fgabble%20rake2.jpg?alt=media&token=bb036fd8-345f-4f84-984a-96836d7c53ca"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="gabbleRake2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fgabble%20rake3.jpg?alt=media&token=a27e2b6c-9110-4e4e-94aa-aed72a13c08e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="gabbleRake3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fside%20wall1.jpg?alt=media&token=711ed774-5431-42e2-931b-17e6e9a8d2dc"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="sidewall1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fside%20wall2.jpg?alt=media&token=7367fec5-0f8b-40f0-a70f-a7e612b9661e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="sidewall2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fend%20wall1.jpg?alt=media&token=e9b2e85b-f1d9-457f-a387-b1e214bd4a56"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="endwall1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fend%20wall2.jpg?alt=media&token=0d587631-27c3-4b09-a833-09eb400f64ff"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="endWall2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fend%20wall3.jpg?alt=media&token=57034de2-9baf-4b74-8bbb-7cf18a40a47c"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="endwall3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Ftransition1.jpg?alt=media&token=8419ef7a-e396-4cf8-af9a-bcb7ae1deb94"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="transition1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Ftransition2.jpg?alt=media&token=a6a48a26-a768-4fb6-8e9b-39ac6273937b"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="transition2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Ftransition3.jpg?alt=media&token=f9c81a42-faf7-40d1-b871-d730bb6c0938"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="transition3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fpeak%20cap1.jpg?alt=media&token=6a872100-5ce7-403e-b726-755991f85dea"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="peakcap1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fpeak%20cap2.jpg?alt=media&token=7e2000bf-5fb5-4d97-bdc3-70e50b861528"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="peakcap2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fpeak%20cap3.jpg?alt=media&token=748d08be-f8d8-4962-bee6-b0f480d8314d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="peakcap3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fhip1.jpg?alt=media&token=b012c160-1085-45ca-bcc7-bc7a0de8457e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="hip1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fhip2.jpg?alt=media&token=8ef290c2-7271-4bbc-94d5-2862ef2fb253"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="hip2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fhip3.jpg?alt=media&token=848ace7d-7083-4202-92f9-4f87a22f3543"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="hip3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fridge1.jpg?alt=media&token=70334f37-67e3-4de6-8f8f-74d49df9d2b7"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="ridge1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fridge2.jpg?alt=media&token=87e7c07b-3dff-4710-a00c-e090ec4ef5a8"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="ridge2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fridge3.jpg?alt=media&token=260382ab-c7c1-4863-b89a-3083b89bf697"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="ridge3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fridge4.jpg?alt=media&token=93bbef5e-47d5-4180-a391-c08673418c24"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="ridge4"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fw%20valley1.jpg?alt=media&token=fe27a41f-5822-4cef-8405-b70ecab0433a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="wvalley1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fw%20valley2.jpg?alt=media&token=adf53e43-b25a-454c-b3a1-e0e9bcd8c2e8"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="wvalley2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fv%20valley1.jpg?alt=media&token=2e5d3bf3-8529-4242-bf57-65b878bf8018"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="vvalley1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fsnow%20stop1.jpg?alt=media&token=48125644-b7f9-4206-be39-16a956d53ab3"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="snowstop1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fcleat.jpg?alt=media&token=734b69ed-039c-4cc4-8b32-cc5a99f261db"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="cleat"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fj%20under%20panel.jpg?alt=media&token=29855359-d0cc-49c7-aa8c-fbc3ad8d4c85"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="junderbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fz%20bar%20over%20panel.jpg?alt=media&token=00f69b80-5f5f-402c-992c-e8cf750976ad"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="zbaroverbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fperforated%20under%20panel.jpg?alt=media&token=6ab8af11-fab8-4911-baf9-16da3aacc1fc"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="perforatedjunderbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fperforated%20over%20panel.jpg?alt=media&token=c3e7ae14-fef6-4cdf-b330-cc4bab49c139"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="perforatedzbaroverbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fback%20pan5.jpg?alt=media&token=d154ea8e-069d-4750-bd92-58f8e1516f33"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="backpan5"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fback%20pan10.jpg?alt=media&token=e8945d3e-6f09-4aa5-95c3-da6693b479de"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="backpan10"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fbase1.jpg?alt=media&token=4faaf402-3901-480e-8316-804af79969c4"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="base1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fbase2.jpg?alt=media&token=f30fb682-4dd1-45ab-a0f1-76a714f08549"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="base2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fbase3.jpg?alt=media&token=632390cf-ab64-42bf-9a5c-fa3392066c63"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="base3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fwindow%20header.jpg?alt=media&token=d4e393ef-9fa8-4f57-95f3-f8487a3c32ec"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="windowheader"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fwindow%20reverse.jpg?alt=media&token=3e02ebc8-1d5d-4c42-b052-3d4957d9f322"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="windowreverse"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fwall%20transition.jpg?alt=media&token=fdce57fa-6d7d-424e-a97c-41602d4dbfe3"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="walltransition"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fjtrim1.jpg?alt=media&token=7f347959-ba36-43da-ae7c-8bfdfea2baf5"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="jtrim1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fjtrim2.jpg?alt=media&token=cb9f01fe-cbfd-42d3-970e-8db7de720ee0"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="jtrim2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fjtrim3.jpg?alt=media&token=02492014-5506-43f3-bd77-82d4041610d3"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="jtrim3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Ftransition.jpg?alt=media&token=be4a6b63-4eb0-479a-a62d-43416d747712"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="transition"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Foutside%20corner1.jpg?alt=media&token=e2f38cec-bafa-424d-90cc-f48505d9235b"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="outsidecorner1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Finside%20corner1.jpg?alt=media&token=48835e6b-7dd3-45c4-b48b-b9aa08aad94c"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="insidecorner1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Foutside%20corner2.jpg?alt=media&token=ea07d5b4-39c7-48e0-ba19-afff86823f5d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="outsidecorner2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Finside%20corner2.jpg?alt=media&token=574c044b-ac83-4fb8-8948-a8ea927ee11e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="insidecorner2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Foutside%20corner3.jpg?alt=media&token=03214f39-b4de-4191-918b-763faab3e92c"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="outsidecorner3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Finside%20corner3.jpg?alt=media&token=66155ca4-b0d3-4f65-afd7-c280fa160d21"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="insidecorner3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss290.jpg?alt=media&token=2d7672f5-830c-43a4-8fce-be684b74c113"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing290"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss291.jpg?alt=media&token=d9e60d17-efc9-4dae-9f98-c967dd7ce537"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing291"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss292.jpg?alt=media&token=a5f0d93a-52a4-46c3-8c07-bf1dbe78913e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing292"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss293.jpg?alt=media&token=ed475e7f-0412-4bdd-8029-c3a8c8c12c3a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing293"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss294.jpg?alt=media&token=03872080-63c4-47e8-8828-d03b4246bc0b"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing294"
                                                    onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Steading%20Seam%20200%2Fss295.jpg?alt=media&token=c23d0e40-9046-4cf6-9dc5-1150c69ab941"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    placeholder="QTY"
                                                    name="standing295"
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

export default StandingSeam3;