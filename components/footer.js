export default function Footer() {
  return (
    <div className="footerMainContainer">
        <div className="footerContainer">
            <h3 className="footerContainerTitle">Keep In Touch</h3>
            <hr className="footerContainerTitleBorder"/>
            <p className="footerContainerInfo">Phone: (403) 276-6062</p>
            <p className="footerContainerInfo">Fax: (403) 276-6072</p>
            <p className="footerContainerInfo">160, 1324 36 Ave NE Calgary, AB T2E 8S1</p>
            <p className="footerContainerInfo">info@jaysmetal.net</p>
        </div>
        <div className="footerContainer">
            <h3 className="footerContainerTitle">Directory</h3>
            <hr className="footerContainerTitleBorder"/>
            <a className="footerContainerInfo" href="/"><b>Home →</b></a>
            <a className="footerContainerInfo" href="/products"><b>Products → </b></a>
            <a className="footerContainerInfo" href="/amc"><b>AMC Panels → </b></a>
            <a className="footerContainerInfo" href="/contact"><b>Contact →</b></a>
        </div>
    </div>
  )
}