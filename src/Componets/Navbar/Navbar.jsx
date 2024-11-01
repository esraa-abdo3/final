// import "./Navbar.css"
// import logo from "../../assets/logonav.png"
// import { Link } from "react-router-dom"
// import { FaBars } from "react-icons/fa";
// import { useState } from "react";

// export default function Navbar() {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!isSidebarOpen);
//         const sidebar = document.querySelector('.categories');
//     sidebar.classList.toggle('show', !isSidebarOpen);
//     };
//     return (
//         <div className="Navbar">
        
               
//             <nav>
//             <FaBars onClick={toggleSidebar} className="navbar-icon" />
//                     <div className="logo">
//                         <img src={logo} alt="logo" />

//                     </div>
//                     <div className="Navbar-btn">
//                     <button className="loging">
//                         <Link to="login">
//                         Log in
//                         </Link>
                       

//                         </button>
//                     <button className="signup active">
//                         <Link to="Signup">
//                             sign up
//                         </Link>
                            
//                         </button>

//                     </div>

//             </nav>

       

//         </div>
    
//      )
// }
import "./Navbar.css";
import logo from "../../assets/logonav.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import NextNavbar from "../NextNavbar/NextNavbar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Navbar">
            <div className="cont">
            <nav>
                           <FaBars style={{fontSize:"25px" , color:"black"}} className="menu-icon" onClick={toggleSidebar} />
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Navbar-btn">
                    <button className="loging">
                        <Link to="Auth/login">Log in</Link>
                    </button>
                    <button className="signup active">
                        <Link to="Auth/Signup">sign up</Link>
                    </button>
             

</div>
         
              
            </nav>
                
           </div>
           
            <div className={`categories ${isOpen ? 'show' : ''}`}>
          
           
                <div className="cont">
                    <div className="all" style={{display:"flex " ,flexDirection :"column" ,justifyContent :"space-between" , height:"100%" ,maxwidth:"100%"}}>
                        <div style={{display:"flex" ,flexDirection:"column" ,gap:"30px"}} >
                        <Link to="/" onClick={toggleSidebar}>Home</Link>
            <Link to="/" onClick={toggleSidebar}>Cry Guide</Link>
            <Link to="/" onClick={toggleSidebar}>Reminders</Link>
            <Link to="/" onClick={toggleSidebar}>Baby Growth</Link>
            <Link to="/" onClick={toggleSidebar}>Mamy Tips</Link>
            <Link to="/" onClick={toggleSidebar}>Doctors</Link>
            <Link to="/" onClick={toggleSidebar}>Shopping</Link>
                    <Link to="/" onClick={toggleSidebar}>Entertainment</Link>  
                        </div>
                        <div className="Navbar-btn">
                    <button className="loging">
                        <Link to="login">Log in</Link>
                    </button>
                    <button className="signup active">
                        <Link to="Signup">sign up</Link>
                    </button>
                </div>
                    </div>
                 
           
         
                
       
                </div>
                <div className="icon" >
                    <FaBars style={{fontSize:"25px"}} className="menu-icon" onClick={toggleSidebar}  />
                    </div>
            </div>
        </div>
    );
}
