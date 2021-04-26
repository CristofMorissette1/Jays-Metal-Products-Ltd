import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'

class CurvedPanelSystemPrint extends Component{
    constructor(){
        super()
        this.state = {
            colorOptions: false,
            orderOptions: false,
            productname: '',
            customerName: '',
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
            qty: 0,
            inch: 0,
            mm: '',
            specialcrating: '',
            tag: '',
            linearfeet: 0,
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
            hookdrip1: '',
            hookdripsteppitch: '',
            gabbleRake1: '',
            gabbleRake2: '',
            gabbleRake3: '',
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
        this.handleSumbit = this.handleSumbit.bind(this);
        this.printPage = this.printPage.bind(this);
    }

    printPage = e => {
        e.preventDefault();
        window.print();
    }

      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, sqft, squarefeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, hookdrip1, hookdripsteppitch, gabbleRake1, gabbleRake2, gabbleRake3, sidewall1, sidewall2, endwall1, endwall3, endWall2, transition3, peakcap1, peakcap2, peakcap3, transition1, transition2, hip1, hip2, hip3, ridge1, ridge2, ridge3, ridge4, wvalley1, wvalley2, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
    
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
            hookdrip1,
            hookdripsteppitch,
            gabbleRake1,
            gabbleRake2,
            gabbleRake3,
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
        window.location.reload();
      }

