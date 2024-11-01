import icons from "../../assets/Frame 93.png"
 import "./Footer.css"
export default function Footer() {
    return (
        <footer>
            <div className="cont">
                <div className="section">
                    <h2>We believe in making motherhood simpler</h2>
                    <div className="icon">
                        <img src={icons}>
                        </img>
                    </div>

                </div>
                <div className="section">
                    <h3>Connect</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>
                        Advertise with us
                        </li>
                        <li>Share your story</li>
                    </ul>
                </div>
                <div className="section">
                   <h3>About us </h3>
                    <ul>
                        <li>Our story</li>
                        <li>  CareNest Insights</li>
                    </ul>
                </div>

            </div>
       </footer>
    )
}