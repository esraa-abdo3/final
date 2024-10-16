import { Outlet } from "react-router-dom";
import "./Signup.css"

export default function Auth() {
    return (
        <div className="container-form">
            <div className="Signup">
            <Outlet/>
            <div className="Img-Auth">
                   
                   </div>
             </div>
            </div>


    )
}