import { Component } from 'react'
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'
import { Image, Page, Text, View, Document, StyleSheet, PDFViewer, ReactPDF } from '@react-pdf/renderer';
var a = '';

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
        marginBottom: '20px'
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
        border: "4px solid rgb(106, 106, 248)",
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
    },
    orderOptionsFlashingsMainContainer: {
        width: '100%',
        marginBottom: '20px',
        marginTop: "20px",
    },
    orderOptionsFlashingsMainContainera: {
        width: '100%',
        marginBottom: '40px',
        marginTop: "-90px",
        marginLeft: "-200px",
    },
    orderOptionsFlashingsContainerSmall: {
        display: "flex",
        flexWrap: "wrap",
        width: '80%', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        flexDirection: 'row',
        marginTop: "20px",
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
        border: "4px solid rgb(106, 106, 248)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: "6px"
    },
    page: {
      width: '100%',
      height: '100%',
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

class IconpanelsPrint extends Component{
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
        this.handleSumbit = this.handleSumbit.bind(this);
        this.printPage = this.printPage.bind(this);
    }


    printPage = e => {
        e.preventDefault();
        window.print();
    }

    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, squarefeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, sqft, i101, i102, i103, i104, i106, i107, i108, i111, i113, i112, i116, i117, i118, i119, i114, i115, i120, i121, i122, i123, i128, i129, i130, i131, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
    
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
            squarefeet: this.props.obj.squarefeet,
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
            linearfeet10: this.props.obj.linearfeet10,
            squarefeet10: this.props.obj.squarefeet10,
            i101: this.props.obj.i101,
            i102: this.props.obj.i102,
            i103: this.props.obj.i103,
            i104: this.props.obj.i104,
            i106: this.props.obj.i106,
            i107: this.props.obj.i107,
            i108: this.props.obj.i108,
            i111: this.props.obj.i111,
            i113: this.props.obj.i113,
            i112: this.props.obj.i112,
            i116: this.props.obj.i116,
            i117: this.props.obj.i117,
            i118: this.props.obj.i118,
            i119: this.props.obj.i119,
            i114: this.props.obj.i114,
            i115: this.props.obj.i115,
            i120: this.props.obj.i120,
            i121: this.props.obj.i121,
            i122: this.props.obj.i122,
            i123: this.props.obj.i123,
            i128: this.props.obj.i128,
            i129: this.props.obj.i129,
            i130: this.props.obj.i130,
            i131: this.props.obj.i131,
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

                                        <View fixed style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: "flex", justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom: '8px', flexDirection: 'row'}}>
                                            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                                <Text style={{fontWeight: 'bold', fontSize: '8px'}}>CUSTOMER: </Text>
                                                {this.state.customerName?
                                                <Text 
                                                    type="text"
                                                    style={{fontWeight: "bold", fontSize: '14px' }}
                                                    name="customerName" 
                                                    // value=
                                                    >{this.state.customerName}</Text>:
                                                    <Text 
                                                    type="text"
                                                    // style={styles.orderOptionsTextInput21}
                                                    style={{fontWeight: 'bold', fontSize: '14px'}}
                                                    name="customerName" 
                                                    placeholder="Customer Name"                                    
                                                ></Text>}
                                            </View>
                                            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                                <Text style={{fontWeight: "bold", fontSize: '14px' }}>COLOR: </Text>
                                                <Text                                                 
                                                style={{fontWeight: "bold", fontSize: '14px' }}
                                                className="orderOptionsSpecsInput" >{this.props.obj.color}
                                                </Text>
                                            </View>
                                            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                                                <Text style={{fontWeight: "bold", fontSize: '14px' }}>GA: </Text>
                                                <Text                                                 
                                                style={{fontWeight: "bold", fontSize: '14px' }}
                                                className="orderOptionsSpecsInput" >{this.props.obj.ga}
                                                </Text>
                                            </View>
                                            
                                        </View>
                                        <View style={{width: '80%', borderTop: '1px solid black', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto'}} fixed>

                                        </View>

                                        {/* Header */}
                                        <View style={styles.headerV1}>
                                            <View style={styles.orderOptionsTextForm2}>
                                                <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginBottom: "30px", marginTop: '10px'}}>
                                                    <Text style={{fontSize: "24px", fontWeight: 400, color: 'black', textAlign: 'center'}}>Icon panels</Text>
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
                                                    <Text style={{width: '20%', fontWeight: 600, fontSize: 14, textAlign: 'left', color: 'black'}}>Address:</Text>
                                                    {this.props.obj.address?
                                                    <Text 
                                                        type="text"
                                                        style={{
                                                            width: "80%",
                                                            backgroundColor: 'white',
                                                            padding: '2px 4px',
                                                            fontSize: '12px',
                                                            border: '1px solid black',
                                                        }}
                                                        >{this.props.obj.address}</Text>:<Text 
                                                        type="text"
                                                        style={{
                                                            width: "80%",
                                                            backgroundColor: 'white',
                                                            padding: '8px 4px',
                                                            fontSize: '12px',
                                                            border: '1px solid black',
                                                        }}
                                                        placeholder="Customer Address"
                                                    ></Text>}
                                                </View>
                                            </View>
                                        </View>
                                    

                                        {/* below header */}
                                        <View style={{width: '100%'}}> 
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
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
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>QTY</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>Inch</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>mm</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm}</Text> */}
                                                    {/* placeholder={this.state.mm} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>Description</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag}</Text> */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>LFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet}</Text> */}
                                                    {/* placeholder={this.state.linearfeet} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{ backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>SqFt.</Text>
                                                    {/* <Text style={{border: '1px solid black', backgroundColor: 'white', width: '68px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet}</Text> */}
                                                    {/* placeholder={this.state.squarefeet} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet}</Text>
                                                </View>
                                            </View>
                                            
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty2}</Text>
                                                </View>
                                                <View onChange={this.handleChange} className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch2}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm2}</Text>
                                                    {/* placeholder={this.state.mm2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag2}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet2}</Text>
                                                    {/* placeholder={this.state.linearfeet2} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet2}</Text>
                                                    {/* placeholder={this.state.squarefeet2} */}
                                                </View>
                                            </View>
                                            
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm3}</Text>
                                                    {/* placeholder={this.state.mm3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag3}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet3}</Text>
                                                    {/* placeholder={this.state.linearfeet3} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet3}</Text>
                                                    {/* placeholder={this.state.squarefeet3} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm4}</Text>
                                                    {/* placeholder={this.state.mm4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag4}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet4}</Text>
                                                    {/* placeholder={this.state.linearfeet4} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet4}</Text>
                                                    {/* placeholder={this.state.squarefeet4} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm5}</Text>
                                                    {/* placeholder={this.state.mm5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag5}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet5}</Text>
                                                    {/* placeholder={this.state.linearfeet5} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet5}</Text>
                                                    {/* placeholder={this.state.squarefeet5} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm6}</Text>
                                                    {/* placeholder={this.state.mm6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag6}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet6}</Text>
                                                    {/* placeholder={this.state.linearfeet6} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet6}</Text>
                                                    {/* placeholder={this.state.squarefeet6} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm7}</Text>
                                                    {/* placeholder={this.state.mm7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag7}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet7}</Text>
                                                    {/* placeholder={this.state.linearfeet7} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet7}</Text>
                                                    {/* placeholder={this.state.squarefeet7} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm8}</Text>
                                                    {/* placeholder={this.state.mm8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag8}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet8}</Text>
                                                    {/* placeholder={this.state.linearfeet8} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text  style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet8}</Text>
                                                    {/* placeholder={this.state.squarefeet8} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.qty9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.inch9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.mm9}</Text>
                                                    {/* placeholder={this.state.mm9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.tag9}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.linearfeet9}</Text>
                                                    {/* placeholder={this.state.linearfeet9} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}}>{this.props.obj.squarefeet9}</Text>
                                                    {/* placeholder={this.state.squarefeet9} */}
                                                </View>
                                            </View>
                                            <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.qty10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.inch10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.mm10}</Text>
                                                    {/* placeholder={this.state.mm10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.tag10}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.linearfeet10}</Text>
                                                    {/* placeholder={this.state.linearfeet10} */}
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px'}} >{this.props.obj.squarefeet10}</Text>
                                                    {/* placeholder={this.state.squarefeet10} */}
                                                </View>
                                            </View>
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet11}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet11}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet12}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet12}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet13}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet13}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet14}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet14}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet15}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet15}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet16}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet16}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet17}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet17}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet18}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet18}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet19}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet19}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.ten?<View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.qty20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.inch20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.mm20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '2px', paddingBottom: '2px'}} className="orderOptionsSpecsInput">{this.props.obj.tag20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.linearfeet20}</Text>
                                                </View>
                                                <View className="orderOptionsSpecsFG2">
                                                    <Text style={{border: '1px solid black', backgroundColor: 'white', width: '77px', fontSize: 12, height: '16px', paddingLeft: '4px', marginTop: '4px', paddingTop: '4px', paddingBottom: '4px'}} className="orderOptionsSpecsInput" >{this.props.obj.squarefeet20}</Text>
                                                </View>
                                            </View>:<View style={{display: 'none'}}></View>}
                                        </View>


                                        {/* Flashings */}
                                    
                                        {/* <View style={styles.orderOptionsFlashingsMainContainer} wrap={false}> */}
                                            {this.props.obj.i101||this.props.obj.i102||this.props.obj.i103?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i101?<View style={styles.orderOptionsFlashingsContainer3}> 
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F101.jpg?alt=media&token=8bffe047-361f-467d-b54d-79873721fb7b"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i101}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i102?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F102.jpg?alt=media&token=1a1089f9-b2cc-476d-9405-cf79fda0ceee"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i102}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i103?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F103.jpg?alt=media&token=9e17a1c1-a515-49fd-92e3-9c1a5de10a4e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i103}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i104||this.props.obj.i106||this.props.obj.i107?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i104?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F104.jpg?alt=media&token=1621b1c6-2da6-4b81-873c-573ac49527da"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i104}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i106?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F106.jpg?alt=media&token=b8ef318d-25c3-47c8-b904-7fa377656077"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i106}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i107?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F107.jpg?alt=media&token=86f2835b-ce37-46ac-b2c4-6f0c18d8a7cb"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i107}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i108||this.props.obj.i111||this.props.obj.i112?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i108?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F108.jpg?alt=media&token=9f8d26df-edfe-4578-b22d-027c316abf0a"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i108}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i111?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F111.jpg?alt=media&token=f6f40da4-59e1-44fa-a58e-56e1ffb04ac1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i111}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i112?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F112.jpg?alt=media&token=8addf58e-a0a3-4fa1-99ae-b5c827d91d22"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i112}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i113||this.props.obj.i114||this.props.obj.i115?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i113?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F113.jpg?alt=media&token=86b9bc9d-fdc5-43a5-9797-06ff8d54054b"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i113}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i114?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F114.jpg?alt=media&token=6c8b8c8d-38ca-48b1-a325-33d0aec83a7d"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i114}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i115?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F115.jpg?alt=media&token=9252d05c-2720-4416-abaf-4eae552de636"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i115}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i116||this.props.obj.i117||this.props.obj.i118?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i116?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F116.jpg?alt=media&token=1f93d521-2daf-4f39-88da-f41b475f45b1"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i116}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i117?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F117.jpg?alt=media&token=62be0f92-9e90-43e9-8189-abeacd259fa2"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i117}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i118?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F118.jpg?alt=media&token=3dd781c8-5993-484f-83a9-f4f77eac3fa4"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i118}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i119||this.props.obj.i120||this.props.obj.i121?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i119?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F119.jpg?alt=media&token=20914689-0cdd-4203-831c-7d376503deb9"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i119}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i120?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F120.jpg?alt=media&token=8cfd4fe2-a94b-445a-8aa9-0906b9e2147e"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i120}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i121?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F121.jpg?alt=media&token=cecf7570-2e4e-4501-83e3-2eb7f6434602"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i121}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i122||this.props.obj.i123||this.props.obj.i128?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.i122?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F122.jpg?alt=media&token=91e8e0a4-a547-4009-8c48-78f1e95f94c5"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i122}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i123?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F123.jpg?alt=media&token=25fb14b8-6894-46c4-88e6-79eb361dd401"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i123}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i128?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F128.jpg?alt=media&token=8a8eaa5a-2546-48c0-b241-ed18ba350b38"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i128}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i129||this.props.obj.i130||this.props.obj.i131?<View style={styles.orderOptionsFlashingsContainerSmall} wrap={false}>
                                            {this.props.obj.ridge3?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F129.jpg?alt=media&token=09641c07-fe20-42a6-991e-cbf36d5eead2"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i129}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i130?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F130.jpg?alt=media&token=20d182b1-8002-4be7-bf95-4bcf54e30955"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i130}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.i131?<View style={styles.orderOptionsFlashingsContainer3}>
                                                <Image style={styles.img59} cache={false} style={{border: '1px solid black'}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F131.jpg?alt=media&token=e71f40d0-29c7-4c16-8e62-5eaccaa884cd"}}/>
                                                <Text style={styles.orderOptionsFlashingsInput3}>QTY: {this.state.i131}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                         
                                        {/* </View> */}






                                            {/* Accessories */}
                                            <View style={styles.orderOptionsFlashingsMainContainera} break>
                                                <View style={styles.orderOptionsFlashingsContainerSmall} >
                                                    <View  style={styles.flashDiv}>
                                                        <Text style={styles.flash}>ACCESSORIES</Text>
                                                    </View>
                                                </View>
                                            </View>

                                        
                                            {this.props.obj.metalDrillScrews||this.props.obj.woodGripScrews||this.props.obj.syntheticHighTempCover?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}>
                                            {this.props.obj.metalDrillScrews?<View style={styles.orderOptionsFlashingsContainer31}> 
                                                <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetal%20drill%20screws.png?alt=media&token=def7c31f-bab7-430a-aac1-c6686b9eb621"}} />
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.metalDrillScrews}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            { this.props.obj.woodGripScrews?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwoodgrip%20screws.png?alt=media&token=bedb64c8-3ace-4697-8bd6-10e6b6ee4db2"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.woodGripScrews}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.syntheticHighTempCover?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsynthetic%20high%20temp%20cover.png?alt=media&token=175a4dbb-40b2-43b5-92f2-eb31cb839e7c"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.syntheticHighTempCover}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.tubeSealant||this.props.obj.butylTape||this.props.obj.plumbingBoots?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}>
                                            {this.props.obj.tubeSealant?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img62} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftube%20sealant.png?alt=media&token=bf1baf8a-beac-461e-af91-7fa9c12695e6"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.tubeSealant}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.butylTape?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img63} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbutyl%20tape.png?alt=media&token=24398d7f-af89-4872-82fd-d9286875a3cb"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.butylTape}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.plumbingBoots?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img64} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fplumbing%20boots.png?alt=media&token=1db3c74a-c476-4596-b4b6-0c286a1cc006"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.plumbingBoots}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.flexOVent||this.props.obj.profileOuterClosure||this.props.obj.profileInnerClosure?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}>
                                            {this.props.obj.flexOVent?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img65} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fflex-o-vent.png?alt=media&token=c1e81e0f-c6a2-48fd-84be-6952ba69aadf"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.flexOVent}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.profileOuterClosure?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img66} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20outer%20closure.png?alt=media&token=836d6b46-1e94-45a5-aea2-6ce4c69d37a3"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.profileOuterClosure}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.profileInnerClosure?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img67} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fprofile%20inner%20closure.png?alt=media&token=a799aa5a-55a3-41d9-9a47-a4565e06e6c5"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.profileInnerClosure}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}</View>:<View style={{display: 'none'}}></View>}
                                            {this.props.obj.lowProfileRidgeVent?<View style={styles.orderOptionsFlashingsContainerSmall}  wrap={false}>
                                            {this.props.obj.lowProfileRidgeVent?<View style={styles.orderOptionsFlashingsContainer31}>
                                            <Image style={styles.img68} cache={false} style={{border: '1px solid black'}} 
                                                source={{uri: "https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flow%20profile%20ridge%20vent.png?alt=media&token=18d4aaaf-d88f-4cda-96ee-1addef31a649"}} />
                                                
                                                <Text style={styles.orderOptionsFlashingsInput31}>QTY: {this.state.lowProfileRidgeVent}</Text>
                                            </View>:<View style={{display: 'none'}}></View>}
                                            </View>:<View style={{display: 'none'}}></View>}

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

export default IconpanelsPrint;