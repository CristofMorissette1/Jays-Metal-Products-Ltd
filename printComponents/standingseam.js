import { Component } from 'react'
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'
import { Image, Page, Text, View, Document, StyleSheet, PDFViewer, ReactPDF } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

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

class Standingseam2Print extends Component{
    constructor(){
        super()
        this.state = {
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
            standing295: '',
            metalDrillScrews: '',
            woodGripScrews: '',
            syntheticHighTempCover: '',
            tubeSealant: '',
            butylTape: '',
            plumbingBoots: '',
            flexOVent: '',
            profileOuterClosure: '',
            profileInnerClosure: '',
            lowProfileRidgeVent: ''
        }
        this.printPage = this.printPage.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    printPage = e => {
        e.preventDefault();
        window.print();
    }
    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, squarefeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, hookdrip1, hookdripsteppitch, gabbleRake1, gabbleRake2, gabbleRake3, sidewall1, sidewall2, endwall1, endwall3, endWall2, transition3, peakcap1, peakcap2, peakcap3, transition1, transition2, hip1, hip2, hip3, ridge1, ridge2, ridge3, ridge4, wvalley1, wvalley2, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295, metalDrillScrews, woodGripScrews, syntheticHighTempCover, tubeSealant, butylTape, plumbingBoots, flexOVent, profileOuterClosure, profileInnerClosure, lowProfileRidgeVent} = this.state;
    
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
            standing295,
            metalDrillScrews,
            woodGripScrews,
            syntheticHighTempCover,
            tubeSealant,
            butylTape,
            plumbingBoots,
            flexOVent,
            profileOuterClosure,
            profileInnerClosure,
            lowProfileRidgeVent
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
            standing295: this.props.obj.standing295,
            metalDrillScrews: this.props.obj.metalDrillScrews,
            woodGripScrews: this.props.obj.woodGripScrews,
            syntheticHighTempCover: this.props.obj.syntheticHighTempCover,
            tubeSealant: this.props.obj.tubeSealant,
            butylTape: this.props.obj.butylTape,
            plumbingBoots: this.props.obj.plumbingBoots,
            flexOVent: this.props.obj.flexOVent,
            profileOuterClosure: this.props.obj.profileOuterClosure,
            profileInnerClosure: this.props.obj.profileInnerClosure,
            lowProfileRidgeVent: this.props.obj.lowProfileRidgeVent
        })
      }
      

    render(){
            return (
            
            // <div className="diamondMainContainer"> 
            /* <p className="orderNum">#__________</p>       */
                /* <div className="productsPage4thContainer">
                            <div className="orderOptionsContent"> */
                            // <PDFViewer>
                                <Document className="orderOptionsContentForm" >
                                    <Page size="A4" style={styles.page} wrap>

                                    <View style={styles.headerV1} fixed>
                                            <View style={styles.orderOptionsTextForm2}>
                                                <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: "16px", marginTop: '10px'}}>
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
                                            <View wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
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
                                            
                                            <View wrap={false} wrap={false} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
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
                                            {/* {this.props.obj.sa101||this.props.obj.sa102||this.props.obj.sa104?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa101?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}> 
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F101.jpg?alt=media&token=64c9587d-e7e3-4531-8473-f19d4890eb5a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa101}</Text>
                                            </View>:null}
                                            {this.props.obj.sa102?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F102.jpg?alt=media&token=3aa8605c-fbb5-45df-a02b-981d6517ea95"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa102}</Text>
                                            </View>:null}
                                            {this.props.obj.sa104?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F104.jpg?alt=media&token=19fe9ad5-91ca-4266-a3c2-f858e4ff84e3"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa104}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa105||this.props.obj.sa106||this.props.obj.sa108?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa105?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F105.jpg?alt=media&token=7be981b4-3a74-4c37-8058-29415440e906"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa105}</Text>
                                            </View>:null}
                                            {this.props.obj.sa106?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F106.jpg?alt=media&token=542cf440-e597-4f00-9f2a-6fb7bfbde114"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa106}</Text>
                                            </View>:null}
                                            {this.props.obj.sa108?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F108.jpg?alt=media&token=cd662a88-879a-43a0-9e80-0d7fc2d4010c"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa108}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa109||this.props.obj.sa112||this.props.obj.sa113?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa109?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F109.jpg?alt=media&token=fb96c910-c1da-4e7d-a055-41af52ec0673"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa109}</Text>
                                            </View>:null}
                                            {this.props.obj.sa112?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F112.jpg?alt=media&token=2e728d82-d930-457a-ab80-a4c897caeca6"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa112}</Text>
                                            </View>:null}
                                            {this.props.obj.sa113?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F113.jpg?alt=media&token=0b3e4158-a8f6-4675-a591-07525a95cb5e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa113}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa114||this.props.obj.sa117||this.props.obj.sa118?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa114?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F114.jpg?alt=media&token=102d6938-7612-4f6c-8ec5-862ccf4c4954"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa114}</Text>
                                            </View>:null}
                                            {this.props.obj.sa117?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F117.jpg?alt=media&token=5fdc68a2-75a5-439f-a651-03851d1172e3"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa117}</Text>
                                            </View>:null}
                                            {this.props.obj.sa118?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F118.jpg?alt=media&token=3ecae168-9c22-4da4-8a8c-aac2c7a1dca6"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa118}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa119||this.props.obj.sa121||this.props.obj.sa121?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa119?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F119.jpg?alt=media&token=9c31cb8f-b95e-43ec-b654-e5cd6ffda59d"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa119}</Text>
                                            </View>:null}
                                            {this.props.obj.sa121?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F121.jpg?alt=media&token=5b59e207-cac5-4ad1-84af-4e0ff81afb0c"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa121}</Text>
                                            </View>:null}
                                            {this.props.obj.sa122?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F122.jpg?alt=media&token=53f535b9-230c-4180-bb64-49a4b04d2e04"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa122}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa123||this.props.obj.sa123||this.props.obj.sa123?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa126?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F123.jpg?alt=media&token=dc6baf56-5bd1-4051-8e08-753db3c492a5"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa126}</Text>
                                            </View>:null}
                                            {this.props.obj.sa127?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F126.jpg?alt=media&token=cdb09e80-828c-41e7-bbad-73a1d96c4873"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa127}</Text>
                                            </View>:null}
                                            {this.props.obj.sa128?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F127.jpg?alt=media&token=ae6040db-1154-441f-81b9-3162a8965739"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa128}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa128||this.props.obj.sa131||this.props.obj.sa132?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa131?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F128.jpg?alt=media&token=e91d01f4-d0a7-412c-8968-76cfdb2953c1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa131}</Text>
                                            </View>:null}
                                            {this.props.obj.sa132?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F131.jpg?alt=media&token=326f742a-9b07-46f7-92ac-d1e2c82ca34f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa132}</Text>
                                            </View>:null}
                                            {this.props.obj.sa133?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F132.jpg?alt=media&token=20d67532-d29d-4635-9760-69bc7fdeaddf"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa133}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa133||this.props.obj.sa134||this.props.obj.sa137?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa134?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F133.jpg?alt=media&token=ba6280ac-6167-43da-a905-3205d43e4d17"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa134}</Text>
                                            </View>:null}
                                            {this.props.obj.sa137?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F134.jpg?alt=media&token=22bda750-963f-43ca-9feb-6d5b772eac19"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa137}</Text>
                                            </View>:null}
                                            {this.props.obj.sa138?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F137.jpg?alt=media&token=328a7468-5ecd-440f-9936-7b022175f48a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa138}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa138||this.props.obj.sa139||this.props.obj.sa140?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa139?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F138.jpg?alt=media&token=80d374c6-4e76-46e2-a058-41e30e246cfa"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa139}</Text>
                                            </View>:null}
                                            {this.props.obj.sa140?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F139.jpg?alt=media&token=fc21e6cd-d137-473f-bbc8-8d393ab1322d"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa140}</Text>
                                            </View>:null}
                                            {this.props.obj.sa143?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F140.jpg?alt=media&token=909da43f-e75f-451d-8c65-b572afc2fb43"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa143}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa143||this.props.obj.sa144||this.props.obj.sa147?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa144?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F143.jpg?alt=media&token=42d33f07-67d1-4718-b81f-f163c40ece41"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa144}</Text>
                                            </View>:null}
                                            {this.props.obj.sa147?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F144.jpg?alt=media&token=1b7457b8-8a1e-4802-913a-0b22e63a35a0"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa147}</Text>
                                            </View>:null}
                                            {this.props.obj.sa150?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F147.jpg?alt=media&token=de45732a-9bbb-4677-bddc-b27f8dc57a62"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa150}</Text>
                                            </View>:null}
                                            {/* </View>:<View style='none'></View>} */}
                                            {/* {this.props.obj.sa150||this.props.obj.s151||this.props.obj.sa152?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa151?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F150.jpg?alt=media&token=bcb2e87a-d08d-401a-b31a-a0f4d5adfc79"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa151}</Text>
                                            </View>:null}
                                            {this.props.obj.sa152?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F151.jpg?alt=media&token=790d8e81-9f43-43e0-a894-29b3f596c7be"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa152}</Text>
                                            </View>:null}
                                            {this.props.obj.sa153?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F152.jpg?alt=media&token=d25a4c69-1d22-4975-b4b4-35f4646bb991"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa153}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa153||this.props.obj.sa154||this.props.obj.sa155?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa154?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F153.jpg?alt=media&token=25af4d81-cf85-41ab-80c7-02b5510a8900"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa154}</Text>
                                            </View>:null}
                                            {this.props.obj.sa155?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F154.jpg?alt=media&token=d04f658e-7b70-46cf-9115-6f84a28d3d4c"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa155}</Text>
                                            </View>:null}
                                            {this.props.obj.sa160?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F155.jpg?alt=media&token=7e6b4c55-15d5-4875-ab7a-e9bd17d0a657"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa160}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa160||this.props.obj.sa161||this.props.obj.sa162?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa161?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F160.jpg?alt=media&token=2a7a0ba9-cb23-4891-8e5d-ef349644aae6"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa161}</Text>
                                            </View>:null}
                                            {this.props.obj.sa162?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F161.jpg?alt=media&token=45ce9566-95bf-4776-b54f-9b3436c60834"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa162}</Text>
                                            </View>:null}
                                            {this.props.obj.sa165?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F162.jpg?alt=media&token=f6bb3f32-4de5-4f84-affd-48911746ca2b"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa165}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa165||this.props.obj.sa166||this.props.obj.sa169?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa166?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F165.jpg?alt=media&token=1a43bf35-7690-4456-b692-409d75f21c78"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa166}</Text>
                                            </View>:null}
                                            {this.props.obj.sa169?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F166.jpg?alt=media&token=851c441a-f3a1-43a4-accf-22c0ddaefafe"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa169}</Text>
                                            </View>:null}
                                            {this.props.obj.sa171?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F169.jpg?alt=media&token=e67d1af4-5d8f-4aa9-aaab-2e67516ec4d2"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa171}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa171||this.props.obj.sa172||this.props.obj.sa173?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa172?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F171.jpg?alt=media&token=d89547ba-5b90-4804-bda6-a4071bb97ba0"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa172}</Text>
                                            </View>:null}
                                            {this.props.obj.sa173?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F172.jpg?alt=media&token=ed629ba7-3c41-44f0-9cfa-fd5006c67b34"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa173}</Text>
                                            </View>:null}
                                            {this.props.obj.sa175?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F173.jpg?alt=media&token=729bbd10-c459-404b-93d6-e795835b0356"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa175}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa175||this.props.obj.sa180||this.props.obj.sa181?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa180?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F175.jpg?alt=media&token=ad0d74de-00e1-488f-9ff3-e6a65265c64f"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa180}</Text>
                                            </View>:null}
                                            {this.props.obj.sa181?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F180.jpg?alt=media&token=9aed4033-57dc-4f7e-9d61-4ae116b6fc2b"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa181}</Text>
                                            </View>:null}
                                            {this.props.obj.sa182?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F181.jpg?alt=media&token=fedb892d-227d-4880-8f54-f2f33f3dd7c9"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa182}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa182||this.props.obj.sa182||this.props.obj.sa184?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa183?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F182.jpg?alt=media&token=b53225cd-c180-4542-88e4-725796706eec"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa183}</Text>
                                            </View>:null}
                                            {this.props.obj.sa184?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F183.jpg?alt=media&token=d93f4574-a169-49dc-a77d-33abe0cc090e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa184}</Text>
                                            </View>:null}
                                            {this.props.obj.sa185?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F184.jpg?alt=media&token=74d048d8-5336-44db-b4f3-75cf7a59fec1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa185}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa185||this.props.obj.sa186||this.props.obj.sa187?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa186?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F185.jpg?alt=media&token=a8a76acc-64b3-4287-a071-b1adaf3a7bb3"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa186}</Text>
                                            </View>:null}
                                            {this.props.obj.sa187?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F186.jpg?alt=media&token=8e5087d7-fa86-45a4-ae1d-06f1484bad35"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa187}</Text>
                                            </View>:null}
                                            {this.props.obj.sa190?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F187.jpg?alt=media&token=16b9200d-bf0f-476d-b076-ac211f3711af"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa190}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa190||this.props.obj.sa191||this.props.obj.sa192?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa191?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F190.jpg?alt=media&token=def9a9dd-ef01-4c49-a63b-1dcdab0c2001"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa191}</Text>
                                            </View>:null}
                                            {this.props.obj.sa192?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F191.jpg?alt=media&token=9ca9350a-c4f3-4591-a254-aed4c63923c5"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa192}</Text>
                                            </View>:null}
                                            {this.props.obj.sa193?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F192.jpg?alt=media&token=2f9e1eb4-9e59-473f-bb43-b912de391c88"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa193}</Text>
                                            </View>:null}
                                            {/* </View>:null} */}
                                            {/* {this.props.obj.sa193||this.props.obj.sa194||this.props.obj.sa195?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}> */}
                                            {this.props.obj.sa193?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "hhttps://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F193.jpg?alt=media&token=140f6a22-9acf-4ef3-9c05-97191b80966a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa193}</Text>
                                            </View>:null}
                                            {this.props.obj.sa194?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F194.jpg?alt=media&token=43c8cef7-4f01-4128-b064-31b5cda9e9df"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa194}</Text>
                                            </View>:null}
                                            {this.props.obj.sa195?<View style={styles.orderOptionsFlashingsContainer3} wrap={false}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/standing%20seam%20100%2F195.jpg?alt=media&token=b92902e7-be6e-476c-a825-b6a250aae1f0"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.props.obj.sa195}</Text>
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

// ReactDOM.render(<App />, document.getElementById('root'));

export default Standingseam2Print;