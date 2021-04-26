import { Component } from 'react'
import { Form, FormGroup, Input, Button, Label, CustomInput } from 'reactstrap'
import axios from 'axios'
var a = '';

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
        this.handleSumbit = this.handleSumbit.bind(this);
        this.printPage = this.printPage.bind(this);
    }


    printPage = e => {
        e.preventDefault();
        window.print();
    }

    
      handleSumbit(e) {
        e.preventDefault();
    
        const { customerName, productname, phone, po, email, address, ga, color, protectivefilm, finish, totallinearfeet, totalsquarefeet, qty, inch, mm, tag, specialcrating, linearfeet, qty2, inch2, mm2, tag2, linearfeet2, squarefeet2, qty3, inch3, mm3, tag3, linearfeet3, squarefeet3, qty4, inch4, mm4, tag4, linearfeet4, squarefeet4, qty5, inch5, mm5, tag5, linearfeet5, squarefeet5, qty6, inch6, mm6, tag6, linearfeet6, squarefeet6, qty7, inch7, mm7, tag7, linearfeet7, squarefeet7, qty8, inch8, mm8, tag8, linearfeet8, squarefeet8, qty9, inch9, mm9, tag9, linearfeet9, squarefeet9, qty10, inch10, mm10, tag10, linearfeet10, squarefeet10, sqft, i101, i102, i103, i104, i106, i107, i108, i111, i113, i112, i116, i117, i118, i119, i114, i115, i120, i121, i122, i123, i128, i129, i130, i131, vvalley1, snowstop1, cleat, junderbarrel, zbaroverbarrel, perforatedjoverbarrel, perforatedzbaroverbarrel, backpan5, backpan10, base1, base2, base3, windowheader, windowreverse, walltransition, jtrim1, jtrim2, jtrim3, transition, outsidecorner1, insidecorner1, outsidecorner2, insidecorner2, outsidecorner3, insidecorner3, outsidecorner4, insidecorner4, standing290, standing291, standing292, standing293, standing294, standing295} = this.state;
    
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
        console.log(form);
        e.target.reset();
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
            i121: this.props.obj.hip2,
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
            <div className="diamondMainContainer">
                <div className="productsPage4thContainer">
                            <div className="orderOptionsContent">
                                <Form className="orderOptionsContentForm" onSubmit={this.handleSumbit}>
                                    <div className="orderOptionsTextForm">
                                        <h2 className="orderOptionsTextFormTitle">Icon Panels</h2>
                                        <FormGroup className="orderOptionsTextFormSmall">
                                            {this.props.obj.customerName?
                                            <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="customerName" 
                                                // placeholder="Customer Name"
                                                // onChange={this.handleChange}
                                                // required 
                                                value={this.props.obj.customerName}
                                                />:
                                                <Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="customerName" 
                                                placeholder="Customer Name"
                                                // onChange={this.handleChange}
                                                // required 
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
                                                // required 
                                                />:
                                            <Input 
                                                type="phone"
                                                className="orderOptionsTextInput"
                                                name="phone"
                                                placeholder="Phone Number"
                                                // value={this.props.obj.phone}
                                                // onChange={this.handleChange} 
                                                // required 
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
                                                // required 
                                                value={this.props.obj.po}
                                                />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                // name="po"
                                                placeholder="PO"
                                                // onChange={this.handleChange}
                                                // required 
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
                                                // required 
                                                value={this.props.obj.email}
                                                />:<Input 
                                                type="email"
                                                className="orderOptionsTextInput"
                                                // name="email"
                                                placeholder="Email Address"
                                                // onChange={this.handleChange}
                                                // required 
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
                                                // required 
                                                value={this.props.obj.productname}
                                                />:<Input 
                                                type="text"
                                                className="orderOptionsTextInput"
                                                name="productname"
                                                placeholder="Product Name"
                                                // onChange={this.handleChange} 
                                                // required 
                                                // value={this.props.obj.productName}
                                                />}
                                        </FormGroup>
                                    </div>
                                    <div className="orderOptionsSpecsForm">
                                        <div className="orderOptionsSpecsFormTitle">
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>GA</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.ga} name="ga" onChange={this.handleChange} required>
                                                    <option>-</option>
                                                    <option>29</option>
                                                    <option>26</option>
                                                    <option>24</option>
                                                    <option>22</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Color</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.color} name="color" onChange={this.handleChange} required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total Linear Feet</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.totallinearfeet} name="totallinearfeet" readOnly />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Special Crating</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.specialcrating} name="specialcrating" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">At extra cost</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>Protective film</Label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.protectivefilm} name="protectivefilm" onChange={this.handleChange}>
                                                    <option>-</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </Input>
                                                <p className="protectiveFilmDisclaimer">10cents extra per sq/ft</p>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Finish</label>
                                                <Input type="select" className="orderOptionsSpecsInput" value={this.props.obj.finish} name="finish" onChange={this.handleChange} required >
                                                    <option>-</option>
                                                    <option>30</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Total SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.totalsquarefeet} name="totalsquarefeet" readOnly />
                                            </FormGroup>
                                        </div>
                                        <div className="orderOptionsSpecsSmall">
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>QTY</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.qty} name="qty" required />
                                            </FormGroup>
                                        <FormGroup onChange={this.handleChange} className="orderOptionsSpecsFG">
                                                <label>Inch</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.inch} name="inch" required />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <Label>MM</Label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.mm} name="mm" readOnly />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Tag</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.tag} name="tag" onChange={this.handleChange} />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>Linear Feet</label>
                                                <Input readOnly type="text" className="orderOptionsSpecsInput" value={this.props.obj.linearfeet} name="linearfeet" />
                                            </FormGroup>
                                            <FormGroup className="orderOptionsSpecsFG">
                                                <label>SQFT.</label>
                                                <Input type="text" className="orderOptionsSpecsInput" value={this.props.obj.squarefeet} name="squarefeet" readOnly />
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
                                            {this.props.obj.i101?<FormGroup className="orderOptionsFlashingsContainer2"> 
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F101.jpg?alt=media&token=8bffe047-361f-467d-b54d-79873721fb7b"/>
                                                <CustomInput
                                                    className="orderOptionsFlashingsInput2" 
                                                    name="i101"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i101}
                                                    onChange={this.handleChange}
                                                    />
                                            </FormGroup>:''}
                                            {this.props.obj.i102?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F102.jpg?alt=media&token=1a1089f9-b2cc-476d-9405-cf79fda0ceee"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i102}
                                                    name="i102"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i103?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F103.jpg?alt=media&token=9e17a1c1-a515-49fd-92e3-9c1a5de10a4e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i103}
                                                    name="i103"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i104?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F104.jpg?alt=media&token=1621b1c6-2da6-4b81-873c-573ac49527da"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i104}
                                                    name="i104"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i106?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F106.jpg?alt=media&token=b8ef318d-25c3-47c8-b904-7fa377656077"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i106}
                                                    name="i106"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i107?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F107.jpg?alt=media&token=86f2835b-ce37-46ac-b2c4-6f0c18d8a7cb"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i107}
                                                    name="i107"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i108?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F108.jpg?alt=media&token=9f8d26df-edfe-4578-b22d-027c316abf0a"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i108}
                                                    name="i108"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i111?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F111.jpg?alt=media&token=f6f40da4-59e1-44fa-a58e-56e1ffb04ac1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i111}
                                                    name="i111"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i112?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F112.jpg?alt=media&token=8addf58e-a0a3-4fa1-99ae-b5c827d91d22"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i112}
                                                    name="i112"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i113?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F113.jpg?alt=media&token=86b9bc9d-fdc5-43a5-9797-06ff8d54054b"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i113}
                                                    name="i113"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i114?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F114.jpg?alt=media&token=6c8b8c8d-38ca-48b1-a325-33d0aec83a7d"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i114}
                                                    name="i114"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i115?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F115.jpg?alt=media&token=9252d05c-2720-4416-abaf-4eae552de636"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i115}
                                                    name="i115"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i116?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F116.jpg?alt=media&token=1f93d521-2daf-4f39-88da-f41b475f45b1"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i116}
                                                    name="i116"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i117?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F117.jpg?alt=media&token=62be0f92-9e90-43e9-8189-abeacd259fa2"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i117}
                                                    name="i117"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i118?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F118.jpg?alt=media&token=3dd781c8-5993-484f-83a9-f4f77eac3fa4"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i118}
                                                    name="i118"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i119?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F119.jpg?alt=media&token=20914689-0cdd-4203-831c-7d376503deb9"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i119}
                                                    name="i119"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i120?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F120.jpg?alt=media&token=8cfd4fe2-a94b-445a-8aa9-0906b9e2147e"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i120}
                                                    name="i120"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i121?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F121.jpg?alt=media&token=cecf7570-2e4e-4501-83e3-2eb7f6434602"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i121}
                                                    name="i121"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i122?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F122.jpg?alt=media&token=91e8e0a4-a547-4009-8c48-78f1e95f94c5"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i122}
                                                    name="i122"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i123?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F123.jpg?alt=media&token=25fb14b8-6894-46c4-88e6-79eb361dd401"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i123}
                                                    name="i123"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i128?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F128.jpg?alt=media&token=8a8eaa5a-2546-48c0-b241-ed18ba350b38"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i128}
                                                    name="i128"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i129?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F129.jpg?alt=media&token=09641c07-fe20-42a6-991e-cbf36d5eead2"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i129}
                                                    name="i129"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i130?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F130.jpg?alt=media&token=20d182b1-8002-4be7-bf95-4bcf54e30955"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i130}
                                                    name="i130"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''}
                                            {this.props.obj.i131?<FormGroup className="orderOptionsFlashingsContainer2">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/icon%20panel%2F131.jpg?alt=media&token=e71f40d0-29c7-4c16-8e62-5eaccaa884cd"/>
                                                <CustomInput 
                                                    className="orderOptionsFlashingsInput2"
                                                    type="text"
                                                    // placeholder="QTY"
                                                    value={this.props.obj.i131}
                                                    name="i131"
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
                                            {/* {a = 'peel&StickTempCover'} */}
                                            {/* {this.props.obj.a?<FormGroup className="orderOptionsFlashingsContainer">
                                                <img className="orderOptionsFlashingsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fpeel%20%26%20stick%20high%20temp%20cover.png?alt=media&token=7bfec47d-cb9b-40c3-b843-b93811e530f2"/>
                                                <CustomInput 
                                                    className="orderOptionsAccessoriesInput"
                                                    type="text"
                                                    id="annoying"
                                                    placeholder="QTY"
                                                    value={this.props.obj.a}
                                                    name="peel&StickHighTempCover"
                                                    onChange={this.handleChange} />
                                            </FormGroup>:''} */}
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

export default IconpanelsPrint;