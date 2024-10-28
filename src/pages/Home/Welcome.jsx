import { Link } from "react-router-dom";
import "./Home.css"
import ReactWOW from 'react-wow'
import NextNavbar from "../../Componets/NextNavbar/NextNavbar";

export default function Welcome() {
    return (
        <div className="welcome">
         <NextNavbar/>
            <div className="text">
                <ReactWOW animation="animate__fadeInLeft">
                <h1>Start the Journey to Your Baby's Bright and Healthy Future</h1>
                </ReactWOW>
             
                <button className="btn-welcome">
                    <Link to="/Signup"
                    >
                    start free
                    </Link>
                    
                </button>
            </div>

        </div>
    )
}