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
                <div className="metallicColorsHeader">
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
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Facorn.jpg?alt=media&token=4ee2b858-64be-4a2a-bf06-0cfc808bfedf"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fautumn.jpg?alt=media&token=84a81638-d19f-4602-88c8-12f39b892590"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fespresso.jpg?alt=media&token=d4200505-f315-48bd-893a-416f13f6f7a2"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2FFrontier.jpg?alt=media&token=0b63d35f-2a87-4a58-a713-5de563627168"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2FGunstock.jpg?alt=media&token=2b089097-15f1-4735-852b-543850bbdd4b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsaddle.jpg?alt=media&token=6fb3f596-42cd-44d0-89fb-98131ac8f1c9"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fheritage.jpg?alt=media&token=39338630-d3a5-4218-ab94-d18d7a31e340"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbarnboard.jpg?alt=media&token=7141af69-f07c-472e-8f47-2baf27cabaef"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwagonwood.jpg?alt=media&token=0272051f-b6fe-4150-ad42-235a954fa0c7"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fburnished%20slate.jpg?alt=media&token=9a5dc857-61f6-40bd-bb3a-a7a769fafae0"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fgraphite.jpg?alt=media&token=f30467a8-837a-4a9c-a98e-8880ad17ee74"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fkona%20brown.jpg?alt=media&token=b6822ec1-f5b7-4887-9abf-385357870bca"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fonyx%20black.jpg?alt=media&token=c4b883ce-f893-4199-8281-2a6c5108563c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbronze.jpg?alt=media&token=13785f71-6c24-48ac-9f6d-13aba42a6c95"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fchampagne%20metallic.jpg?alt=media&token=4ff33ca3-bfe9-4577-83b7-b53c82faf33e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcolonial%20red.jpg?alt=media&token=12f4a821-1c2e-47e4-85c6-efca80447796"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20bronze.jpg?alt=media&token=957a038a-589c-48dd-96fd-8029918c4b54"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fforrest%20green.jpg?alt=media&token=182bdfcf-ab77-47b2-9ae4-6f64b32c2581"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fhartford%20green.jpg?alt=media&token=499a8623-950d-4ef1-9363-bc94fb76f878"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fhemlock%20green.jpg?alt=media&token=6591da94-962f-4f25-8d5c-403e51c09bc8"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmocha.jpg?alt=media&token=2ce2e967-a146-4e2f-8303-e1c753f0f434"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fold%20town%20gray.jpg?alt=media&token=373428ea-96e7-46af-abbc-bd26b0a68b9d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fold%20zinc%20gray.jpg?alt=media&token=d4df7bd8-0988-4371-9652-4de282987e5a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fparchment.jpg?alt=media&token=526620d6-0e07-469d-9c20-ddd95aa4e3cb"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregal%20blue.jpg?alt=media&token=58f2b0f7-90b3-4be4-b770-f84651daea1a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregal%20white.jpg?alt=media&token=09cba1fe-f3a9-4cd0-9cc2-b5588b9ab960"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fretro%20red.jpg?alt=media&token=30e3fe2f-5301-4ecf-b9f4-fa8892e2a115"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsierra%20tan.jpg?alt=media&token=60d4e8f1-c436-4c75-80b7-c40bfeb58c28"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsilver%20metallic.jpg?alt=media&token=29a90a5b-7866-4b96-9699-a2314aa7aabc"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fslate%20gray.jpg?alt=media&token=98f9f94f-aef4-4b43-9d32-648e46efc906"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fterra%20cotta.jpg?alt=media&token=c2b831d6-878c-4230-819d-db4ea7a29d90"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftwilight%20blue.jpg?alt=media&token=8230c69a-5077-480a-934b-8b0596c49e5d"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fweathered%20copper.jpg?alt=media&token=d2521052-b63e-4c0c-b2d9-47add00fb2b6"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbright%20side.jpg?alt=media&token=597936ed-2fd1-43ae-8166-03cf493cc1dd"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcambridge%20white.jpg?alt=media&token=f8bf5044-26b5-49ec-aef0-b0b035881c24"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwhite%20white.jpg?alt=media&token=9340c2b7-4f4a-4f4e-85f7-971d7d3a0f5c"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbone%20white.jpg?alt=media&token=f5b191f3-9d36-4744-9098-05b1dfa324e3"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsurf%20white.jpg?alt=media&token=538fcc42-149c-4835-a1ab-c289e302c93e"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fstone%20grey.jpg?alt=media&token=73eba8fc-1a24-4cc6-a65a-b37303803238"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fregent%20grey.jpg?alt=media&token=5b4438cd-150b-43d7-9d30-dd6ab6b4f013"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fpebblestone.jpg?alt=media&token=96601aa0-58fb-4eb0-bd1f-22144c22afe8"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcharcoal.jpg?alt=media&token=be19a08e-a0e8-40cb-85f1-c747f5836dc0"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fblack.jpg?alt=media&token=04df6593-0cd3-4fb2-b677-4b300e4e90af"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmetro%20brown.jpg?alt=media&token=cb1c4bc3-46bb-440d-bde7-e34f0b3598b8"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcoffee%20brown.jpg?alt=media&token=15b53de3-4bbc-429b-ba4f-e231dbcd83f9"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20brown.jpg?alt=media&token=63f90fe5-cdf0-4d74-93cf-24658d718d01"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fcashmere.jpg?alt=media&token=cda4da4f-278a-40f7-93ca-db434742f648"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fantique%20linen.jpg?alt=media&token=e7c7fc8c-3854-451e-a0ca-ab495a3fd3fd"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fwicker.jpg?alt=media&token=e4f31c1b-8c4e-47fa-9195-baeb314e3329"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbriarwood%20tan.jpg?alt=media&token=cf8e1917-ad23-4bb9-95be-da558a0359f6"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftan.jpg?alt=media&token=7e9e1f2a-5a97-4431-947c-65f2ec168b1b"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Ftile%20red.jpg?alt=media&token=a1970dd4-af3a-408a-8d9c-3ae3cbf74750"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdark%20red.jpg?alt=media&token=05273146-b3a8-4a2b-892c-8e9a2c33216a"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fbright%20red.jpg?alt=media&token=1cb44897-592e-4e55-bb55-7711e54e3c24"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Flabrador%20blue.jpg?alt=media&token=ef902c7d-2a1f-4065-9694-e22f2ea21a41"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fheron%20blue.jpg?alt=media&token=1018cde3-1d2a-4c5a-804d-0cac96a013f5"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Froyal%20blue.jpg?alt=media&token=cebc19b2-8061-4515-b9ce-8c71d52d2ddd"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fslate%20blue.jpg?alt=media&token=0c1b5597-7df4-4b8b-973c-22e96abdaa21"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fsapphire%20blue.jpg?alt=media&token=39256ff9-2478-406e-aa6c-686825f298c2"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fdeep%20water%20green.jpg?alt=media&token=cd7ebdef-8d52-4486-99c2-fc17556ec300"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fspruce%20green.jpg?alt=media&token=ece1c69d-af30-41eb-aa8e-706638f75b43"/>
                                <img className="metallicColorsImage" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%2Fmelchers%20green.jpg?alt=media&token=5d183161-a22a-4198-9de1-b8e2779ab16e"/>
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
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">Bone White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBNT%20Bone%20White.jpg?alt=media&token=c49b1b7f-8e32-4d48-aab6-9ee38e2cd2f9"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CRT Oyster</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCRT%20Oyster.jpg?alt=media&token=38e14545-da70-4634-b104-3624d72cebf9"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MST Mist White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMST%20Mist%20White.jpg?alt=media&token=167f88b7-98ba-4a83-b0bf-4618a696dc7a"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">AGT Aluminum Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAGT%20Aluminum%20Grey.jpg?alt=media&token=7da00821-72d1-4f20-bc62-5490b2e7185d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BGY Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBGY%20Grey.jpg?alt=media&token=2803c997-bd36-4af0-99ef-26ca9ed70bdc"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CNC Charcoal</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCNC%20Charcoal.jpg?alt=media&token=69f40460-98c4-4dbf-ace8-6e210c12117d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">JBR Bronze</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJBR%20Bronze.jpg?alt=media&token=ecc6df17-2f19-4a8d-a8b8-0502dd7e01c4"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TOB Black</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTOB%20Black.jpg?alt=media&token=d356833f-b535-4e06-84dc-0f1de5124099"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">OPT Mica Platinum</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FOPT%20Mica%20Platinum.jpg?alt=media&token=338a45d7-7255-4b7f-9bc0-907b2ab62ec2"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MNC Mica Anodic Clear</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMNC%20Mica%20Anodic%20Clear.jpg?alt=media&token=173fcffa-c616-432f-b888-116a90e1f2aa"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MCU Mica Champagne</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMCU%20Mica%20Champagne.jpg?alt=media&token=863d6326-59c4-4c32-a674-5af79b6a17a3"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MZG Mica Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMZG%20Mica%20Grey.jpg?alt=media&token=1a98f96f-e3f9-43fa-b906-622591b84c1d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">FMF Mica Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMFS%20Mica%20Grey.jpg?alt=media&token=b5fea93a-1f88-4e8c-bcea-c57d6c354d3d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BSX Metallic Silver</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBSX%20Metallic%20Silver.jpg?alt=media&token=3cf7f273-590b-4ebe-a673-1a3bd52be933"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">SMX Metallic Silver</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSMX%20Metallic%20Silver.jpg?alt=media&token=663e8a0a-9a11-4e2a-85de-a94cceb86b53"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CMX Metallic Champagne</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCMX%20Metallic%20Champagne.jpg?alt=media&token=084a71fa-edba-4edc-b689-a2a23f47e616"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MBX Metallic Bronze</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMBX%20Metallic%20Bronze.jpg?alt=media&token=c3a50925-5a4b-41fb-a2c6-6d72e6f723b8"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">DCX Metallic Copper</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDCX%20Metallic%20Copper.jpg?alt=media&token=e154030e-99ae-46fc-87b8-79cf14dee426"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">Stainless</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FStainless.jpg?alt=media&token=a1361d45-40ad-45e5-b9c4-eb9ccbadd4da"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">Quartz Zinc</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQuartz%20Zinc.jpg?alt=media&token=364ba176-244f-47b6-a209-01adb27da01b"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">Copper</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCopper.jpg?alt=media&token=2785d5a6-a661-4acd-8c31-cd6462818b62"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">Clear</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FClear.jpg?alt=media&token=b66e2ef3-2f92-42c3-87b8-5ee15ba7169c"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BBR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBBR%20Red.jpg?alt=media&token=8f90a6e8-1e41-4adc-bff7-6533f1546d06"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BTR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBTR%20Red.jpg?alt=media&token=35fae080-231d-4626-8495-aa50085405cd"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TOR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTOR%20Red.jpg?alt=media&token=9fa3f453-ced7-4b75-a63a-78966b82d1b1"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">JLR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJLR%20Red.jpg?alt=media&token=0b84a4ed-f37c-4a1c-84da-b53ca7571461"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">JXR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FJXR%20Red.jpg?alt=media&token=ab8de35b-eb82-4725-957e-9d7696277cd1"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TRC Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRC%20Red.jpg?alt=media&token=0a5bf7cd-d61a-49c5-944f-fea3ca8bd55d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">AUB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAUB%20Blue.jpg?alt=media&token=599c7571-f581-4eb3-89d6-b137b96f8d71"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TRC Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRC%20Red.jpg?alt=media&token=0a5bf7cd-d61a-49c5-944f-fea3ca8bd55d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CVB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCVB%20Blue.jpg?alt=media&token=67522f0c-ba41-4d58-af28-9726ce539572"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">HNB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHNB%20Blue.jpg?alt=media&token=d3b335d6-d6ae-4a94-9200-7c950d3b2585"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">RTB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRTB%20Blue.jpg?alt=media&token=c32c49c8-d06f-4306-8be2-38a48ccbc041"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MBU Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMBU%20Blue.jpg?alt=media&token=40923ef4-b678-4c92-84f4-882d03f2b275"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">HYB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHYB%20Blue.jpg?alt=media&token=f233194e-ec96-46d3-810e-7afb179684cc"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">ABE Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FABE%20Blue.jpg?alt=media&token=14947e92-5a8d-45ca-8707-3ed8cd4d67ed"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">AYW Yellow</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FAYW%20Yellow.jpg?alt=media&token=0702a04f-2ab3-49ac-a544-054aab310c82"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TDR Green</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTDR%20Green.jpg?alt=media&token=eefaa6a7-53ee-4652-a663-221feefb1efa"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">RVW White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRVW%20White.jpg?alt=media&token=65c9d457-b792-46a5-bac5-9ea6004bf018"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">HWH White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FHWH%20White.jpg?alt=media&token=003b726a-bba0-4075-a0d6-7d3cae876151"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">COW White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCow%20White.jpg?alt=media&token=cb34f507-f1a2-4e05-a9fc-6021dde1d0e2"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CVG Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCVG%20Grey.jpg?alt=media&token=76b38b3d-b647-4816-9922-893a66c004f6"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BLX Black</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBLX%20Black.jpg?alt=media&token=8efd741a-2f06-431d-a04d-15b0def6e603"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TBL Black</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTBL%20Black.jpg?alt=media&token=aa2093ec-24a2-434f-8700-f92183621a86"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">RRM River Rock Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FRRM%20River%20Rock%20Grey.jpg?alt=media&token=1701a7cc-077a-4d83-8a83-f393cae8cb33"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TRM Terra Cota</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRM%20Terra%20Cota.jpg?alt=media&token=234d792b-78d3-44a8-95d4-eb102fa2db1f"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BSM Slate Black</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBSM%20Slate%20Black.jpg?alt=media&token=bb64994f-3a6d-4dcb-8629-316de4a001c2"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MRO Antracite Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMRO%20Antracite%20Grey.jpg?alt=media&token=f181640e-f4bc-459f-b67f-f0c479d6796e"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">PEX Pewter Metallic</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FPEX%20Pewter%20Metallic.jpg?alt=media&token=2a15ccf1-7989-4e78-ae0c-cf2f9f707bfe"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TSZ Silver Metallic</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTSZ%20Silver%20Metallic.jpg?alt=media&token=5349094f-7816-4da8-a2f8-84293aff033a"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TBX Silver Metallic</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTBX%20Silver%20Metallic.jpg?alt=media&token=f8c1141a-a92b-493e-a422-bea9617dfaf7"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TRD Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTRD%20Red.jpg?alt=media&token=58bcb4be-7f58-4304-9bb4-fb3e01f7708b"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">STR Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSTR%20Red.jpg?alt=media&token=0acea6f0-8fa7-4493-b280-8f8cc46266c1"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">FEF Red</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FFEF%20Red.jpg?alt=media&token=89fd684c-e5f9-4a25-a73d-2fdff6ed14d7"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BPS Pearl</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBPS%20Pearl.jpg?alt=media&token=42c6cde3-e5a9-457d-be06-721ec19bf859"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">ETT Tan</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FETT%20Tan.jpg?alt=media&token=658f8ebd-6af1-4ae5-9550-2c23dea3625e"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CRY Oyster</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCRY%20Oyster.jpg?alt=media&token=752e7c7b-c2c4-4c23-a358-6a4a8f99841c"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MVC White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMVC%20White.jpg?alt=media&token=8d19c88d-729d-4002-963c-9b5805f04b6f"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">SAW White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSAW%20White.jpg?alt=media&token=ff4c71d4-1e47-483f-8f56-aade29776b0f"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">EWH White</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FEWH%20White.jpg?alt=media&token=d76e0452-e80d-4175-8b0a-dd85fa431418"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">DYB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDYB%20Blue.jpg?alt=media&token=4b1d1dbb-4c2e-4925-b1a6-eb6cde3fb4b0"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">CFB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FCFB%20Blue.jpg?alt=media&token=fbc9e333-a9ea-4806-8764-c30ae55860e1"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">SHB Blue</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSHB%20Blue.jpg?alt=media&token=bca339e0-53f0-4021-acb1-338ffafcd628"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BGN Green</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBGN%20Green.jpg?alt=media&token=a2312855-89aa-43bf-8051-7fe250fecc91"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">GRV Green</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FGRV%20GReen.jpg?alt=media&token=d5b74912-70a7-4a54-87b4-c73b13f77dc3"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">BYL Yellow</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FBYL%20Yellow.jpg?alt=media&token=f77aecd9-826e-4f71-b84b-1fba7dbf365b"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">EYL Yellow</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FEYL%20Yellow.jpg?alt=media&token=f0abeb74-cd22-495d-ab91-adbb8665b772"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">YLW Yellow</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FYLW%20Yellow.jpg?alt=media&token=8297c431-3e10-4cd4-8691-aaf4d09550dc"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">SOG Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSOG%20Grey.jpg?alt=media&token=73db8121-581a-403d-a1eb-84381fb5a35e"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">TXG Grey</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FTXG%20Grey.jpg?alt=media&token=85df2782-6b4a-42d9-9791-5afcc41af805"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">SBR Bronze</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FSBR%20Bronze.jpg?alt=media&token=1118063b-4ade-41d3-8608-f04e7d3d79db"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QBB Teak</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBB%20Teak.jpg?alt=media&token=c86aebf8-d23e-425a-9e8f-6108f86c6a6c"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QCP Bamboo</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQCP%20HT%20Bamboo.jpg?alt=media&token=894fb184-b6fa-4fb2-8e54-55aa4d62911b"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MPL Maple</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMPL%20Maple.jpg?alt=media&token=176e1e01-78b6-4089-8321-194ef2ef46d1"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">WLN Walnut</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FWLN%20Walnut.jpg?alt=media&token=1d8606e2-160a-4c9c-9a17-f2267c4c4a6d"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QAE Mahogany</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQAE%20Mahogany.jpg?alt=media&token=b62e49e9-6aa4-445d-befa-dba5f5120fdb"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QBV Oriental Cane</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBV%20Oriental%20Cane.jpg?alt=media&token=79ea39e4-a77f-4373-8465-16d903401615"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QBT Zebrawood</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQBT%20Zebrawood.jpg?alt=media&token=41acd806-638c-4782-a8d7-de0d55d3bf76"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QAW Rio Leon</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQAW%20Rio%20Aleon.jpg?alt=media&token=0573ab39-aa9c-4133-bf85-92f348b657e0"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">MRT Magma Prismatic</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FMRT%20Magma%20Prismatic.jpg?alt=media&token=7c85bbf8-543f-4641-b347-f9e01ba2261c"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">DQO Orange Pearlescent</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDQO%20Orange%20Pearlescent.jpg?alt=media&token=dda75067-e469-4715-a5bf-f8739500cc24"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">DQS Maroon Gold Shimmer</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FDQS%20Maroon%20Gold%20Shimmer.jpg?alt=media&token=9b7d7649-e851-4f70-861c-3900f3c6836f"/>
                                </div>
                                <div className="acmColorsSmall">
                                    <p className="acmColorsName">QCO Rusted Steel</p>
                                    <img className="acmColors" src="https://firebasestorage.googleapis.com/v0/b/jays-metal-products.appspot.com/o/colors%20page%2FQCO%20Rusted%20Steel.jpg?alt=media&token=d9281344-3504-41c7-9e35-8706bc8dd261"/>
                                </div>
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