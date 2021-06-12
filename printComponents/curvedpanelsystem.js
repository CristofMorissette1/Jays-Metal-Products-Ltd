import Head from 'next/head'
import { Component } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import { Image, Page, Text, View, Document, StyleSheet, PDFViewer, ReactPDF } from '@react-pdf/renderer';
import axios from 'axios'

const styles = StyleSheet.create({
    headerF: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '10px'
    },
    headerV1: {
        width: "100%",
        marginBottom: '16px',
        // marginTop: '16px'
    },
    orderOptionsTextInput2:{
        width: "70%",
        backgroundColor: 'white',
        border: '1px solid black',
        fontSize: '12px',
        padding: '2px 4px'
    },
    orderOptionsTextInput21:{
        width: "70%",
        backgroundColor: 'white',
        marginRight: '10px',
        padding: '2px 4px',
fontSize: '12px',
        border: '1px solid black',
    },
    orderOptionsTextFormSmall2:{
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    orderOptionsTextForm2: {
        width: "80%",
        marginLeft: "auto",
        marginRight: 'auto',

    },
    orderOptionsTextFormTitle2: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        fontSize: "200%",
        fontWeight: 400,
        marginTop: "0px",
    },
    orderOptionsFlashingsInput3: {
        position: "absolute",
        marginTop: "87%",
        border: "2px solid rgb(106, 106, 248)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: "6px"
    },
    orderOptionsFlashingsContainer3: {
        width: "33.333%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "180px",
        // border: '1px solid red',
        marginBottom: '0px'
    },
    orderOptionsFlashingsMainContainer: {
        width: '80%',
        // marginBottom: '20px',
        marginTop: "20px",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        // border: '1px solid blue'
    },
    orderOptionsFlashingsMainContainera: {
        width: '100%',
        marginBottom: '10px',
        marginTop: "-120px",
        marginLeft: "-200px",
    },
    orderOptionsFlashingsContainerSmall: {
        display: "flex",
        flexWrap: "wrap",
        // width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        flexDirection: 'row',
        marginTop: "20px",
        // border: '1px solid red'
    },
    flashDiv: {
        marginBottom: '-30px',
        marginTop: '30px'
    },
    flash: {
        fontWeight: "bold",
        fontSize: "20px",
    },
    orderOptionsFlashingsContainer31: {
        width: "33.333%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-20px",
        height: "180px",
    },
    orderOptionsFlashingsInput31: {
        position: "absolute",
        marginTop: "85%",
        border: "2px solid rgb(106, 106, 248)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: "6px"
    },
    page: {
      width: '100%',
      height: '96%',
      flexDirection: 'column',
      flex: 1
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    flashDiv: {
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "-20px",
        marginTop: "50px",
        paddingTop: '50px'
    },
    productDisclaimerFG2: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "6.5%",
        marginBottom: "0%",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: 600,
        padding: "1%"
    },
    
    img59: {
        width: "100%",
        height: "100%",
        border: '1px solid black'
    },
    img62: {
        width: "100%",
        height: "100%",
        border: '4px solid yellow'
    },
    img63: {
        width: "100%",
        height: "100%",
    },
    img64: {
        width: "100%",
        height: "100%",
    },
    img65: {
        width: "100%",
        height: "100%",
    },
    img66: {
        width: "100%",
        height: "100%",
    },
    img67: {
        width: "100%",
        height: "100%",
    },
    img68: {
        width: "100%",
        height: "100%",
    },
    
});

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
            <Document className="orderOptionsContentForm" >
                                    <Page size="A4" style={styles.page} wrap>

                                    <View style={styles.headerV1} fixed>
                                            <View style={styles.orderOptionsTextForm2}>
                                                <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: "16px"}}>
                                                    <Text style={{fontSize: "18px", fontWeight: 400, color: 'black', textAlign: 'center'}}>Standing Seam 150</Text>
                                                    <Text style={{fontWeight: 400, fontSize: "14px", marginTop: '20px', textAlign: 'right', marginRight: '170px'}}>#___________</Text>
                                                </View>
                                                <View style={styles.headerF}>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', textAlign: 'left', fontWeight: 600, fontSize: 14, color: 'black'}}>Name:</Text>
                                                        {this.state.customerName?
                                                        <Text 
                                                            type="text"
                                                            style={styles.orderOptionsTextInput21}
                                                            name="customerName" 
                                                            >{this.state.customerName}</Text>:
                                                            <Text 
                                                            type="text"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                marginRight: '10px',
                                                                padding: '8px 4px',
                                                                fontSize: '12px',
                                                                border: '1px solid black',
                                                            }}
                                                            name="customerName" 
                                                            placeholder="Customer Name"                                    
                                                        ></Text>}
                                                    </View>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>PO:</Text>
                                                        {this.props.obj.po?
                                                        <Text 
                                                            type="text"
                                                            style={styles.orderOptionsTextInput2}
                                                            name="po"
                                                            >{this.props.obj.po}</Text>:<Text 
                                                            type="text"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                border: '1px solid black',
                                                                fontSize: '12px',
                                                                padding: '8px 4px'
                                                            }}
                                                            placeholder="PO"    
                                                        ></Text>}
                                                    </View>
                                                </View>
                                                <View style={styles.headerF}>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>Phone:</Text>
                                                        {this.props.obj.phone?
                                                        <Text 
                                                            type="phone"
                                                            style={styles.orderOptionsTextInput21}
                                                            name="phone"
                                                            >{this.props.obj.phone}</Text>:<Text 
                                                            type="phone"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                marginRight: '10px',
                                                                padding: '8px 4px',
                                                                fontSize: '12px',
                                                                border: '1px solid black',
                                                            }}
                                                            placeholder="Phone"
                                                        ></Text>}
                                                    </View>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>Email:</Text>
                                                        {this.props.obj.email?
                                                        <Text 
                                                            type="email"
                                                            style={styles.orderOptionsTextInput2}
                                                            name="email"
                                                            >{this.props.obj.email}</Text>:<Text 
                                                            type="email"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                border: '1px solid black',
                                                                fontSize: '12px',
                                                                padding: '8px 4px'
                                                            }}
                                                            placeholder="Email Address"
                                                        ></Text>}
                                                    </View>
                                                </View>
                                                <View style={{marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                                                    <Text style={{width: '14.6%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>Address:</Text>
                                                    {this.props.obj.address?
                                                    <Text 
                                                        type="text"
                                                        style={{
                                                            width: "85.4%",
                                                            backgroundColor: 'white',
                                                            padding: '2px 4px',
                                                            fontSize: '12px',
                                                            border: '1px solid black',
                                                        }}
                                                        >{this.props.obj.address}</Text>:<Text 
                                                        type="text"
                                                        style={{
                                                            width: "85.4%",
                                                            backgroundColor: 'white',
                                                            padding: '8px 4px',
                                                            fontSize: '12px',
                                                            border: '1px solid black',
                                                        }}
                                                        placeholder="Customer Address"
                                                    ></Text>}
                                                </View>
                                                <View style={styles.headerF}>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', textAlign: 'left', fontWeight: 600, fontSize: 14, color: 'black'}}>Color:</Text>
                                                        {this.state.customerName?
                                                        <Text 
                                                            type="text"
                                                            style={styles.orderOptionsTextInput21}
                                                            name="customerName" 
                                                            >{this.props.obj.color}</Text>:
                                                            <Text 
                                                            type="text"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                marginRight: '10px',
                                                                padding: '8px 4px',
                                                                fontSize: '12px',
                                                                border: '1px solid black',
                                                            }}
                                                            name="customerName" 
                                                            placeholder="Customer Name"                                    
                                                        ></Text>}
                                                    </View>
                                                    <View style={styles.orderOptionsTextFormSmall2}>
                                                        <Text style={{width: '30%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>GA:</Text>
                                                        {this.props.obj.po?
                                                        <Text 
                                                            type="text"
                                                            style={styles.orderOptionsTextInput2}
                                                            name="po"
                                                            >{this.props.obj.ga}</Text>:<Text 
                                                            type="text"
                                                            style={{
                                                                width: "70%",
                                                                backgroundColor: 'white',
                                                                border: '1px solid black',
                                                                fontSize: '12px',
                                                                padding: '8px 4px'
                                                            }}
                                                            placeholder="PO"    
                                                        ></Text>}
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    

                                        {/* below header */}
                                        <View style={{width: '100%'}}> 
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View>
                                                    <Text style={{fontSize: 12}}>GA</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '2px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput" >{this.props.obj.ga}
                                                        {/* <option>-</option>
                                                        <option>29</option>
                                                        <option>26</option>
                                                        <option>24</option>
                                                        <option>22</option> */}
                                                    </Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Color</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '2px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput" >{this.props.obj.color}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Film</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '2px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput" >{this.props.obj.protectivefilm}
                                                        {/* <option>-</option>
                                                        <option>Yes</option>
                                                        <option>No</option> */}
                                                    </Text>
                                                    <Text style={{color: 'grey', fontSize: '5',marginBottom: '-5px'}} className="protectiveFilmDisclaimer">10cents extra per sq/ft</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Crating</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '2px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput" >{this.props.obj.specialcrating}
                                                        {/* <option>-</option>
                                                        <option>Yes</option>
                                                        <option>No</option> */}
                                                    </Text>
                                                    <Text style={{color: 'grey', fontSize: '5',marginBottom: '-5px'}} className="protectiveFilmDisclaimer">At extra cost</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Finish</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '2px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput"  >{this.props.obj.finish}
                                                        {/* <option>-</option>
                                                        <option>12</option>
                                                        <option>16</option>
                                                        <option>20</option> */}
                                                    </Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Total LFt.</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.totallinearfeet}</Text>
                                                    {/* this.state.totallinearfeet */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{fontSize: 12}}>Total SqFt.</Text>
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '66px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput" >{this.props.obj.totalsquarefeet}</Text>
                                                    {/* placeholder={this.state.totalsquarefeet} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '32px', fontSize: 12, height: '16px', paddingLeft: '2px', marginTop: '4px', paddingTop: '2px'}}>QTY</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>Inch</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '32px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>mm</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm}</Text> */}
                                                    {/* placeholder={this.state.mm} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '108px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>Description</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '2px', marginTop: '4px', paddingTop: '2px'}}>LFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet}</Text> */}
                                                    {/* placeholder={this.state.linearfeet} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>SqFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet}</Text> */}
                                                    {/* placeholder={this.state.squarefeet} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet}</Text>
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty2}</Text>
                                                </View>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch2}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm2}</Text>
                                                    {/* placeholder={this.state.mm2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag2}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet2}</Text>
                                                    {/* placeholder={this.state.linearfeet2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet2}</Text>
                                                    {/* placeholder={this.state.squarefeet2} */}
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm3}</Text>
                                                    {/* placeholder={this.state.mm3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet3}</Text>
                                                    {/* placeholder={this.state.linearfeet3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet3}</Text>
                                                    {/* placeholder={this.state.squarefeet3} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm4}</Text>
                                                    {/* placeholder={this.state.mm4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet4}</Text>
                                                    {/* placeholder={this.state.linearfeet4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet4}</Text>
                                                    {/* placeholder={this.state.squarefeet4} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm5}</Text>
                                                    {/* placeholder={this.state.mm5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet5}</Text>
                                                    {/* placeholder={this.state.linearfeet5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet5}</Text>
                                                    {/* placeholder={this.state.squarefeet5} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm6}</Text>
                                                    {/* placeholder={this.state.mm6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet6}</Text>
                                                    {/* placeholder={this.state.linearfeet6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet6}</Text>
                                                    {/* placeholder={this.state.squarefeet6} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm7}</Text>
                                                    {/* placeholder={this.state.mm7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet7}</Text>
                                                    {/* placeholder={this.state.linearfeet7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet7}</Text>
                                                    {/* placeholder={this.state.squarefeet7} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm8}</Text>
                                                    {/* placeholder={this.state.mm8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet8}</Text>
                                                    {/* placeholder={this.state.linearfeet8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet8}</Text>
                                                    {/* placeholder={this.state.squarefeet8} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm9}</Text>
                                                    {/* placeholder={this.state.mm9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet9}</Text>
                                                    {/* placeholder={this.state.linearfeet9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet9}</Text>
                                                    {/* placeholder={this.state.squarefeet9} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.inch10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.mm10}</Text>
                                                    {/* placeholder={this.state.mm10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.tag10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}} >{this.props.obj.linearfeet10}</Text>
                                                    {/* placeholder={this.state.linearfeet10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}} >{this.props.obj.squarefeet10}</Text>
                                                    {/* placeholder={this.state.squarefeet10} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet11}</Text>
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty12}</Text>
                                                </View>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm12}</Text>
                                                    {/* placeholder={this.state.mm2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet12}</Text>
                                                    {/* placeholder={this.state.linearfeet2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet12}</Text>
                                                    {/* placeholder={this.state.squarefeet2} */}
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm13}</Text>
                                                    {/* placeholder={this.state.mm3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet13}</Text>
                                                    {/* placeholder={this.state.linearfeet3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet13}</Text>
                                                    {/* placeholder={this.state.squarefeet3} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm14}</Text>
                                                    {/* placeholder={this.state.mm4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet14}</Text>
                                                    {/* placeholder={this.state.linearfeet4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet14}</Text>
                                                    {/* placeholder={this.state.squarefeet4} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm15}</Text>
                                                    {/* placeholder={this.state.mm5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet15}</Text>
                                                    {/* placeholder={this.state.linearfeet5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet15}</Text>
                                                    {/* placeholder={this.state.squarefeet5} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm16}</Text>
                                                    {/* placeholder={this.state.mm6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet16}</Text>
                                                    {/* placeholder={this.state.linearfeet6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet16}</Text>
                                                    {/* placeholder={this.state.squarefeet6} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm17}</Text>
                                                    {/* placeholder={this.state.mm7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet17}</Text>
                                                    {/* placeholder={this.state.linearfeet7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet17}</Text>
                                                    {/* placeholder={this.state.squarefeet7} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm18}</Text>
                                                    {/* placeholder={this.state.mm8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet18}</Text>
                                                    {/* placeholder={this.state.linearfeet8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet18}</Text>
                                                    {/* placeholder={this.state.squarefeet8} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm19}</Text>
                                                    {/* placeholder={this.state.mm9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet19}</Text>
                                                    {/* placeholder={this.state.linearfeet9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet19}</Text>
                                                    {/* placeholder={this.state.squarefeet9} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.inch20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.mm20}</Text>
                                                    {/* placeholder={this.state.mm10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.tag20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}} >{this.props.obj.linearfeet20}</Text>
                                                    {/* placeholder={this.state.linearfeet10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}} >{this.props.obj.squarefeet20}</Text>
                                                    {/* placeholder={this.state.squarefeet10} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty21}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch21}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm21}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag21}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet21}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px',paddingTop:'1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet21}</Text>
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty22}</Text>
                                                </View>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch22}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm22}</Text>
                                                    {/* placeholder={this.state.mm2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag22}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet22}</Text>
                                                    {/* placeholder={this.state.linearfeet2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet22}</Text>
                                                    {/* placeholder={this.state.squarefeet2} */}
                                                </View>
                                            </View>
                                            
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty23}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch23}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm23}</Text>
                                                    {/* placeholder={this.state.mm3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag23}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet23}</Text>
                                                    {/* placeholder={this.state.linearfeet3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet23}</Text>
                                                    {/* placeholder={this.state.squarefeet3} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty24}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch24}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm24}</Text>
                                                    {/* placeholder={this.state.mm4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag24}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet24}</Text>
                                                    {/* placeholder={this.state.linearfeet4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet24}</Text>
                                                    {/* placeholder={this.state.squarefeet4} */}
                                                </View>
                                            </View>
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty25}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch25}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm25}</Text>
                                                    {/* placeholder={this.state.mm5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag25}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.linearfeet25}</Text>
                                                    {/* placeholder={this.state.linearfeet5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px'}}>{this.props.obj.squarefeet25}</Text>
                                                    {/* placeholder={this.state.squarefeet5} */}
                                                </View>
                                            </View>
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty26}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch26}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm26}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag26}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet26}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet26}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty27}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch27}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm27}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag27}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet27}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet27}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty28}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch28}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm28}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag28}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet28}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet28}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty29}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch29}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm29}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag29}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet29}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet29}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '32px', fontSize: 12, height: '16px', paddingLeft: '2px', marginTop: '4px', paddingTop: '2px'}}>QTY</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>Inch</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '32px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>mm</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm}</Text> */}
                                                    {/* placeholder={this.state.mm} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '108px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>Description</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '2px', marginTop: '4px', paddingTop: '2px'}}>LFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet}</Text> */}
                                                    {/* placeholder={this.state.linearfeet} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '0px', marginTop: '4px', paddingTop: '2px'}}>SqFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet}</Text> */}
                                                    {/* placeholder={this.state.squarefeet} */}
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty30}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch30}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm30}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag30}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet30}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet30}</Text>
                                                </View>
                                            </View>:null}
                                            
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty31}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch31}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm31}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag31}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet31}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet31}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty32}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch32}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm32}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag32}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet32}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet32}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty33}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch33}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm33}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag33}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet33}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet33}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty34}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch34}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm34}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag34}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet34}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet34}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty35}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch35}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm35}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag35}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet35}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet35}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty36}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch36}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm36}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag36}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet36}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet36}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty37}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch37}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm37}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag37}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet37}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet37}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty38}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch38}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm38}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag38}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet38}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet38}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty39}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch39}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm39}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag39}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet39}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet39}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty40}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch40}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm40}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag40}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet40}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet40}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty41}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch41}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm41}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag41}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet41}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet41}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty42}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch42}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm42}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag42}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet42}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet42}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty43}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch43}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm43}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag43}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet43}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet43}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty44}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch44}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm44}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag44}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet44}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet44}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty45}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch45}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm45}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag45}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet45}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet45}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty46}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch46}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm46}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag46}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet46}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet46}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty47}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch47}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm47}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag47}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet47}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet47}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty48}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch48}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm48}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag48}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet48}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet48}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty49}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch49}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm49}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag49}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet49}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet49}</Text>
                                                </View>
                                            </View>:null}
                                            {this.props.obj.ten?<View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty50}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch50}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '47px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm50}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '127px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag50}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet50}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '1px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet50}</Text>
                                                </View>
                                            </View>:null}
                                        </View>


                                        {/* Flashings */}
                                    
                                        <View style={styles.orderOptionsFlashingsMainContainer} wrap={false}>
                                            {/* {this.props.obj.hookdrip1||this.props.obj.hookdripsteppitch||this.props.obj.gabbleRake1?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.hookdrip1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}> 
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHook%20Drip.jpg?alt=media&token=128c0549-17d9-45a3-b2a7-bc365f5884de"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.hookdrip1}</Text>
                                            </View>:null}
                                            {this.props.obj.hookdripsteppitch?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHook%20Drip%20for%20Step%20Pitch.jpg?alt=media&token=f65e7428-d232-44d5-a98c-575772c14c33"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.hookdripsteppitch}</Text>
                                            </View>:null}
                                            {this.props.obj.gabbleRake1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake%201.jpg?alt=media&token=2168f699-830a-44fd-9436-b723263b012f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.gabbleRake1}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.gabbleRake2||this.props.obj.sidewall1||this.props.obj.gabbleRake3?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.gabbleRake2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake%202.jpg?alt=media&token=bb75ffd9-207c-47f4-bd34-9da4b7e2c639"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.gabbleRake2}</Text>
                                            </View>:null}
                                            {this.props.obj.gabbleRake3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FGable%20Rake3.jpg?alt=media&token=136150c3-5ebe-478d-9047-f3c252b61610"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.gabbleRake3}</Text>
                                            </View>:null}
                                            {this.props.obj.sidewall1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSide%20Wall1.jpg?alt=media&token=976350de-e6df-448e-ac75-c01286d7a46f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.sidewall1}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sidewall2||this.props.obj.endwall1||this.props.obj.endWall2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sidewall2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSide%20Wall2.jpg?alt=media&token=738b3bd2-35cb-4d21-89c4-d0abc76d1095"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.sidewall2}</Text>
                                            </View>:null}
                                            {this.props.obj.endwall1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall1.jpg?alt=media&token=5b64a623-4628-41df-b181-c79a38337da2"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.endwall1}</Text>
                                            </View>:null}
                                            {this.props.obj.endWall2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall2.jpg?alt=media&token=7f97894b-5d52-40e4-b7e6-618c9b6c936f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.endWall2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.endwall3||this.props.obj.transition1||this.props.obj.transition2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.endwall3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FEnd%20Wall3.jpg?alt=media&token=26ec8677-267b-4db0-8f3a-1698501391be"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.endwall3}</Text>
                                            </View>:null}
                                            {this.props.obj.transition1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition1.jpg?alt=media&token=34056558-c020-4562-892c-fd66e759def0"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.transition1}</Text>
                                            </View>:null}
                                            {this.props.obj.transition2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition2.jpg?alt=media&token=a5e7befb-9a90-415a-81bc-c5fdb15c2242"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.transition2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.transition3||this.props.obj.peakcap1||this.props.obj.peakcap2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.transition3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FTransition3.jpg?alt=media&token=966d4436-fb81-491d-ab8b-f30b976224f8"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.transition3}</Text>
                                            </View>:null}
                                            {this.props.obj.peakcap1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap1.jpg?alt=media&token=c14face5-939d-4285-ba3e-50bc28c90575"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.peakcap1}</Text>
                                            </View>:null}
                                            {this.props.obj.peakcap2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap2.jpg?alt=media&token=adec41f4-5187-465c-81ee-63d11bb3289e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.peakcap2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.peakcap3||this.props.obj.hip1||this.props.obj.hip3?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.peakcap3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FPeak%20Cap3.jpg?alt=media&token=79a3bc42-e526-4153-9c33-178d3f9c7739"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.peakcap3}</Text>
                                            </View>:null}
                                            {this.props.obj.hip1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FHIP1.jpg?alt=media&token=170717c2-e8b9-4217-a7af-aaac85fd64dd"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.hip1}</Text>
                                            </View>:null}
                                            {this.props.obj.hip2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fhip2.jpg?alt=media&token=74c1af7f-f804-4478-a3e3-eb9669f76828"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.hip2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.hip3||this.props.obj.ridge1||this.props.obj.ridge2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.hip3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fhip3.jpg?alt=media&token=d50c0ad5-953b-44e0-ba35-b003326b2952"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.hip3}</Text>
                                            </View>:null}
                                            {this.props.obj.ridge1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge1.jpg?alt=media&token=981f9517-2c82-40a9-beb7-cf69ba5bc4ec"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.ridge1}</Text>
                                            </View>:null}
                                            {this.props.obj.ridge2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge2.jpg?alt=media&token=42040d63-9ae0-439b-8d51-9f0095cc6c33"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.ridge2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.ridge3||this.props.obj.ridge4||this.props.obj.wvalley1?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.ridge3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FRidge3.jpg?alt=media&token=c2d35282-ed62-4b16-b814-3e399d172c13"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.ridge3}</Text>
                                            </View>:null}
                                            {this.props.obj.ridge4?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fridge4.jpg?alt=media&token=fd08e06e-d95b-4af2-8c48-77249f122131"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.ridge4}</Text>
                                            </View>:null}
                                            {this.props.obj.wvalley1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fw%20valley1.jpg?alt=media&token=8c8d4a97-bc5d-49fc-87db-e932a50d4840"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.wvalley1}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.wvalley2||this.props.obj.vvalley1||this.props.obj.snowstop1?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.wvalley2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fw%20valley%202.jpg?alt=media&token=5d48576e-9425-46b3-9034-9340d8e1a3d9"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.wvalley2}</Text>
                                            </View>:null}
                                            {this.props.obj.vvalley1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fv%20valley1.jpg?alt=media&token=6119c876-4cf3-4bb5-bde6-6cec23327350"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.vvalley1}</Text>
                                            </View>:null}
                                            {this.props.obj.snowstop1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FSnow%20Stop1.jpg?alt=media&token=2facc5b6-33fc-4478-a8c4-38118003f67a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.snowstop1}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.cleat||this.props.obj.junderbarrel||this.props.obj.zbaroverbarrel?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.cleat?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FCleat.jpg?alt=media&token=906047c9-a6c6-4da3-847a-dfc3c431f989"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.cleat}</Text>
                                            </View>:null}
                                            {this.props.obj.junderbarrel?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2FJ%20-%20Under%20panel.jpg?alt=media&token=ce96a89a-53c9-48e8-baa0-e34700ee517d"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.junderbarrel}</Text>
                                            </View>:null}
                                            {this.props.obj.zbaroverbarrel?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fz%20bar%20-%20over%20panel.jpg?alt=media&token=77f0411b-b731-484b-978d-205f25583889"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.zbaroverbarrel}</Text>
                                            </View>:null}
                                            {/* </View>:<View style='none'></View>} */}
                                            {/* {this.props.obj.perforatedjunderbarrel||this.props.obj.perforatedzbaroverbarrel||this.props.obj.backpan5?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.perforatedjunderbarrel?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fperforated%20j%20under%20panel.jpg?alt=media&token=1054ddc7-a74b-463b-a798-ad667fab8587"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.perforatedjunderbarrel}</Text>
                                            </View>:null}
                                            {this.props.obj.perforatedzbaroverbarrel?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fperforated%20z%20bar%20over%20panel.jpg?alt=media&token=ebf74b6d-62e8-431f-bf19-5be893850b0e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.perforatedzbaroverbarrel}</Text>
                                            </View>:null}
                                            {this.props.obj.backpan5?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fback%20pan%205'.jpg?alt=media&token=473c5f91-c50a-4cc1-b09d-b05eeec907bb"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.backpan5}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.backpan10||this.props.obj.base1||this.props.obj.base2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.backpan10?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fback%20pan%2010'.jpg?alt=media&token=e4ee0ccb-3c4f-4171-9dd0-85affbbb6983"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.backpan10}</Text>
                                            </View>:null}
                                            {this.props.obj.base1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase1.jpg?alt=media&token=7380e3f3-febe-4850-b44c-3487c570d593"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.base1}</Text>
                                            </View>:null}
                                            {this.props.obj.base2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase2.jpg?alt=media&token=799df40c-cb74-4f4c-9be0-43f771c44adb"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.base2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.base3||this.props.obj.windowheader||this.props.obj.windowreverse?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.base3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fbase3.jpg?alt=media&token=97107a41-d31b-4ef8-91c0-ce95afac08d9"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.base3}</Text>
                                            </View>:null}
                                            {this.props.obj.windowheader?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwindow%20header.jpg?alt=media&token=e129e120-0493-4b39-bcc6-6f43fd743714"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.windowheader}</Text>
                                            </View>:null}
                                            {this.props.obj.windowreverse?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwindow%20reverse.jpg?alt=media&token=46cde2e8-b918-415b-aef6-92ea65c45988"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.windowreverse}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.walltransition||this.props.obj.jtrim1||this.props.obj.jtrim2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.walltransition?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fwall%20transition.jpg?alt=media&token=8d8a0c06-26ae-4882-89db-ae0dea8dd7e9"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.walltransition}</Text>
                                            </View>:null}
                                            {this.props.obj.jtrim1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fj%20trim1.jpg?alt=media&token=44dbbede-3e6d-4e34-a0de-ae21918f4172"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.jtrim1}</Text>
                                            </View>:null}
                                            {this.props.obj.jtrim2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Fj%20trim2.jpg?alt=media&token=0aae4a79-370e-45b2-96e6-8ce6e18d2a92"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.jtrim2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.jtrim3||this.props.obj.transition||this.props.obj.outsidecorner1?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.jtrim3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20jtrim3.jpg?alt=media&token=756efa31-2396-4d91-97d2-4be22e4f8bcd"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.jtrim3}</Text>
                                            </View>:null}
                                            {this.props.obj.transition?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Ftransition.jpg?alt=media&token=42c3faae-0e29-4d10-9bfd-63bbd842ea9f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.transition}</Text>
                                            </View>:null}
                                            {this.props.obj.outsidecorner1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutside%20corner1.jpg?alt=media&token=02b739c0-bbf2-49bc-9b7d-bb223cbf2b26"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.outsidecorner1}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.insidecorner1||this.props.obj.outsidecorner2||this.props.obj.insidecorner2?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.insidecorner1?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner1.jpg?alt=media&token=882c02f5-ea61-4ca3-beb3-745e1043599d"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.insidecorner1}</Text>
                                            </View>:null}
                                            {this.props.obj.outsidecorner2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutisde%20corner2.jpg?alt=media&token=151ca8a2-a7d7-4f05-87cc-d0f523996f3f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.outsidecorner2}</Text>
                                            </View>:null}
                                            {this.props.obj.insidecorner2?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner%202.jpg?alt=media&token=43d76f94-970c-4389-a0fe-3acf2b433ea3"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.insidecorner2}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.outsidecorner3||this.props.obj.insidecorner3||this.props.obj.outsidecorner4?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.outsidecorner3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Foutside%20corner3.jpg?alt=media&token=d93d7683-5b29-4ac8-a19b-3ba3ab2f7315"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.outsidecorner3}</Text>
                                            </View>:null}
                                            {this.props.obj.insidecorner3?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2Finside%20corner%203.jpg?alt=media&token=f1794e40-01aa-4b20-bda9-bfbda9613cf1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.insidecorner3}</Text>
                                            </View>:null}
                                            {this.props.obj.outsidecorner4?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20outside%20corner%204.jpg?alt=media&token=0f7b3af5-4dfe-4aa2-89b4-ba3e7dd7372c"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.outsidecorner4}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.insidecorner4||this.props.obj.standing290||this.props.obj.standing291?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.insidecorner4?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F2%20piece%20inside%20corner%204.jpg?alt=media&token=51b3c95b-eb40-4842-8fc6-1e980c084437"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.insidecorner4}</Text>
                                            </View>:null}
                                            {this.props.obj.standing290?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F%23290.jpg?alt=media&token=6c68de20-0c63-4945-889e-e23a542e79f1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing290}</Text>
                                            </View>:null}
                                            {this.props.obj.standing291?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F%23291.jpg?alt=media&token=1cf9db98-49c0-428e-939e-c7e6580b254c"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing291}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.standing292||this.props.obj.standing293||this.props.obj.standing294?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.standing292?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F292.jpg?alt=media&token=3ed2147e-208e-44fc-84d9-f86b405f2c15"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing292}</Text>
                                            </View>:null}
                                            {this.props.obj.standing293?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F293.jpg?alt=media&token=620e55ed-13f2-4a99-9fae-762cd5fcba37"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing293}</Text>
                                            </View>:null}
                                            {this.props.obj.standing294?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F294.jpg?alt=media&token=111aa019-7325-40c0-bf5b-879d8e0b31ab"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing294}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.standing295?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.standing295?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/Standing%20Seam%20150%2F295.jpg?alt=media&token=013a0246-9ad8-49e1-b8f5-a353e8f2f05a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.standing295}</Text>
                                            </View>:null}
                                        {/* </View>:null} */}
                                        </View>






                                            {/* Accessories */}
                                            {/* <View style={styles.orderOptionsFlashingsMainContainera} break>
                                                <View style={styles.orderOptionsFlashingsContainerSmall} >
                                                    <View  style={styles.flashDiv}>
                                                        <Text style={styles.flash}>ACCESSORIES</Text>
                                                    </View>
                                                </View>
                                            </View> */}

                                            <View style={styles.orderOptionsFlashingsMainContainer}>
                                            {/* {this.props.obj.metalDrillScrews||this.props.obj.woodGripScrews||this.props.obj.syntheticHighTempCover?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}> */}
                                            {this.props.obj.metalDrillScrews?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}> 
                                                <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetal%20drill%20screws.png?alt=media&token=def7c31f-bab7-430a-aac1-c6686b9eb621"}} />
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.metalDrillScrews}</Text>
                                            </View>:null}
                                            { this.props.obj.woodGripScrews?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwoodgrip%20screws.png?alt=media&token=bedb64c8-3ace-4697-8bd6-10e6b6ee4db2"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.woodGripScrews}</Text>
                                            </View>:null}
                                            {this.props.obj.syntheticHighTempCover?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsynthetic%20high%20temp%20cover.png?alt=media&token=175a4dbb-40b2-43b5-92f2-eb31cb839e7c"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.syntheticHighTempCover}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.tubeSealant||this.props.obj.butylTape||this.props.obj.plumbingBoots?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}> */}
                                            {this.props.obj.tubeSealant?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftube%20sealant.png?alt=media&token=bf1baf8a-beac-461e-af91-7fa9c12695e6"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.tubeSealant}</Text>
                                            </View>:null}
                                            {this.props.obj.butylTape?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img63} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbutyl%20tape.png?alt=media&token=24398d7f-af89-4872-82fd-d9286875a3cb"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.butylTape}</Text>
                                            </View>:null}
                                            {this.props.obj.plumbingBoots?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img64} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fplumbing%20boots.png?alt=media&token=1db3c74a-c476-4596-b4b6-0c286a1cc006"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.plumbingBoots}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.flexOVent||this.props.obj.profileOuterClosure||this.props.obj.profileInnerClosure?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}> */}
                                            {this.props.obj.flexOVent?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img65} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fflex-o-vent.png?alt=media&token=c1e81e0f-c6a2-48fd-84be-6952ba69aadf"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.flexOVent}</Text>
                                            </View>:null}
                                            {this.props.obj.profileOuterClosure?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img66} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20outer%20closure.png?alt=media&token=836d6b46-1e94-45a5-aea2-6ce4c69d37a3"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.profileOuterClosure}</Text>
                                            </View>:null}
                                            {this.props.obj.profileInnerClosure?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img67} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20inner%20closure.png?alt=media&token=a799aa5a-55a3-41d9-9a47-a4565e06e6c5"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.profileInnerClosure}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.lowProfileRidgeVent?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}> */}
                                            {this.props.obj.lowProfileRidgeVent?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                            <Image style={styles.img68} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flow%20profile%20ridge%20vent.png?alt=media&token=18d4aaaf-d88f-4cda-96ee-1addef31a649"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.lowProfileRidgeVent}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                        </View>
                                        {/* Footer */}
                                        <View style={styles.productDisclaimerFG2} break>
                                            <View>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>Please note by placing an order with Jay’s Metal Products Ltd. you (THE CUSTOMER) are agreeing to the following terms and conditions:</Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Jay’s Metal Products Ltd. recommends that prior to the installation of panels, the protective film is removed from the panel to prevent any accidents.</Text><Text></Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;ALL orders are custom therefore are considered final sale.</Text><Text></Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Please refer to our delivery page for partnered delivery services.</Text><Text></Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;If special crating is required, it may be subject to additional costs.</Text><Text></Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Customers are responsible for ensuring that products are deemed acceptable to their standards before removing the product from the facility. Upon removal from Jay’s Metal Products facility, damages incurred to the product are not covered by Jay’s Metal Products Ltd.</Text><Text></Text>
                                                <Text style={{fontWeight: 300, fontSize: "12px"}}>&nbsp;&nbsp;&nbsp;&nbsp;Jay’s Metal Products Ltd. is not responsible for defects to the product during installation.</Text>
                                            </View>
                                            <Text style={{fontWeight: 300, fontSize: "12px", marginTop: '20px'}}>_____________________</Text>
                                            <Text style={{fontWeight: 300, fontSize: "12px"}}>Customer Signature</Text>
                                        </View>
                                    
                                    </Page>
                                </Document>
        )
    }
}

export default CurvedPanelSystemPrint;