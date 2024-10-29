
// import "./Top.css"

// import one from "../../assets/second_vectors-removebg-preview.png"
// import two from "../../assets/one_vectors-removebg-preview.png"
// import three from "../../assets/thirds_vectors-removebg-preview.png"
// import aicry from "../../assets/814c07e1-028e-45ae-ad0b-30a0286635d8.jpg"
// import health from "../../assets/c1677ffc-a8d9-485a-89c1-be9e4c6d026c.jpg"
// import shoppinng from "../../assets/5aaf4d2d-c1f0-4826-99ac-86772c0ca575.jpg"
// export default function Top() {
//     return (
//         <div className="top">
//             <div className="baby-tools1">
//                 <img src={one}>
//                 </img>

//             </div>
//             <div className="baby-tools2">
//                 <img src={two}>
//                 </img>

//             </div>
//             <div className="baby-tools3">
//                 <img src={three}>
//                 </img>

//             </div>
//             <h2>
//                 our best services
//             </h2>
//             <div className="cont">
//                 <div className="featur-1">
                    
//                         <img src={aicry}   style={{maxWidth:"100px"}}></img>
                      
                        
                        
//                     <div className="header">
//                     <h4> Cry analysis</h4>
//                     <p>Listen to your baby's cries, and let us help you understand the reason! With cry analysis, we'll provide you with the right tips to meet your baby's needs.</p>
//                     </div>
                  

//                 </div>
     
//                 <div className="featur-1">
                    
//                     <img src={health}   style={{maxWidth:"100px"}}></img>
                  
                    
                    
//                 <div className="header">
//                 <h4> Health care and development </h4>
//                 <p>Track your baby's health and development with ease! From vaccination reminders to health tips, we're here to support you</p>
//                 </div>
              

//                 </div>
//                 <div className="featur-1">
                    
//                     <img src={shoppinng}   style={{maxWidth:"100px"}}></img>
                  
                    
                    
//                 <div className="header">
//                 <h4> Entertainment and shopping </h4>
//                 <p>Enjoy fun moments with your baby! From stories and games to shopping for your needs, we provide everything you need </p>
//                 </div>
              

//             </div>
                

//             </div>
           
            
            
//          </div>
//     )
// }
import React, { useEffect, useRef, useState } from 'react';
import "./Top.css";

import one from "../../assets/second_vectors-removebg-preview.png";
import two from "../../assets/one_vectors-removebg-preview.png";
import three from "../../assets/thirds_vectors-removebg-preview.png";
import aicry from "../../assets/814c07e1-028e-45ae-ad0b-30a0286635d8.jpg";
import health from "../../assets/c1677ffc-a8d9-485a-89c1-be9e4c6d026c.jpg";
import shoppinng from "../../assets/5aaf4d2d-c1f0-4826-99ac-86772c0ca575.jpg";

export default function Top() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true); 
                }
            },
            { threshold: 0.2 } 
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className={`top ${isVisible ? 'active' : ''}`} ref={sectionRef}>
            <div className="baby-tools1">
                <img src={one} alt="Tool 1" />
            </div>
            <div className="baby-tools2">
                <img src={two} alt="Tool 2" />
            </div>
            <div className="baby-tools3">
                <img src={three} alt="Tool 3" />
            </div>
            <h2>Our best services</h2>
            <div className="cont">
                <div className="featur-1">
                    <img src={aicry} style={{ maxWidth: "70px",height:"70px" }} alt="Cry Analysis" />
                    <div className="header">
                        <h4>Cry analysis</h4>
                        <p>Listen to your baby's cries, and let us help you understand the reason! With cry analysis, we'll provide you with the right tips to meet your baby's needs.</p>
                    </div>
                </div>
                <div className="featur-1">
                    <img src={health} style={{ maxWidth: "70px",height:"70px" }} alt="Health Care" />
                    <div className="header">
                        <h4>Health care and development</h4>
                        <p>Track your baby's health and development with ease! From vaccination reminders to health tips, we're here to support you.</p>
                    </div>
                </div>
                <div className="featur-1">
                    <img src={shoppinng} style={{ maxWidth: "70px",height:"70px" }} alt="Shopping and Entertainment" />
                    <div className="header">
                        <h4>Entertainment and shopping</h4>
                        <p>Enjoy fun moments with your baby! From stories and games to shopping for your needs, we provide everything you need.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