      componentDidMount() {
        this.setState({
            customerName: this.props.obj.customerName,
            productname: this.props.obj.productname,
            phone: this.props.obj.phone,
            po: this.props.obj.po,
            email: this.props.obj.email,
            address: this.props.obj.address,
            ga: this.props.obj.ga,
            color: this.props.obj.color,
            protectivefilm: this.props.obj.protectivefilm,
            finish: this.props.obj.finish,
            totallinearfeet: this.props.obj.totallinearfeet,
            totalsquarefeet: this.props.obj.totalsquarefeet,
            weight: this.props.obj.weight,
            qty: this.props.obj.qty,
            inch: this.props.obj.inch,
            mm: this.props.obj.mm,
            specialcrating: this.props.obj.specialcrating,
            tag: this.props.obj.tag,
            linearfeet: this.props.obj.linearfeet,
            squarefeet: this.props.obj.linearfeet,
            qty2: this.props.obj.qty2,
            inch2: this.props.obj.inch2,
            mm2: this.props.obj.mm2,
            tag2: this.props.obj.tag2,
            linearfeet2: this.props.obj.linearfeet2,
            squarefeet2: this.props.obj.squarefeet2,
            qty3: this.props.obj.qty3,
            inch3: this.props.obj.inch3,
            mm3: this.props.obj.mm3,
            tag3: this.props.obj.tag3,
            linearfeet3: this.props.obj.linearfeet3,
            squarefeet3: this.props.obj.squarefeet3,
            qty4: this.props.obj.qty4,
            inch4: this.props.obj.inch4,
            mm4: this.props.obj.mm4,
            tag4: this.props.obj.tag4,
            linearfeet4: this.props.obj.linearfeet4,
            squarefeet4: this.props.obj.squarefeet4,
            qty5: this.props.obj.qty5,
            inch5: this.props.obj.inch5,
            mm5: this.props.obj.mm5,
            tag5: this.props.obj.tag5,
            linearfeet5: this.props.obj.linearfeet5,
            squarefeet5: this.props.obj.squarefeet5,
            qty6: this.props.obj.qty6,
            inch6: this.props.obj.inch6,
            mm6: this.props.obj.mm6,
            tag6: this.props.obj.tag6,
            linearfeet6: this.props.obj.linearfeet6,
            squarefeet6: this.props.obj.squarefeet6,
            qty7: this.props.obj.qty7,
            inch7: this.props.obj.inch7,
            mm7: this.props.obj.mm7,
            tag7: this.props.obj.tag7,
            linearfeet7: this.props.obj.linearfeet7,
            squarefeet7: this.props.obj.squarefeet7,
            qty8: this.props.obj.qty8,
            inch8: this.props.obj.inch8,
            mm8: this.props.obj.mm8,
            tag8: this.props.obj.tag8,
            linearfeet8: this.props.obj.linearfeet8,
            squarefeet8: this.props.obj.squarefeet8,
            qty9: this.props.obj.qty9,
            inch9: this.props.obj.inch9,
            mm9: this.props.obj.mm9,
            tag9: this.props.obj.tag9,
            linearfeet9: this.props.obj.linearfeet9,
            squarefeet9: this.props.obj.squarefeet9,
            qty10: this.props.obj.qty10,
            inch10: this.props.obj.inch10,
            mm10: this.props.obj.mm10,
            tag10: this.props.obj.tag10,
            linearfeet10: this.props.obj.lineafeet10,
            squarefeet10: this.props.obj.squarefeet10,
            hookdrip1: this.props.obj.hookdrip1,
            hookdripsteppitch: this.props.obj.hookdripsteppitch,
            gabbleRake1: this.props.obj.gabbleRake1,
            gabbleRake2: this.props.obj.gabbleRake2,
            gabbleRake3: this.props.obj.gabbleRake3,
            sidewall1: this.props.obj.sidewall1,
            sidewall2: this.props.obj.sidewall2,
            endwall1: this.props.obj.endwall1,
            endwall3: this.props.obj.endwall3,
            endWall2: this.props.obj.endWall2,
            transition3: this.props.obj.transition3,
            peakcap1: this.props.obj.peakcap1,
            peakcap2: this.props.obj.peakcap2,
            peakcap3: this.props.obj.peakcap3,
            transition1: this.props.obj.transition1,
            transition2: this.props.obj.transition2,
            hip1: this.props.obj.hip1,
            hip2: this.props.obj.hip2,
            hip3: this.props.obj.hip3,
            ridge1: this.props.obj.ridge1,
            ridge2: this.props.obj.ridge2,
            ridge3: this.props.obj.ridge3,
            ridge4: this.props.obj.ridge4,
            wvalley1: this.props.obj.wvalley1,
            wvalley2: this.props.obj.wvalley2,
            vvalley1: this.props.obj.vvalley1,
            snowstop1: this.props.obj.snowstop1,
            cleat: this.props.obj.cleat,
            junderbarrel: this.props.obj.junderbarrel,
            zbaroverbarrel: this.props.obj.zbaroverbarrel,
            perforatedjoverbarrel: this.props.obj.perforatedjoverbarrel,
            perforatedzbaroverbarrel: this.props.obj.perforatedzbaroverbarrel,
            backpan5: this.props.obj.backpan5,
            backpan10: this.props.obj.backpan10,
            base1: this.props.obj.base1,
            base2: this.props.obj.base2,
            base3: this.props.obj.base3,
            windowheader: this.props.obj.windowheader,
            windowreverse: this.props.obj.windowreverse,
            walltransition: this.props.obj.walltransition,
            jtrim1: this.props.obj.jtrim1,
            jtrim2: this.props.obj.jtrim2,
            jtrim3: this.props.obj.jtrim3,
            transition: this.props.obj.transition,
            outsidecorner1: this.props.obj.outsidecorner1,
            insidecorner1: this.props.obj.insidecorner1,
            outsidecorner2: this.props.obj.outsidecorner2,
            insidecorner2: this.props.obj.insidecorner2,
            outsidecorner3: this.props.obj.outsidecorner3,
            insidecorner3: this.props.obj.insidecorner3,
            outsidecorner4: this.props.obj.outsidecorner4,
            insidecorner4: this.props.obj.insidecorner4,
            standing290: this.props.obj.standing290,
            standing291: this.props.obj.standing291,
            standing292: this.props.obj.standing292,
            standing293: this.props.obj.standing293,
            standing294: this.props.obj.standing294,
            standing295: this.props.obj.standing295
        })
      }

