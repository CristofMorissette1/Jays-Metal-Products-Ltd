import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'
import Standingseam2Print from '../printComponents/standingseam';
import { PDFViewer } from '@react-pdf/renderer';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';

class Standingseam extends Component{
    constructor(){
        super()
        this.state = {
            ten: false,
            status: true,
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
            qty: 0,
            inch: 0,
            mm: '',
            specialcrating: '',
            tag: '',
            linearfeet: 0,
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
            qty11: '',
            inch11: '',
            mm11: '',
            tag11: '',
            linearfeet11: '',
            squarefeet11: '',
            qty12: '',
            inch12: '',
            mm12: '',
            tag12: '',
            linearfeet12: '',
            squarefeet12: '',
            qty13: '',
            inch13: '',
            mm13: '',
            tag13: '',
            linearfeet13: '',
            squarefeet13: '',
            qty14: '',
            inch14: '',
            mm14: '',
            tag14: '',
            linearfeet14: '',
            squarefeet14: '',
            qty15: '',
            inch15: '',
            mm15: '',
            tag15: '',
            linearfeet15: '',
            squarefeet15: '',
            qty16: '',
            inch16: '',
            mm16: '',
            tag16: '',
            linearfeet16: '',
            squarefeet16: '',
            qty17: '',
            inch17: '',
            mm17: '',
            tag17: '',
            linearfeet17: '',
            squarefeet17: '',
            qty18: '',
            inch18: '',
            mm18: '',
            tag18: '',
            linearfeet18: '',
            squarefeet18: '',
            qty19: '',
            inch19: '',
            mm19: '',
            tag19: '',
            linearfeet19: '',
            squarefeet19: '',
            qty20: '',
            inch20: '',
            mm20: '',
            tag20: '',
            linearfeet20: '',
            squarefeet20: '',
            sa101: '',
            sa102: '',
            sa104: '',
            sa105: '',
            sa106: '',
            sa108: '',
            sa109: '',
            sa112: '',
            sa113: '',
            sa114: '',
            sa117: '',
            sa118: '',
            sa119: '',
            sa122: '',
            sa123: '',
            sa126: '',
            sa127: '',
            sa128: '',
            sa131: '',
            sa132: '',
            sa133: '',
            sa134: '',
            sa137: '',
            sa138: '',
            sa139: '',
            sa140: '',
            sa143: '',
            sa144: '',
            sa147: '',
            sa150: '',
            sa151: '',
            sa152: '',
            sa153: '',
            sa154: '',
            sa155: '',
            sa160: '',
            sa161: '',
            sa162: '',
            sa165: '',
            sa166: '',
            sa169: '',
            sa171: '',
            sa172: '',
            sa173: '',
            sa175: '',
            sa180: '',
            sa181: '',
            sa182: '',
            sa183: '',
            sa184: '',
            sa185: '',
            sa186: '',
            sa187: '',
            sa190: '',
            sa191: '',
            sa192: '',
            sa193: '',
            sa194: '',
            sa195: ''
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
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, squarefeet, hookdrip1, hookdripsteppitch, gabbleRake1, gabbleRake2, gabbleRake3, sidewall1, sidewall2, endwall1, endwall3, endWall2, transition3, peakcap1, peakcap2, peakcap3, transition1, transition2, hip1, hip2, hip3, ridge1, ridge2, ridge3, ridge4, wvalley1, wvalley2, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
            this.state.status = false
            this.forceUpdate();
    }

    tenMore = e => {
        this.setState({
            ten: true,
        });
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
        let linearFeet1 = (this.state.qty * this.state.inch) / 12;
        let mmSize1 = this.state.inch * 25.4;
        let sqft1 = (this.state.finish / 12) * this.state.linearfeet;
        let linearFeet2 = (this.state.qty2 * this.state.inch2) / 12;
        let mmSize2 = this.state.inch2 * 25.4;
        let sqft2 = (this.state.finish / 12) * this.state.linearfeet2;
        let linearFeet3 = (this.state.qty3 * this.state.inch3) / 12;
        let mmSize3 = this.state.inch3 * 25.4;
        let sqft3 = (this.state.finish / 12) * this.state.linearfeet3;
        let linearFeet4 = (this.state.qty4 * this.state.inch4) / 12;
        let mmSize4 = this.state.inch4 * 25.4;
        let sqft4 = (this.state.finish / 12) * this.state.linearfeet4;
        let linearFeet5 = (this.state.qty5 * this.state.inch5) / 12;
        let mmSize5 = this.state.inch5 * 25.4;
        let sqft5 = (this.state.finish / 12) * this.state.linearfeet5;
        let linearFeet6 = (this.state.qty6 * this.state.inch6) / 12;
        let mmSize6 = this.state.inch6 * 25.4;
        let sqft6 = (this.state.finish / 12) * this.state.linearfeet6;
        let linearFeet7 = (this.state.qty7 * this.state.inch7) / 12;
        let mmSize7= this.state.inch7 * 25.4;
        let sqft7 = (this.state.finish / 12) * this.state.linearfeet7;
        let linearFeet8 = (this.state.qty8 * this.state.inch8) / 12;
        let mmSize8 = this.state.inch8 * 25.4;
        let sqft8 = (this.state.finish / 12) * this.state.linearfeet8;
        let linearFeet9 = (this.state.qty9 * this.state.inch9) / 12;
        let mmSize9 = this.state.inch9 * 25.4;
        let sqft9 = (this.state.finish / 12) * this.state.linearfeet9;
        let linearFeet10 = (this.state.qty10 * this.state.inch10) / 12;
        let mmSize10 = this.state.inch10 * 25.4;
        let sqft10 = (this.state.finish / 12) * this.state.linearfeet10;
        let linearFeet11 = (this.state.qty11 * this.state.inch11) / 12;
        let mmSize11 = this.state.inch11 * 25.4;
        let sqft11 = (this.state.finish / 12) * this.state.linearfeet11;
        let linearFeet12 = (this.state.qty12 * this.state.inch12) / 12;
        let mmSize12 = this.state.inch12 * 25.4;
        let sqft12 = (this.state.finish / 12) * this.state.linearfeet12;
        let linearFeet13 = (this.state.qty13 * this.state.inch13) / 12;
        let mmSize13 = this.state.inch13 * 25.4;
        let sqft13 = (this.state.finish / 12) * this.state.linearfeet13;
        let linearFeet14 = (this.state.qty14 * this.state.inch14) / 12;
        let mmSize14 = this.state.inch14 * 25.4;
        let sqft14 = (this.state.finish / 12) * this.state.linearfeet14;
        let linearFeet15 = (this.state.qty15 * this.state.inch15) / 12;
        let mmSize15 = this.state.inch15 * 25.4;
        let sqft15 = (this.state.finish / 12) * this.state.linearfeet15;
        let linearFeet16 = (this.state.qty16 * this.state.inch16) / 12;
        let mmSize16 = this.state.inch16 * 25.4;
        let sqft16 = (this.state.finish / 12) * this.state.linearfeet16;
        let linearFeet17 = (this.state.qty17 * this.state.inch17) / 12;
        let mmSize17= this.state.inch17 * 25.4;
        let sqft17 = (this.state.finish / 12) * this.state.linearfeet17;
        let linearFeet18 = (this.state.qty18 * this.state.inch18) / 12;
        let mmSize18 = this.state.inch18 * 25.4;
        let sqft18 = (this.state.finish / 12) * this.state.linearfeet18;
        let linearFeet19 = (this.state.qty19 * this.state.inch19) / 12;
        let mmSize19 = this.state.inch19 * 25.4;
        let sqft19 = (this.state.finish / 12) * this.state.linearfeet19;
        let linearFeet20 = (this.state.qty20 * this.state.inch20) / 12;
        let mmSize20 = this.state.inch20 * 25.4;
        let sqft20 = (this.state.finish / 12) * this.state.linearfeet20;
        let sqft = sqft1 + sqft2 + sqft3 + sqft4 + sqft5 + sqft6 + sqft7 + sqft8 + sqft9 + sqft10+sqft11 + sqft12 + sqft13 + sqft14 + sqft15 + sqft16 + sqft17 + sqft18 + sqft19 + sqft20;
        let totalLinear = linearFeet1 + linearFeet2 + linearFeet3 + linearFeet4 + linearFeet5 + linearFeet6 + linearFeet7 + linearFeet8 + linearFeet9 + linearFeet10+linearFeet11 + linearFeet12 + linearFeet13 + linearFeet14 + linearFeet15 + linearFeet16 + linearFeet17 + linearFeet18 + linearFeet19 + linearFeet20;
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
            linearfeet11: linearFeet11.toFixed(2),
            mm11: mmSize11.toFixed(2),
            squarefeet11: sqft11.toFixed(2),
            linearfeet12: linearFeet12.toFixed(2),
            mm12: mmSize12.toFixed(2),
            squarefeet12: sqft12.toFixed(2),
            linearfeet13: linearFeet13.toFixed(2),
            mm13: mmSize13.toFixed(2),
            squarefeet13: sqft13.toFixed(2),
            linearfeet14: linearFeet14.toFixed(2),
            mm14: mmSize14.toFixed(2),
            squarefeet14: sqft14.toFixed(2),
            linearfeet15: linearFeet15.toFixed(2),
            mm15: mmSize15.toFixed(2),
            squarefeet15: sqft15.toFixed(2),
            linearfeet16: linearFeet16.toFixed(2),
            mm16: mmSize16.toFixed(2),
            squarefeet16: sqft16.toFixed(2),
            linearfeet17: linearFeet17.toFixed(2),
            mm17: mmSize17.toFixed(2),
            squarefeet17: sqft17.toFixed(2),
            linearfeet18: linearFeet18.toFixed(2),
            mm18: mmSize18.toFixed(2),
            squarefeet18: sqft18.toFixed(2),
            linearfeet19: linearFeet19.toFixed(2),
            mm19: mmSize19.toFixed(2),
            squarefeet19: sqft19.toFixed(2),
            linearfeet20: linearFeet20.toFixed(2),
            mm20: mmSize20.toFixed(2),
            squarefeet20: sqft20.toFixed(2),
            totallinearfeet: totalLinear.toFixed(2),
            totalsquarefeet: sqft.toFixed(2)
        })
      }
    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, squarefeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, 
            qty11, inch11, mm11, linearfeet11, squarefeet11, qty12, inch12, mm12, tag12, linearfeet12, squarefeet12, qty13, inch13, mm13, tag13, linearfeet13, squarefeet13, qty14, inch14, mm14, tag14, linearfeet14, squarefeet14, qty15, inch15, mm15, tag15, linearfeet15, squarefeet15, qty16, inch16, mm16, tag16, linearfeet16, squarefeet16, qty17, inch17, mm17, tag17, linearfeet17, squarefeet17, qty18, inch18, mm18, tag18, linearfeet18, squarefeet18, qty19, inch19, mm19, tag19, linearfeet19, squarefeet19, qty20, inch20, mm20, tag20, linearfeet20, squarefeet20,
            sa101, sa102, sa104, sa105, sa106, sa108, sa109, sa112, sa113, sa114, sa117, sa118, sa119, sa122, sa123, sa126, sa127, sa128, sa131, sa132, sa133, sa134, sa137, sa138, sa139, sa140, sa143, sa144, sa147, sa150, sa151, sa152, sa153, sa154, sa155, sa160, sa161, sa162, sa165, sa166, sa169, sa171, sa172, sa173, sa175, sa180, sa181, sa182, sa183, sa184, sa185, sa186, sa187, sa190, sa191, sa192, sa193, sa194, sa195} = this.state;
    
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
            qty11,
            inch11,
            mm11,
            // specialcrating,
            // tag,
            linearfeet11,
            squarefeet11,
            qty12,
            inch12,
            mm12,
            tag12,
            linearfeet12,
            squarefeet12,
            qty13,
            inch13,
            mm13,
            tag13,
            linearfeet13,
            squarefeet13,
            qty14,
            inch14,
            mm14,
            tag14,
            linearfeet14,
            squarefeet14,
            qty15,
            inch15,
            mm15,
            tag15,
            linearfeet15,
            squarefeet15,
            qty16,
            inch16,
            mm16,
            tag16,
            linearfeet16,
            squarefeet16,
            qty17,
            inch17,
            mm17,
            tag17,
            linearfeet17,
            squarefeet17,
            qty18,
            inch18,
            mm18,
            tag18,
            linearfeet18,
            squarefeet18,
            qty19,
            inch19,
            mm19,
            tag19,
            linearfeet19,
            squarefeet19,
            qty20,
            inch20,
            mm20,
            tag20,
            linearfeet20,
            squarefeet20,
            sa101,
            sa102,
            sa104,
            sa105,
            sa106,
            sa108,
            sa109,
            sa112,
            sa113,
            sa114,
            sa117,
            sa118,
            sa119,
            sa122,
            sa123,
            sa126,
            sa127,
            sa128,
            sa131,
            sa132,
            sa133,
            sa134,
            sa137,
            sa138,
            sa139,
            sa140,
            sa143,
            sa144,
            sa147,
            sa150,
            sa151,
            sa152,
            sa153,
            sa154,
            sa155,
            sa160,
            sa161,
            sa162,
            sa165,
            sa166,
            sa169,
            sa171,
            sa172,
            sa173,
            sa175,
            sa180,
            sa181,
            sa182,
            sa183,
            sa184,
            sa185,
            sa186,
            sa187,
            sa190,
            sa191,
            sa192,
            sa193,
            sa194,
            sa195
        })
        e.target.reset();
      }

    render(){
        return (
            <div>{this.state.status==true?(<div className="diamondMainContainer">
                <Header/>
                <div className="productPageLandingContainer">
                    <img className="productPageLandingImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Home%2Fhome%20image1.png?alt=media&token=5023b190-2479-4de8-8d66-9c02fe005c19"></img>
                    <div className="productPage2ndContainer">
                    <h1 className="productPageMainTitle">SS 100</h1>
                    <p className="productPageMainText">Our mechanically standing seam system is the perfect complement to any exterior of commercial or residential buildings. SS 100 provides a clean visual appearance due to the hidden fastener system, this allows for a seamless look. The 1” panel is ideal for residential applications with a slope greater than 3:12, this will assist against the elements and will be aesthetically pleasing as the roof is a focal point of a building.<br/>
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
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/products%2Fstandingseam-100.png?alt=media&token=1c7a6b67-14fe-429d-ae0e-1d63d9f65b47"></img>
                    <img className="productPageImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/productsPages%2FSS%20100.jpg?alt=media&token=b3d4bfff-29dc-4e62-b03b-acbfab32c937"></img>
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
                                <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit} onClick={this.handleChange}>
                                    <div className="orderOptionsTextForm">
                                        <h2 className="orderOptionsTextFormTitle">SS 100</h2>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.state.customerName?<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="customerName" 
                                                // placeholder="Customer Name"
                                                value={this.state.customerName}
                                                onChange={this.handleChange}
                                                required 
                                                 />:<Input 
                                                 type="text"
                                                 className="orderOptionsTextInput"
                                                 name="customerName" 
                                                 placeholder="Customer Name"
                                                 onChange={this.handleChange}
                                                 required 
                                                  />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                        {this.state.phone?<Input 
                                                type="phone"
                                                className="orderOptionsTextInput"
                                                name="phone"
                                                // placeholder="Phone Number"
                                                value={this.state.phone}
                                                onChange={this.handleChange} 
                                                required />:<Input 
                                                type="phone"
                                                className="orderOptionsTextInput"
                                                name="phone"
                                                placeholder="Phone Number"
                                                onChange={this.handleChange} 
                                                required />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.state.po?<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="po"
                                                // placeholder="PO"
                                                value={this.state.po}
                                                onChange={this.handleChange}
                                                required />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="po"
                                                placeholder="PO"
                                                onChange={this.handleChange}
                                                required />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.state.email?<Input 
                                                type="email"
                                                className="orderOptionsTextInput"
                                                name="email"
                                                // placeholder="Email Address"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                required />:<Input 
                                                type="email"
                                                className="orderOptionsTextInput"
                                                name="email"
                                                placeholder="Email Address"
                                                onChange={this.handleChange}
                                                required />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.state.address?<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="address"
                                                // placeholder="Customer Address"
                                                value={this.state.address}
                                                onChange={this.handleChange} />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="address"
                                                placeholder="Customer Address"
                                                onChange={this.handleChange} />}
                                        </FormGroup>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.state.productname?<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                // placeholder="Product Name"
                                                value={this.state.productname}
                                                onChange={this.handleChange} 
                                                required />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                placeholder="Product Name"
                                                onChange={this.handleChange} 
                                                required />}
                                        </FormGroup>
                                    </div>
                                    <div className="orderOptionsSpecsForm">
                                        <div className="orderOptionsSpecsFormTitle">
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>GA</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.state.ga} name="ga" onChange={this.handleChange} required>
                                                    <option>-</option>
                                                    <option>29</option>
                                                    <option>26</option>
                                                    <option>24</option>
                                                    <option>22</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Color</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.color} name="color" onChange={this.handleChange} required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total Linear Feet</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.totallinearfeet} name="totallinearfeet" placeholder={this.state.totallinearfeet} readOnly />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Special Crating</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.state.specialcrating} name="specialcrating" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">At extra cost</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>Protective film</Label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.state.protectivefilm} name="protectivefilm" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">10cents extra per sq/ft</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Finish</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.state.finish} name="finish" onChange={this.handleChange} required >
                                                    <option>-</option>
                                                    <option>12</option>
                                                    <option>16</option>
                                                    <option>20</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" name="totalsquarefeet" value={this.state.totalsquarefeet} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty} name="qty" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch} name="inch" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm} name="mm" placeholder={this.state.mm} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag} name="tag" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet} name="linearfeet" placeholder={this.state.linearfeet}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet).toFixed(2)} name="squarefeet" placeholder={this.state.squarefeet} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty2} name="qty2"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch2} name="inch2"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm2} name="mm2" placeholder={this.state.mm2} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag2} name="tag2" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet2} name="linearfeet2" placeholder={this.state.linearfeet2}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet2).toFixed(2)} name="squarefeet2" placeholder={this.state.squarefeet2} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty3} name="qty3"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch3} name="inch3"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm3} name="mm3" placeholder={this.state.mm3} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag3} name="tag3" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet3} name="linearfeet3" placeholder={this.state.linearfeet3}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet3).toFixed(2)} name="squarefeet3" placeholder={this.state.squarefeet3} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty4} name="qty4"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch4} name="inch4"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm4} name="mm4" placeholder={this.state.mm4} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag4} name="tag4" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet4} name="linearfeet4" placeholder={this.state.linearfeet4}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet4).toFixed(2)} name="squarefeet4" placeholder={this.state.squarefeet4} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty5} name="qty5"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch5} name="inch5"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm5} name="mm5" placeholder={this.state.mm5} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag5} name="tag5" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet5} name="linearfeet5" placeholder={this.state.linearfeet5}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet5).toFixed(2)} name="squarefeet5" placeholder={this.state.squarefeet5} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty6} name="qty6"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch6} name="inch6"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm6} name="mm6" placeholder={this.state.mm6} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag6} name="tag6" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet6} name="linearfeet6" placeholder={this.state.linearfeet6}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet6).toFixed(2)} name="squarefeet6" placeholder={this.state.squarefeet6} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty7} name="qty7"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch7} name="inch7"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm7} name="mm7" placeholder={this.state.mm7} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag7} name="tag7" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet7} name="linearfeet7" placeholder={this.state.linearfeet7}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet7).toFixed(2)} name="squarefeet7" placeholder={this.state.squarefeet7} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty8} name="qty8"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch8} name="inch8"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm8} name="mm8" placeholder={this.state.mm8} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag8} name="tag8" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet8} name="linearfeet8" placeholder={this.state.linearfeet8}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet8).toFixed(2)} name="squarefeet8" placeholder={this.state.squarefeet8} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty9} name="qty9"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch9} name="inch9"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm9} name="mm9" placeholder={this.state.mm9} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag9} name="tag9" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet9} name="linearfeet9" placeholder={this.state.linearfeet9}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet9).toFixed(2)} name="squarefeet9" placeholder={this.state.squarefeet9} readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input onClick={this.tenMore} type="text" className="orderOptionsSpecsInput" value={this.state.qty10} name="qty10"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch10} name="inch10"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm10} name="mm10" placeholder={this.state.mm10} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag10} name="tag10" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet10} name="linearfeet10" placeholder={this.state.linearfeet10}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet10).toFixed(2)} name="squarefeet10" placeholder={this.state.squarefeet10} readOnly />
                                            </FormGroup>
                                        </div>
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty11} name="qty11"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch11} name="inch11"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm11} name="mm11" placeholder={this.state.mm11} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag11} name="tag11" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet11} name="linearfeet11" placeholder={this.state.linearfeet11}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet11).toFixed(2)} name="squarefeet11" placeholder={this.state.squarefeet11} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty12} name="qty12"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch12} name="inch12"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm12} name="mm12" placeholder={this.state.mm12} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag12} name="tag12" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet12} name="linearfeet12" placeholder={this.state.linearfeet12}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet12).toFixed(2)} name="squarefeet12" placeholder={this.state.squarefeet12} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty13} name="qty13"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch13} name="inch13"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm13} name="mm13" placeholder={this.state.mm13} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag13} name="tag13" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet13} name="linearfeet13" placeholder={this.state.linearfeet13}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet13).toFixed(2)} name="squarefeet13" placeholder={this.state.squarefeet13} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty14} name="qty14"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch14} name="inch14"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm14} name="mm14" placeholder={this.state.mm14} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag14} name="tag14" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet14} name="linearfeet14" placeholder={this.state.linearfeet14}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet14).toFixed(2)} name="squarefeet14" placeholder={this.state.squarefeet14} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty15} name="qty15"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch15} name="inch15"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm15} name="mm15" placeholder={this.state.mm15} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag15} name="tag15" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet15} name="linearfeet15" placeholder={this.state.linearfeet15}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet15).toFixed(2)} name="squarefeet15" placeholder={this.state.squarefeet15} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty16} name="qty16"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch16} name="inch16"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm16} name="mm16" placeholder={this.state.mm16} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag16} name="tag16" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet16} name="linearfeet16" placeholder={this.state.linearfeet16}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet16).toFixed(2)} name="squarefeet16" placeholder={this.state.squarefeet16} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty17} name="qty17"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch17} name="inch17"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm17} name="mm17" placeholder={this.state.mm17} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag17} name="tag17" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet17} name="linearfeet17" placeholder={this.state.linearfeet17}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet17).toFixed(2)} name="squarefeet17" placeholder={this.state.squarefeet17} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty18} name="qty18"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch18} name="inch18"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm18} name="mm18" placeholder={this.state.mm18} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag18} name="tag18" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet18} name="linearfeet18" placeholder={this.state.linearfeet18}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet18).toFixed(2)} name="squarefeet18" placeholder={this.state.squarefeet18} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty19} name="qty19"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch19} name="inch19"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm19} name="mm19" placeholder={this.state.mm19} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag19} name="tag19" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet19} name="linearfeet19" placeholder={this.state.linearfeet19}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet19).toFixed(2)} name="squarefeet19" placeholder={this.state.squarefeet19} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                        {this.state.ten?<div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.qty20} name="qty20"  />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.inch20} name="inch20"  />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.mm20} name="mm20" placeholder={this.state.mm20} readOnly/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.state.tag20} name="tag20" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.state.linearfeet20} name="linearfeet20" placeholder={this.state.linearfeet20}/>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Input type="text" className="orderOptionsSpecsInput" value={((this.state.finish/12)*this.state.linearfeet20).toFixed(2)} name="squarefeet20" placeholder={this.state.squarefeet20} readOnly />
                                            </FormGroup>
                                        </div>:''}
                                    </div>
                                    <div className="orderOptionsFlashingsMainContainer">
                                        <h2 className="orderOptionsTitle">FLASHINGS:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                            <FormGroup className="orderOptionsFlashingsContainer2"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F101.jpg?alt=media&token=64c9587d-e7e3-4531-8473-f19d4890eb5a"/>
                                                {this.state.sa101?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa101"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa101}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa101"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F102.jpg?alt=media&token=3aa8605c-fbb5-45df-a02b-981d6517ea95"/>
                                                {this.state.sa102?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa102"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa102}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa102"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F104.jpg?alt=media&token=19fe9ad5-91ca-4266-a3c2-f858e4ff84e3"/>
                                                {this.state.sa104?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa104"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa104}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa104"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F105.jpg?alt=media&token=7be981b4-3a74-4c37-8058-29415440e906"/>
                                                {this.state.sa105?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa105"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa105}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa105"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F106.jpg?alt=media&token=542cf440-e597-4f00-9f2a-6fb7bfbde114"/>
                                                {this.state.sa106?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa106"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa106}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa106"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F108.jpg?alt=media&token=cd662a88-879a-43a0-9e80-0d7fc2d4010c"/>
                                                {this.state.sa108?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa108"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa108}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa108"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F109.jpg?alt=media&token=fb96c910-c1da-4e7d-a055-41af52ec0673"/>
                                                {this.state.sa109?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa109"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa109}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa109"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F112.jpg?alt=media&token=2e728d82-d930-457a-ab80-a4c897caeca6"/>
                                                {this.state.sa112?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa112"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa112}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa112"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F113.jpg?alt=media&token=0b3e4158-a8f6-4675-a591-07525a95cb5e"/>
                                                {this.state.sa113?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa113"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa113}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa113"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F114.jpg?alt=media&token=102d6938-7612-4f6c-8ec5-862ccf4c4954"/>
                                                {this.state.sa114?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa114"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa114}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa114"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F117.jpg?alt=media&token=5fdc68a2-75a5-439f-a651-03851d1172e3"/>
                                                {this.state.sa117?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa117"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa117}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa117"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F118.jpg?alt=media&token=3ecae168-9c22-4da4-8a8c-aac2c7a1dca6"/>
                                                {this.state.sa118?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa118"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa118}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa118"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F119.jpg?alt=media&token=9c31cb8f-b95e-43ec-b654-e5cd6ffda59d"/>
                                                {this.state.sa119?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa119"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa119}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa119"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F121.jpg?alt=media&token=5b59e207-cac5-4ad1-84af-4e0ff81afb0c"/>
                                                {this.state.sa121?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa121"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa121}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa121"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F122.jpg?alt=media&token=53f535b9-230c-4180-bb64-49a4b04d2e04"/>
                                                {this.state.sa122?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa122"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa122}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa122"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F123.jpg?alt=media&token=dc6baf56-5bd1-4051-8e08-753db3c492a5"/>
                                                {this.state.sa123?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa123"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa123}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa123"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F126.jpg?alt=media&token=cdb09e80-828c-41e7-bbad-73a1d96c4873"/>
                                                {this.state.sa126?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa126"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa126}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa126"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F127.jpg?alt=media&token=ae6040db-1154-441f-81b9-3162a8965739"/>
                                                {this.state.sa127?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa127"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa127}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa127"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F128.jpg?alt=media&token=e91d01f4-d0a7-412c-8968-76cfdb2953c1"/>
                                                {this.state.sa128?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa128"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa128}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa128"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F131.jpg?alt=media&token=326f742a-9b07-46f7-92ac-d1e2c82ca34f"/>
                                                {this.state.sa131?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa131"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa131}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa131"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F132.jpg?alt=media&token=20d67532-d29d-4635-9760-69bc7fdeaddf"/>
                                                {this.state.sa132?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa132"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa132}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa132"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F133.jpg?alt=media&token=ba6280ac-6167-43da-a905-3205d43e4d17"/>
                                                {this.state.sa133?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa133"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa133}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa133"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F134.jpg?alt=media&token=22bda750-963f-43ca-9feb-6d5b772eac19"/>
                                                {this.state.sa134?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa134"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa134}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa134"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F137.jpg?alt=media&token=328a7468-5ecd-440f-9936-7b022175f48a"/>
                                                {this.state.sa137?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa137"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa137}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa137"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F138.jpg?alt=media&token=80d374c6-4e76-46e2-a058-41e30e246cfa"/>
                                                {this.state.sa138?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa138"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa138}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa138"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F139.jpg?alt=media&token=fc21e6cd-d137-473f-bbc8-8d393ab1322d"/>
                                                {this.state.sa139?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa139"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa139}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa139"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F140.jpg?alt=media&token=909da43f-e75f-451d-8c65-b572afc2fb43"/>
                                                {this.state.sa140?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa140"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa140}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa140"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F143.jpg?alt=media&token=42d33f07-67d1-4718-b81f-f163c40ece41"/>
                                                {this.state.sa143?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa143"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa143}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa143"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F144.jpg?alt=media&token=1b7457b8-8a1e-4802-913a-0b22e63a35a0"/>
                                                {this.state.sa144?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa144"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa144}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa144"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F147.jpg?alt=media&token=de45732a-9bbb-4677-bddc-b27f8dc57a62"/>
                                                {this.state.sa147?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa147"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa147}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa147"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F150.jpg?alt=media&token=bcb2e87a-d08d-401a-b31a-a0f4d5adfc79"/>
                                                {this.state.sa150?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa150"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa150}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa150"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F151.jpg?alt=media&token=790d8e81-9f43-43e0-a894-29b3f596c7be"/>
                                                {this.state.sa151?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa151"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa151}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa151"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F152.jpg?alt=media&token=d25a4c69-1d22-4975-b4b4-35f4646bb991"/>
                                                {this.state.sa152?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa152"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa152}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa152"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F153.jpg?alt=media&token=25af4d81-cf85-41ab-80c7-02b5510a8900"/>
                                                {this.state.sa153?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa153"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa153}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa153"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F154.jpg?alt=media&token=d04f658e-7b70-46cf-9115-6f84a28d3d4c"/>
                                                {this.state.sa154?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa154"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa154}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa154"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F155.jpg?alt=media&token=7e6b4c55-15d5-4875-ab7a-e9bd17d0a657"/>
                                                {this.state.sa155?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa155"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa155}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa155"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F160.jpg?alt=media&token=2a7a0ba9-cb23-4891-8e5d-ef349644aae6"/>
                                                {this.state.sa160?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa160"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa160}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa160"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F161.jpg?alt=media&token=45ce9566-95bf-4776-b54f-9b3436c60834"/>
                                                {this.state.sa161?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa161"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa161}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa161"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F162.jpg?alt=media&token=f6bb3f32-4de5-4f84-affd-48911746ca2b"/>
                                                {this.state.sa162?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa162"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa162}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa162"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F165.jpg?alt=media&token=1a43bf35-7690-4456-b692-409d75f21c78"/>
                                                {this.state.sa165?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa165"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa165}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa165"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F166.jpg?alt=media&token=851c441a-f3a1-43a4-accf-22c0ddaefafe"/>
                                                {this.state.sa166?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa166"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa166}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa166"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F169.jpg?alt=media&token=e67d1af4-5d8f-4aa9-aaab-2e67516ec4d2"/>
                                                {this.state.sa169?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa169"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa169}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa169"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F171.jpg?alt=media&token=d89547ba-5b90-4804-bda6-a4071bb97ba0"/>
                                                {this.state.sa171?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa171"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa171}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa171"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F172.jpg?alt=media&token=ed629ba7-3c41-44f0-9cfa-fd5006c67b34"/>
                                                {this.state.sa172?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa172"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa172}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa172"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F173.jpg?alt=media&token=729bbd10-c459-404b-93d6-e795835b0356"/>
                                                {this.state.sa173?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa173"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa173}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa173"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F175.jpg?alt=media&token=ad0d74de-00e1-488f-9ff3-e6a65265c64f"/>
                                                {this.state.sa175?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa175"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa175}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa175"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F180.jpg?alt=media&token=9aed4033-57dc-4f7e-9d61-4ae116b6fc2b"/>
                                                {this.state.sa180?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa180"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa180}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa180"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F181.jpg?alt=media&token=fedb892d-227d-4880-8f54-f2f33f3dd7c9"/>
                                                {this.state.sa181?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa181"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa181}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa181"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F182.jpg?alt=media&token=b53225cd-c180-4542-88e4-725796706eec"/>
                                                {this.state.sa182?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa182"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa182}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa182"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F183.jpg?alt=media&token=d93f4574-a169-49dc-a77d-33abe0cc090e"/>
                                                {this.state.sa183?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa183"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa183}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa183"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F184.jpg?alt=media&token=74d048d8-5336-44db-b4f3-75cf7a59fec1"/>
                                                {this.state.sa184?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa184"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa184}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa184"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F185.jpg?alt=media&token=a8a76acc-64b3-4287-a071-b1adaf3a7bb3"/>
                                                {this.state.sa185?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa185"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa185}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa185"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F186.jpg?alt=media&token=8e5087d7-fa86-45a4-ae1d-06f1484bad35"/>
                                                {this.state.sa186?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa186"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa186}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa186"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F187.jpg?alt=media&token=16b9200d-bf0f-476d-b076-ac211f3711af"/>
                                                {this.state.sa187?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa187"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa187}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa187"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F190.jpg?alt=media&token=def9a9dd-ef01-4c49-a63b-1dcdab0c2001"/>
                                                {this.state.sa190?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa190"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa190}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa190"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F191.jpg?alt=media&token=9ca9350a-c4f3-4591-a254-aed4c63923c5"/>
                                                {this.state.sa191?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa191"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa191}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa191"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F192.jpg?alt=media&token=2f9e1eb4-9e59-473f-bb43-b912de391c88"/>
                                                {this.state.sa192?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa192"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa192}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa192"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F193.jpg?alt=media&token=140f6a22-9acf-4ef3-9c05-97191b80966a"/>
                                                {this.state.sa193?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa193"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa193}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa193"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>


                                            
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F194.jpg?alt=media&token=43c8cef7-4f01-4128-b064-31b5cda9e9df"/>
                                                {this.state.sa194?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa194"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa194}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa194"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F195.jpg?alt=media&token=b92902e7-be6e-476c-a825-b6a250aae1f0"/>
                                                {this.state.sa195?<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa195"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.state.sa195}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsFlashingsInput" 
                                                    name="sa195"
                                                    type="text"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <h2 className="orderOptionsTitle">ACCESSORIES:</h2>
                                        <div className="orderOptionsFlashingsContainerSmall">
                                        <FormGroup className="orderOptionsFlashingsContainer"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetal%20drill%20screws.png?alt=media&token=def7c31f-bab7-430a-aac1-c6686b9eb621"/>
                                                {this.state.metalDrillScrews?<CustomInput
                                                    className="orderOptionsAccessoriesInput" 
                                                    name="metalDrillScrews"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.metalDrillScrews}
                                                    onChange={this.handleChange}
                                                    />:<CustomInput
                                                    className="orderOptionsAccessoriesInput" 
                                                    name="metalDrillScrews"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    onChange={this.handleChange}
                                                    />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwoodgrip%20screws.png?alt=media&token=bedb64c8-3ace-4697-8bd6-10e6b6ee4db2"/>
                                                {this.state.woodGripScrews?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.woodGripScrews}
                                                    name="woodGripScrews"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="woodGripScrews"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsynthetic%20high%20temp%20cover.png?alt=media&token=175a4dbb-40b2-43b5-92f2-eb31cb839e7c"/>
                                                {this.state.syntheticHighTempCover?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.syntheticHighTempCover}
                                                    name="syntheticHighTempCover"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="syntheticHighTempCover"
                                                    onChange={this.handleChange} />}
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
                                                {this.state.tubeSealant?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.tubeSealant}
                                                    name="tubeSealant"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="tubeSealant"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbutyl%20tape.png?alt=media&token=24398d7f-af89-4872-82fd-d9286875a3cb"/>
                                                {this.state.butylTape?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.butylTape}
                                                    name="butylTape"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="butylTape"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fplumbing%20boots.png?alt=media&token=1db3c74a-c476-4596-b4b6-0c286a1cc006"/>
                                                {this.state.plumbingBoots?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.plumbingBoots}
                                                    name="plumbingBoots"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="plumbingBoots"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fflex-o-vent.png?alt=media&token=c1e81e0f-c6a2-48fd-84be-6952ba69aadf"/>
                                                {this.state.flexOVent?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.flexOVent}
                                                    name="flexOVent"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="flexOVent"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20outer%20closure.png?alt=media&token=836d6b46-1e94-45a5-aea2-6ce4c69d37a3"/>
                                                {this.state.profileOuterClosure?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.profileOuterClosure}
                                                    name="profileOuterClosure"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="profileOuterClosure"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20inner%20closure.png?alt=media&token=a799aa5a-55a3-41d9-9a47-a4565e06e6c5"/>
                                                {this.state.profileInnerClosure?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.profileInnerClosure}
                                                    name="profileInnerClosure"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="profileInnerClosure"
                                                    onChange={this.handleChange} />}
                                            </FormGroup>
                                            <FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flow%20profile%20ridge%20vent.png?alt=media&token=18d4aaaf-d88f-4cda-96ee-1addef31a649"/>
                                                {this.state.lowProfileRidgeVent?<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    // placeholder="QTY"
                                                    value={this.state.lowProfileRidgeVent}
                                                    name="lowProfileRidgeVent"
                                                    onChange={this.handleChange} />:<CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    name="lowProfileRidgeVent"
                                                    onChange={this.handleChange} />}
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
            </div>):
            <div>
            {/* <ReactToPrint content={() => this.componentRef}>
            <PrintContextConsumer>
                {({ handlePrint }) => (
                <button style={{width: '80%', margin: '10px auto', padding: '10px', fontWeight: 'bold', fontSize: 18, visibility: 'hidden'}} onClick={handlePrint} className="contactButton" >Print Page</button>
                )}
            </PrintContextConsumer>
            </ReactToPrint> */}
            <PDFViewer>
                <Standingseam2Print obj = {this.state} ref={el => (this.componentRef = el)} />
            </PDFViewer>
        </div>}</div>
        )
    }
}

export default Standingseam;