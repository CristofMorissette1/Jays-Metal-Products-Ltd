import Head from 'next/head'
import { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class Colors extends Component {
    constructor(){
        super()
        this.state = {
            metalliccolors: true,
            acmcolors: false
        }
        this.metallicColors = this.metallicColors.bind(this);
        this.ACMColors = this.ACMColors.bind(this);
    }

    metallicColors(event) {
        event.preventDefault();
          if (this.state.metalliccolors == false) {
          this.setState({
            metalliccolors: true,
            acmcolors: false
          });
        } else {
          null;
        }
    }

    ACMColors(event) {
        event.preventDefault();
          if (this.state.acmcolors == false) {
          this.setState({
            acmcolors: true,
            metalliccolors: false
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
                    <a className="headerOptions" onClick={this.ACMColors}>ACM Colors</a>
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
                {
                    this.state.acmcolors ?
                    (
                        <div className="metallicColorsMainContainer">
                            <div className="metallicColors">
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBNT%20Bone%20White.jpg?alt=media&token=c49b1b7f-8e32-4d48-aab6-9ee38e2cd2f9"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCRT%20Oyster.jpg?alt=media&token=38e14545-da70-4634-b104-3624d72cebf9"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMST%20Mist%20White.jpg?alt=media&token=167f88b7-98ba-4a83-b0bf-4618a696dc7a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAGT%20Aluminum%20Grey.jpg?alt=media&token=7da00821-72d1-4f20-bc62-5490b2e7185d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBGY%20Grey.jpg?alt=media&token=2803c997-bd36-4af0-99ef-26ca9ed70bdc"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCNC%20Charcoal.jpg?alt=media&token=69f40460-98c4-4dbf-ace8-6e210c12117d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJBR%20Bronze.jpg?alt=media&token=ecc6df17-2f19-4a8d-a8b8-0502dd7e01c4"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTOB%20Black.jpg?alt=media&token=d356833f-b535-4e06-84dc-0f1de5124099"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FOPT%20Mica%20Platinum.jpg?alt=media&token=338a45d7-7255-4b7f-9bc0-907b2ab62ec2"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMNC%20Mica%20Anodic%20Clear.jpg?alt=media&token=173fcffa-c616-432f-b888-116a90e1f2aa"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMCU%20Mica%20Champagne.jpg?alt=media&token=863d6326-59c4-4c32-a674-5af79b6a17a3"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMZG%20Mica%20Grey.jpg?alt=media&token=1a98f96f-e3f9-43fa-b906-622591b84c1d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMFS%20Mica%20Grey.jpg?alt=media&token=b5fea93a-1f88-4e8c-bcea-c57d6c354d3d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBSX%20Metallic%20Silver.jpg?alt=media&token=3cf7f273-590b-4ebe-a673-1a3bd52be933"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSMX%20Metallic%20Silver.jpg?alt=media&token=663e8a0a-9a11-4e2a-85de-a94cceb86b53"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCMX%20Metallic%20Champagne.jpg?alt=media&token=084a71fa-edba-4edc-b689-a2a23f47e616"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMBX%20Metallic%20Bronze.jpg?alt=media&token=c3a50925-5a4b-41fb-a2c6-6d72e6f723b8"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDCX%20Metallic%20Copper.jpg?alt=media&token=e154030e-99ae-46fc-87b8-79cf14dee426"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FStainless.jpg?alt=media&token=a1361d45-40ad-45e5-b9c4-eb9ccbadd4da"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQuartz%20Zinc.jpg?alt=media&token=364ba176-244f-47b6-a209-01adb27da01b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCopper.jpg?alt=media&token=2785d5a6-a661-4acd-8c31-cd6462818b62"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FClear.jpg?alt=media&token=b66e2ef3-2f92-42c3-87b8-5ee15ba7169c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBBR%20Red.jpg?alt=media&token=8f90a6e8-1e41-4adc-bff7-6533f1546d06"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBTR%20Red.jpg?alt=media&token=35fae080-231d-4626-8495-aa50085405cd"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTOR%20Red.jpg?alt=media&token=9fa3f453-ced7-4b75-a63a-78966b82d1b1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJLR%20Red.jpg?alt=media&token=0b84a4ed-f37c-4a1c-84da-b53ca7571461"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJXR%20Red.jpg?alt=media&token=ab8de35b-eb82-4725-957e-9d7696277cd1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRC%20Red.jpg?alt=media&token=0a5bf7cd-d61a-49c5-944f-fea3ca8bd55d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAUB%20Blue.jpg?alt=media&token=599c7571-f581-4eb3-89d6-b137b96f8d71"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCVB%20Blue.jpg?alt=media&token=67522f0c-ba41-4d58-af28-9726ce539572"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHNB%20Blue.jpg?alt=media&token=d3b335d6-d6ae-4a94-9200-7c950d3b2585"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRTB%20Blue.jpg?alt=media&token=c32c49c8-d06f-4306-8be2-38a48ccbc041"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMBU%20Blue.jpg?alt=media&token=40923ef4-b678-4c92-84f4-882d03f2b275"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHYB%20Blue.jpg?alt=media&token=f233194e-ec96-46d3-810e-7afb179684cc"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FABE%20Blue.jpg?alt=media&token=14947e92-5a8d-45ca-8707-3ed8cd4d67ed"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAYW%20Yellow.jpg?alt=media&token=0702a04f-2ab3-49ac-a544-054aab310c82"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTDR%20Green.jpg?alt=media&token=eefaa6a7-53ee-4652-a663-221feefb1efa"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRVW%20White.jpg?alt=media&token=65c9d457-b792-46a5-bac5-9ea6004bf018"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHWH%20White.jpg?alt=media&token=003b726a-bba0-4075-a0d6-7d3cae876151"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCow%20White.jpg?alt=media&token=cb34f507-f1a2-4e05-a9fc-6021dde1d0e2"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCVG%20Grey.jpg?alt=media&token=76b38b3d-b647-4816-9922-893a66c004f6"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBLX%20Black.jpg?alt=media&token=8efd741a-2f06-431d-a04d-15b0def6e603"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTBL%20Black.jpg?alt=media&token=aa2093ec-24a2-434f-8700-f92183621a86"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRRM%20River%20Rock%20Grey.jpg?alt=media&token=1701a7cc-077a-4d83-8a83-f393cae8cb33"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRM%20Terra%20Cota.jpg?alt=media&token=234d792b-78d3-44a8-95d4-eb102fa2db1f"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBSM%20Slate%20Black.jpg?alt=media&token=bb64994f-3a6d-4dcb-8629-316de4a001c2"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMRO%20Antracite%20Grey.jpg?alt=media&token=f181640e-f4bc-459f-b67f-f0c479d6796e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FPEX%20Pewter%20Metallic.jpg?alt=media&token=2a15ccf1-7989-4e78-ae0c-cf2f9f707bfe"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTSZ%20Silver%20Metallic.jpg?alt=media&token=5349094f-7816-4da8-a2f8-84293aff033a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTBX%20Silver%20Metallic.jpg?alt=media&token=f8c1141a-a92b-493e-a422-bea9617dfaf7"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSTR%20Red.jpg?alt=media&token=0acea6f0-8fa7-4493-b280-8f8cc46266c1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRD%20Red.jpg?alt=media&token=58bcb4be-7f58-4304-9bb4-fb3e01f7708b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FFEF%20Red.jpg?alt=media&token=89fd684c-e5f9-4a25-a73d-2fdff6ed14d7"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBPS%20Pearl.jpg?alt=media&token=42c6cde3-e5a9-457d-be06-721ec19bf859"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FETT%20Tan.jpg?alt=media&token=658f8ebd-6af1-4ae5-9550-2c23dea3625e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCRY%20Oyster.jpg?alt=media&token=752e7c7b-c2c4-4c23-a358-6a4a8f99841c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMVC%20White.jpg?alt=media&token=8d19c88d-729d-4002-963c-9b5805f04b6f"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSAW%20White.jpg?alt=media&token=ff4c71d4-1e47-483f-8f56-aade29776b0f"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FEWH%20White.jpg?alt=media&token=d76e0452-e80d-4175-8b0a-dd85fa431418"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDYB%20Blue.jpg?alt=media&token=4b1d1dbb-4c2e-4925-b1a6-eb6cde3fb4b0"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCFB%20Blue.jpg?alt=media&token=fbc9e333-a9ea-4806-8764-c30ae55860e1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSHB%20Blue.jpg?alt=media&token=bca339e0-53f0-4021-acb1-338ffafcd628"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBGN%20Green.jpg?alt=media&token=a2312855-89aa-43bf-8051-7fe250fecc91"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FGRV%20GReen.jpg?alt=media&token=d5b74912-70a7-4a54-87b4-c73b13f77dc3"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBYL%20Yellow.jpg?alt=media&token=f77aecd9-826e-4f71-b84b-1fba7dbf365b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FEYL%20Yellow.jpg?alt=media&token=f0abeb74-cd22-495d-ab91-adbb8665b772"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FYLW%20Yellow.jpg?alt=media&token=8297c431-3e10-4cd4-8691-aaf4d09550dc"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSOG%20Grey.jpg?alt=media&token=73db8121-581a-403d-a1eb-84381fb5a35e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTXG%20Grey.jpg?alt=media&token=85df2782-6b4a-42d9-9791-5afcc41af805"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSBR%20Bronze.jpg?alt=media&token=1118063b-4ade-41d3-8608-f04e7d3d79db"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBB%20Teak.jpg?alt=media&token=c86aebf8-d23e-425a-9e8f-6108f86c6a6c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQCP%20HT%20Bamboo.jpg?alt=media&token=894fb184-b6fa-4fb2-8e54-55aa4d62911b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMPL%20Maple.jpg?alt=media&token=176e1e01-78b6-4089-8321-194ef2ef46d1"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FWLN%20Walnut.jpg?alt=media&token=1d8606e2-160a-4c9c-9a17-f2267c4c4a6d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQAE%20Mahogany.jpg?alt=media&token=b62e49e9-6aa4-445d-befa-dba5f5120fdb"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBV%20Oriental%20Cane.jpg?alt=media&token=79ea39e4-a77f-4373-8465-16d903401615"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBT%20Zebrawood.jpg?alt=media&token=41acd806-638c-4782-a8d7-de0d55d3bf76"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQAW%20Rio%20Aleon.jpg?alt=media&token=0573ab39-aa9c-4133-bf85-92f348b657e0"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMRT%20Magma%20Prismatic.jpg?alt=media&token=7c85bbf8-543f-4641-b347-f9e01ba2261c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDQO%20Orange%20Pearlescent.jpg?alt=media&token=dda75067-e469-4715-a5bf-f8739500cc24"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDQS%20Maroon%20Gold%20Shimmer.jpg?alt=media&token=9b7d7649-e851-4f70-861c-3900f3c6836f"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQCO%20Rusted%20Steel.jpg?alt=media&token=d9281344-3504-41c7-9e35-8706bc8dd261"/>
                            </div>
                        </div>
                    ) :
                    (
                        null
                    )
                }
                <Footer/>
            </div>
        )
    }
}

export default Colors;