    render(){
        return (
            <div className="diamondMainContainer">
                {/* <Header/> */}
                {/* <div className="productPageLandingContainer">
                    <img className="productPageLandingImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fhome%20image1.png?alt=media&token=5023b190-2479-4de8-8d66-9c02fe005c19"></img>
                    <div className="productPage2ndContainer">
                    <h1 className="productPageMainTitle">Curved Panel System</h1>
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
                </div> */}
                {/* <div className="productPage3rdContainer">
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-150.png?alt=media&token=94a18052-a194-48e3-b004-2904867ffd11"></img>
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/productsPages%2Fss150specs.png?alt=media&token=81fdb78d-1915-4964-8337-0566669eb4cb"></img>
                </div> */}
                <div className="productsPage4thContainer">
                    {/* <div className="productsPage4thContainerHeader">
                        <a className="headerOptions" onClick={this.orderOptions}>Order Now</a>
                        <a className="headerOptions" onClick={this.colorOptions}>Color Options</a>
                    </div> */}
                    {/* {
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
                    } */}
                    {/* {
                        this.state.orderOptions
                        ? ( */}
                            <div className="orderOptionsContent">
                                <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit}>
                                    <div className="orderOptionsTextForm">
                                        <h2 className="orderOptionsTextFormTitle">Curved Panel System</h2>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.customerName?
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="customerName" 
                                                // placeholder="Customer Name"
                                                // onChange={this.handleChange}
                                                //  
                                                value={this.props.obj.customerName}
                                                />:
                                                <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="customerName" 
                                                placeholder="Customer Name"
                                                // onChange={this.handleChange}
                                                //  
                                                // value={this.props.obj.customerName}
                                                />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.phone?<Input 
                                                type="phone"
                                                className="orderOptionsTextInput"
                                                name="phone"
                                                // placeholder="Phone Number"
                                                value={this.props.obj.phone}
                                                // onChange={this.handleChange} 
                                                //  
                                                />:
                                            <Input 
                                                type="phone"
                                                className="orderOptionsTextInput"
                                                name="phone"
                                                placeholder="Phone Number"
                                                // value={this.props.obj.phone}
                                                // onChange={this.handleChange} 
                                                //  
                                                />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.po?
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                // name="po"
                                                // placeholder="PO"
                                                // onChange={this.handleChange}
                                                //  
                                                value={this.props.obj.po}
                                                />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                // name="po"
                                                placeholder="PO"
                                                // onChange={this.handleChange}
                                                //  
                                                // value={this.props.obj.po}
                                                />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.email?
                                            <Input 
                                                type="email"
                                                className="orderOptionsTextInput"
                                                // name="email"
                                                // placeholder="Email Address"
                                                // onChange={this.handleChange}
                                                //  
                                                value={this.props.obj.email}
                                                />:<Input 
                                                type="email"
                                                className="orderOptionsTextInput"
                                                // name="email"
                                                placeholder="Email Address"
                                                // onChange={this.handleChange}
                                                //  
                                                // value={this.props.obj.email}
                                                />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.address?
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                // name="address"
                                                // placeholder="Customer Address"
                                                // onChange={this.handleChange} 
                                                value={this.props.obj.address}
                                                />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                // name="address"
                                                placeholder="Customer Address"
                                                // onChange={this.handleChange} 
                                                // value={this.props.obj.address}
                                                />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.productname?
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                // placeholder="Product Name"
                                                // onChange={this.handleChange} 
                                                //  
                                                value={this.props.obj.productname}
                                                />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                placeholder="Product Name"
                                                // onChange={this.handleChange} 
                                                //  
                                                // value={this.props.obj.productName}
                                                />}
                                        </FormGroup>
                                    </div>
                                    <div className="orderOptionsSpecsForm">
                                    <div className="orderOptionsSpecsFormTitle">
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>GA</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.ga} name="ga" onChange={this.handleChange} >
                                                    <option>-</option>
                                                    <option>29</option>
                                                    <option>26</option>
                                                    <option>24</option>
                                                    <option>22</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Color</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.color} name="color" onChange={this.handleChange}  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total Linear Feet</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.totallinearfeet} name="totallinearfeet" readOnly />
                                                {/* this.state.totallinearfeet */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Special Crating</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.specialcrating} name="specialcrating" onChange={this.handleChange} />
                                                    {/* <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option> */}
                                                {/* </Input> */}
                                                <p className="protectiveFilmDisclaimer">At extra cost</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>Protective film</Label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.protectivefilm} name="protectivefilm" onChange={this.handleChange} />
                                                    {/* <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input> */}
                                                <p className="protectiveFilmDisclaimer">10cents extra per sq/ft</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Finish</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.finish} name="finish" onChange={this.handleChange}  />
                                                    {/* <option>-</option>
                                                    <option>12</option>
                                                    <option>16</option>
                                                    <option>20</option>
                                                </Input> */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.totalsquarefeet} name="totalsquarefeet"  readOnly />
                                                {/* placeholder={this.state.totalsquarefeet} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="number" className="orderOptionsSpecsInput" value={this.props.obj.qty} name="qty"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="number" className="orderOptionsSpecsInput" value={this.props.obj.inch} name="inch"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm} name="mm" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag} name="tag" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="number" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet} name="linearfeet" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet} name="squarefeet" onChange={this.handleChange} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty2} name="qty2" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch2} name="inch2" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm2} name="mm2"  readOnly/>
                                                {/* placeholder={this.state.mm2} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag2} name="tag2" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet2} name="linearfeet2" />
                                                {/* placeholder={this.state.linearfeet2} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet2} name="squarefeet2"  readOnly />
                                                {/* placeholder={this.state.squarefeet2} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty3} name="qty3" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch3} name="inch3" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm3} name="mm3"  readOnly/>
                                                {/* placeholder={this.state.mm3} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag3} name="tag3" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet3} name="linearfeet3" />
                                                {/* placeholder={this.state.linearfeet3} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet3} name="squarefeet3"  readOnly />
                                                {/* placeholder={this.state.squarefeet3} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty4} name="qty4" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch4} name="inch4" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm4} name="mm4"  readOnly/>
                                                {/* placeholder={this.state.mm4} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag4} name="tag4" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet4} name="linearfeet4" />
                                                {/* placeholder={this.state.linearfeet4} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet4} name="squarefeet4"  readOnly />
                                                {/* placeholder={this.state.squarefeet4} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty5} name="qty5" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch5} name="inch5" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm5} name="mm5"  readOnly/>
                                                {/* placeholder={this.state.mm5} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag5} name="tag5" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet5} name="linearfeet5" />
                                                {/* placeholder={this.state.linearfeet5} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet5} name="squarefeet5"  readOnly />
                                                {/* placeholder={this.state.squarefeet5} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty6} name="qty6" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch6} name="inch6" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm6} name="mm6"  readOnly/>
                                                {/* placeholder={this.state.mm6} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag6} name="tag6" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet6} name="linearfeet6" />
                                                {/* placeholder={this.state.linearfeet6} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet6} name="squarefeet6"  readOnly />
                                                {/* placeholder={this.state.squarefeet6} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty7} name="qty7" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch7} name="inch7" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm7} name="mm7"  readOnly/>
                                                {/* placeholder={this.state.mm7} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag7} name="tag7" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet7} name="linearfeet7" />
                                                {/* placeholder={this.state.linearfeet7} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet7} name="squarefeet7"  readOnly />
                                                {/* placeholder={this.state.squarefeet7} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty8} name="qty8" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch8} name="inch8" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm8} name="mm8"  readOnly/>
                                                {/* placeholder={this.state.mm8} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag8} name="tag8" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet8} name="linearfeet8" />
                                                {/* placeholder={this.state.linearfeet8} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet8} name="squarefeet8"  readOnly />
                                                {/* placeholder={this.state.squarefeet8} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty9} name="qty9" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch9} name="inch9" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm9} name="mm9"  readOnly/>
                                                {/* placeholder={this.state.mm9} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag9} name="tag9" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet9} name="linearfeet9" />
                                                {/* placeholder={this.state.linearfeet9} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet9} name="squarefeet9"  readOnly />
                                                {/* placeholder={this.state.squarefeet9} */}
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty10} name="qty10" />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch10} name="inch10" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm10} name="mm10"  readOnly/>
                                                {/* placeholder={this.state.mm10} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag10} name="tag10" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet10} name="linearfeet10" />
                                                {/* placeholder={this.state.linearfeet10} */}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet10} name="squarefeet10"  readOnly />
                                                {/* placeholder={this.state.squarefeet10} */}
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="orderOptionsFlashingsMainContainer">
                                        <h2 className="orderOptionsTitle">FLASHINGS:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                            {this.props.obj.hookdrip1?<FormGroup className="orderOptionsFlashingsContainer2"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHook%20Drip.jpg?alt=media&token=128c0549-17d9-45a3-b2a7-bc365f5884de"/>
                                                <CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="hookdrip1"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.hookdrip1}
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>:''}
                                            {this.props.obj.hookdripsteppitch?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHook%20Drip%20for%20Step%20Pitch.jpg?alt=media&token=f65e7428-d232-44d5-a98c-575772c14c33"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.hookdripsteppitch}
                                                    name="hookdripsteppitch"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.gabbleRake1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake%201.jpg?alt=media&token=2168f699-830a-44fd-9436-b723263b012f"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.gabbleRake1}
                                                    name="gabbleRake1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.gabbleRake2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake%202.jpg?alt=media&token=bb75ffd9-207c-47f4-bd34-9da4b7e2c639"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.gabbleRake2}
                                                    name="gabbleRake2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.gabbleRake3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake3.jpg?alt=media&token=136150c3-5ebe-478d-9047-f3c252b61610"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.gabbleRake3}
                                                    name="gabbleRake3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.sidewall1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSide%20Wall1.jpg?alt=media&token=976350de-e6df-448e-ac75-c01286d7a46f"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.sidewall1}
                                                    name="sidewall1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.sidewall2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSide%20Wall2.jpg?alt=media&token=738b3bd2-35cb-4d21-89c4-d0abc76d1095"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.sidewall2}
                                                    name="sidewall2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.endwall1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall1.jpg?alt=media&token=5b64a623-4628-41df-b181-c79a38337da2"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.endwall1}
                                                    name="endwall1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.endwall2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall2.jpg?alt=media&token=7f97894b-5d52-40e4-b7e6-618c9b6c936f"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.endwall2}
                                                    name="endWall2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.endwall3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall3.jpg?alt=media&token=26ec8677-267b-4db0-8f3a-1698501391be"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.endwall3}
                                                    name="endwall3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.transition1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition1.jpg?alt=media&token=34056558-c020-4562-892c-fd66e759def0"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.transition1}
                                                    name="transition1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.transition2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition2.jpg?alt=media&token=a5e7befb-9a90-415a-81bc-c5fdb15c2242"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.transition2}
                                                    name="transition2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.transition3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition3.jpg?alt=media&token=966d4436-fb81-491d-ab8b-f30b976224f8"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.transition3}
                                                    name="transition3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.peakcap1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap1.jpg?alt=media&token=c14face5-939d-4285-ba3e-50bc28c90575"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.peakcap1}
                                                    name="peakcap1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.peakcap2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap2.jpg?alt=media&token=adec41f4-5187-465c-81ee-63d11bb3289e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.peakcap2}
                                                    name="peakcap2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.peakcap3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap3.jpg?alt=media&token=79a3bc42-e526-4153-9c33-178d3f9c7739"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.peakcap3}
                                                    name="peakcap3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.hip1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHIP1.jpg?alt=media&token=170717c2-e8b9-4217-a7af-aaac85fd64dd"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.hip1}
                                                    name="hip1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.hip2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fhip2.jpg?alt=media&token=74c1af7f-f804-4478-a3e3-eb9669f76828"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.hip2}
                                                    name="hip2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.hip3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fhip3.jpg?alt=media&token=d50c0ad5-953b-44e0-ba35-b003326b2952"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.hip3}
                                                    name="hip3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.ridge1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge1.jpg?alt=media&token=981f9517-2c82-40a9-beb7-cf69ba5bc4ec"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.ridge1}
                                                    name="ridge1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.ridge2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge2.jpg?alt=media&token=42040d63-9ae0-439b-8d51-9f0095cc6c33"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.ridge2}
                                                    name="ridge2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.ridge3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FRidge3.jpg?alt=media&token=c2d35282-ed62-4b16-b814-3e399d172c13"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.ridge3}
                                                    name="ridge3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.ridge4?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge4.jpg?alt=media&token=fd08e06e-d95b-4af2-8c48-77249f122131"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.ridge4}
                                                    name="ridge4"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.wvalley1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fw%20valley1.jpg?alt=media&token=8c8d4a97-bc5d-49fc-87db-e932a50d4840"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.wvalley1}
                                                    name="wvalley1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.wvalley2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fw%20valley%202.jpg?alt=media&token=5d48576e-9425-46b3-9034-9340d8e1a3d9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY
                                                    value={this.props.obj.wvalley2}
                                                    name="wvalley2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.vvalley1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fv%20valley1.jpg?alt=media&token=6119c876-4cf3-4bb5-bde6-6cec23327350"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.vvalley1}
                                                    name="vvalley1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.snowstop1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSnow%20Stop1.jpg?alt=media&token=2facc5b6-33fc-4478-a8c4-38118003f67a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.snowstop1}
                                                    name="snowstop1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.cleat?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FCleat.jpg?alt=media&token=906047c9-a6c6-4da3-847a-dfc3c431f989"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.cleat}
                                                    name="cleat"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.junderbarrel?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FJ%20-%20Under%20panel.jpg?alt=media&token=ce96a89a-53c9-48e8-baa0-e34700ee517d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.junderbarrel}
                                                    name="junderbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.zbaroverbarrel?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fz%20bar%20-%20over%20panel.jpg?alt=media&token=77f0411b-b731-484b-978d-205f25583889"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.zbaroverbarrel}
                                                    name="zbaroverbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.perforatedjunderbarrel?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fperforated%20j%20under%20panel.jpg?alt=media&token=1054ddc7-a74b-463b-a798-ad667fab8587"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.perforatedjunderbarrel}
                                                    name="perforatedjunderbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.perforatedzbaroverbarrel?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fperforated%20z%20bar%20over%20panel.jpg?alt=media&token=ebf74b6d-62e8-431f-bf19-5be893850b0e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.perforatedzbaroverbarrel}
                                                    name="perforatedzbaroverbarrel"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.backpan5?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fback%20pan%205'.jpg?alt=media&token=473c5f91-c50a-4cc1-b09d-b05eeec907bb"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.backpan5}
                                                    name="backpan5"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.backpan10?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fback%20pan%2010'.jpg?alt=media&token=e4ee0ccb-3c4f-4171-9dd0-85affbbb6983"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.backpan10}
                                                    name="backpan10"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.base1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase1.jpg?alt=media&token=7380e3f3-febe-4850-b44c-3487c570d593"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.base1}
                                                    name="base1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.base2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase2.jpg?alt=media&token=799df40c-cb74-4f4c-9be0-43f771c44adb"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.base2}
                                                    name="base2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.base3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase3.jpg?alt=media&token=97107a41-d31b-4ef8-91c0-ce95afac08d9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.base3}
                                                    name="base3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.windowheader?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwindow%20header.jpg?alt=media&token=e129e120-0493-4b39-bcc6-6f43fd743714"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.windowheader}
                                                    name="windowheader"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.windowreverse?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwindow%20reverse.jpg?alt=media&token=46cde2e8-b918-415b-aef6-92ea65c45988"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.windowreverse}
                                                    name="windowreverse"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.walltransition?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwall%20transition.jpg?alt=media&token=8d8a0c06-26ae-4882-89db-ae0dea8dd7e9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.walltransition}
                                                    name="walltransition"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.jtrim1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fj%20trim1.jpg?alt=media&token=44dbbede-3e6d-4e34-a0de-ae21918f4172"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.jtrim1}
                                                    name="jtrim1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.jtrim2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fj%20trim2.jpg?alt=media&token=0aae4a79-370e-45b2-96e6-8ce6e18d2a92"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.jtrim2}
                                                    name="jtrim2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.jtrim3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20jtrim3.jpg?alt=media&token=756efa31-2396-4d91-97d2-4be22e4f8bcd"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.jtrim3}
                                                    name="jtrim3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.transition?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Ftransition.jpg?alt=media&token=42c3faae-0e29-4d10-9bfd-63bbd842ea9f"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.transition}
                                                    name="transition"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.outsidecorner1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutside%20corner1.jpg?alt=media&token=02b739c0-bbf2-49bc-9b7d-bb223cbf2b26"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.outsidecorner1}
                                                    name="outsidecorner1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.insidecorner1?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner1.jpg?alt=media&token=882c02f5-ea61-4ca3-beb3-745e1043599d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.insidecorner1}
                                                    name="insidecorner1"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.outsidecorner2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutisde%20corner2.jpg?alt=media&token=151ca8a2-a7d7-4f05-87cc-d0f523996f3f"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.outsidecorner2}
                                                    name="outsidecorner2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.insidecorner2?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner%202.jpg?alt=media&token=43d76f94-970c-4389-a0fe-3acf2b433ea3"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.insidecorner2}
                                                    name="insidecorner2"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.outsidecorner3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutside%20corner3.jpg?alt=media&token=d93d7683-5b29-4ac8-a19b-3ba3ab2f7315"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.outsidecorner3}
                                                    name="outsidecorner3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.insidecorner3?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner%203.jpg?alt=media&token=f1794e40-01aa-4b20-bda9-bfbda9613cf1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.insidecorner3}
                                                    name="insidecorner3"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.outsidecorner4?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20outside%20corner%204.jpg?alt=media&token=0f7b3af5-4dfe-4aa2-89b4-ba3e7dd7372c"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.outsidecorner4}
                                                    name="outsidecorner4"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.insidecorner4?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20inside%20corner%204.jpg?alt=media&token=51b3c95b-eb40-4842-8fc6-1e980c084437"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.insidecorner4}
                                                    name="insidecorner4"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.standing290?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F%23290.jpg?alt=media&token=6c68de20-0c63-4945-889e-e23a542e79f1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing290}
                                                    name="standing290"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:""}
                                            {this.props.obj.standing291?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F%23291.jpg?alt=media&token=1cf9db98-49c0-428e-939e-c7e6580b254c"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing291}
                                                    name="standing291"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.standing292?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F292.jpg?alt=media&token=3ed2147e-208e-44fc-84d9-f86b405f2c15"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing292}
                                                    name="standing292"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.standing293?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F293.jpg?alt=media&token=620e55ed-13f2-4a99-9fae-762cd5fcba37"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing293}
                                                    name="standing293"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.standing294?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F294.jpg?alt=media&token=111aa019-7325-40c0-bf5b-879d8e0b31ab"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing294}
                                                    name="standing294"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.standing295?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F295.jpg?alt=media&token=013a0246-9ad8-49e1-b8f5-a353e8f2f05a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.standing295}
                                                    name="standing295"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                        </div>
                                    </div>
                                    <h2 className="orderOptionsTitle">ACCESSORIES:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                        {this.props.obj.metalDrillScrews?<FormGroup className="orderOptionsFlashingsContainer"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetal%20drill%20screws.png?alt=media&token=def7c31f-bab7-430a-aac1-c6686b9eb621"/>
                                                <CustomInput
                                                    className="orderOptionsAccessoriesInput" 
                                                    name="metalDrillScrews"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.metalDrillScrews}
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>:''}
                                            {this.props.obj.woodGripScrews?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwoodgrip%20screws.png?alt=media&token=bedb64c8-3ace-4697-8bd6-10e6b6ee4db2"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.woodGripScrews}
                                                    name="woodGripScrews"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.syntheticHighTempCover?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsynthetic%20high%20temp%20cover.png?alt=media&token=175a4dbb-40b2-43b5-92f2-eb31cb839e7c"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.syntheticHighTempCover}
                                                    name="syntheticHighTempCover"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {/* <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fpeel%20%26%20stick%20high%20temp%20cover.png?alt=media&token=7bfec47d-cb9b-40c3-b843-b93811e530f2"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="peel&StickHighTempCover"
                                                    onChange={this.handleChange} />
                                            </FormGroup> */}
                                            {this.props.obj.tubeSealant?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftube%20sealant.png?alt=media&token=bf1baf8a-beac-461e-af91-7fa9c12695e6"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.tubeSealant}
                                                    name="tubeSealant"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.butylTape?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbutyl%20tape.png?alt=media&token=24398d7f-af89-4872-82fd-d9286875a3cb"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.butylTape}
                                                    name="butylTape"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.plumbingBoots?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fplumbing%20boots.png?alt=media&token=1db3c74a-c476-4596-b4b6-0c286a1cc006"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.plumbingBoots}
                                                    name="plumbingBoots"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.flexOVent?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fflex-o-vent.png?alt=media&token=c1e81e0f-c6a2-48fd-84be-6952ba69aadf"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.flexOVent}
                                                    name="flexOVent"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.profileOuterClosure?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20outer%20closure.png?alt=media&token=836d6b46-1e94-45a5-aea2-6ce4c69d37a3"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.profileOuterClosure}
                                                    name="profileOuterClosure"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.profileInnerClosure?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20inner%20closure.png?alt=media&token=a799aa5a-55a3-41d9-9a47-a4565e06e6c5"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.profileInnerClosure}
                                                    name="profileInnerClosure"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.lowProfileRidgeVent?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flow%20profile%20ridge%20vent.png?alt=media&token=18d4aaaf-d88f-4cda-96ee-1addef31a649"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.lowProfileRidgeVent}
                                                    name="lowProfileRidgeVent"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                        </div>
                                    
                                    <Button className="contactButton" onClick={this.printPage}><p className="contactButtonText">Print Page</p></Button>
                                    <Button className="contactButton"><p className="contactButtonText">Submit</p></Button> 
                                </Form>
                            </div>   
                </div>
            </div>
        )
    }
}

export default CurvedPanelSystemPrint;